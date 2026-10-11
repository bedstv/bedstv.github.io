const BASE = import.meta.env.BASE_URL;
class AudioPlayer {
  context: AudioContext | null = null;
  source: AudioBufferSourceNode | null = null;
  token = 0;
  cache = new Map<string, AudioBuffer>();
  async unlock() {
    if (!this.context) this.context = new AudioContext();
    if (this.context.state !== "running") await this.context.resume();
    if (this.context.state !== "running")
      throw new Error("請再點一次喇叭，開啟聲音。");
  }
  stop() {
    this.token++;
    try {
      this.source?.stop();
    } catch {
      /* already ended */
    }
    this.source = null;
  }
  async play(clips: string[]) {
    this.stop();
    await this.unlock();
    const token = this.token;
    const ctx = this.context!;
    for (const id of clips) {
      if (token !== this.token) return false;
      let buffer = this.cache.get(id);
      if (!buffer) {
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), 15000);
        try {
          const response = await fetch(`${BASE}audio/${id}.mp3`, {
            signal: controller.signal,
          });
          if (!response.ok) throw new Error("音檔尚未下載完成，請連線後再試。");
          buffer = await ctx.decodeAudioData(await response.arrayBuffer());
          this.cache.set(id, buffer);
        } finally {
          clearTimeout(timer);
        }
      }
      if (token !== this.token) return false;
      await new Promise<void>((resolve) => {
        const source = ctx.createBufferSource();
        this.source = source;
        source.buffer = buffer!;
        source.connect(ctx.destination);
        source.onended = () => resolve();
        source.start();
      });
      if (token !== this.token) return false;
    }
    return true;
  }
}
export const audio = new AudioPlayer();
