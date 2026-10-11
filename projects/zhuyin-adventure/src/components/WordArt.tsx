import { word } from "../data/advanced";
function Eyes({ y = 82 }: { y?: number }) {
  return (
    <>
      <circle cx="64" cy={y} r="4" fill="#203e36" />
      <circle cx="96" cy={y} r="4" fill="#203e36" />
      <path d={`M73 ${y + 18}q7 7 14 0`} fill="none" />
    </>
  );
}
export function WordArt({ id }: { id: string }) {
  const title = word(id).text;
  const pictures: Record<string, React.ReactNode> = {
    cat: (
      <>
        <path d="M39 65 35 29 65 47M96 47l29-18-4 38" fill="#efc38e" />
        <ellipse cx="80" cy="85" rx="49" ry="43" fill="#f4d5ac" />
        <Eyes />
        <path d="M39 88 18 84m23 14-23 5m103-15 21-4m-23 14 23 5" fill="none" />
        <path d="m76 90 4 4 4-4" fill="#cd8773" />
      </>
    ),
    chicken: (
      <>
        <path d="M66 43q-9-24 7-17 8-21 16 0 20-4 11 20" fill="#d99a86" />
        <ellipse cx="80" cy="83" rx="47" ry="43" fill="#fffdf6" />
        <Eyes y={74} />
        <path d="m69 88 11 13 11-13Z" fill="#e8bb56" />
        <path d="m66 127-6 13m33-13 7 13" />
      </>
    ),
    melon: (
      <>
        <path d="M80 36q-4-17 13-15" fill="none" />
        <circle cx="80" cy="86" r="49" fill="#b7d197" />
        <path
          d="M80 38c-27 22-27 75 0 96m0-96c27 22 27 75 0 96M31 86h98"
          fill="none"
          stroke="#719b66"
        />
        <Eyes />
      </>
    ),
    flower: (
      <>
        <path
          d="M80 99v43m0-20q-35 0-33-27 26 0 33 27m0 12q32-1 31-25-25 0-31 25"
          fill="#a7c797"
        />
        <g fill="#edbcac">
          <ellipse cx="80" cy="42" rx="16" ry="27" />
          <ellipse cx="80" cy="98" rx="16" ry="27" />
          <ellipse cx="52" cy="70" rx="27" ry="16" />
          <ellipse cx="108" cy="70" rx="27" ry="16" />
        </g>
        <circle cx="80" cy="70" r="25" fill="#f3dc8a" />
        <Eyes y={63} />
      </>
    ),
    fish: (
      <>
        <path d="m42 68-28-24v65l28-19" fill="#99c7d6" />
        <ellipse cx="87" cy="80" rx="49" ry="35" fill="#c0dfe6" />
        <path
          d="M82 47q-9-18 12-19l11 22M78 112q-5 22 20 16l6-20"
          fill="#99c7d6"
        />
        <circle cx="110" cy="71" r="4" fill="#203e36" />
        <path d="M104 87q10 8 18-3M70 59q-15 22 0 44" fill="none" />
      </>
    ),
    cow: (
      <>
        <path
          d="M53 46q-20-18-14-28l21 23m45 5q20-18 14-28l-21 23"
          fill="#e9c984"
        />
        <path
          d="M42 56q-37-7-24 17l21 8m79-25q37-7 24 17l-21 8"
          fill="#dfc29f"
        />
        <ellipse cx="80" cy="80" rx="45" ry="43" fill="#fffdf6" />
        <path d="M49 49q30-13 25 15-17 17-35 7" fill="#66847b" />
        <Eyes y={75} />
        <ellipse cx="80" cy="103" rx="35" ry="22" fill="#efc7b7" />
        <circle cx="66" cy="103" r="3" />
        <circle cx="94" cy="103" r="3" />
      </>
    ),
    ball: (
      <>
        <circle cx="80" cy="80" r="54" fill="#f5d99b" />
        <path
          d="M41 43q42 30 78 72M119 43q-42 30-78 72M28 70q55-10 98 27M77 27q-9 70 28 100"
          fill="none"
          stroke="#b57263"
        />
      </>
    ),
    horse: (
      <>
        <path d="m56 50 1-32 21 24m23 7 12-24 9 36" fill="#bb916b" />
        <path d="M57 48q-19 9-20 40l12 26 29-21" fill="#7c594a" />
        <path
          d="M62 42q57-15 60 48l-6 33q-4 19-35 19-35-1-36-28l6-49Z"
          fill="#d8af80"
        />
        <Eyes y={73} />
        <ellipse cx="82" cy="117" rx="33" ry="20" fill="#f0d3ad" />
        <circle cx="68" cy="115" r="3" />
        <circle cx="95" cy="115" r="3" />
      </>
    ),
    dog: (
      <>
        <ellipse cx="37" cy="78" rx="18" ry="35" fill="#aa7e5d" />
        <ellipse cx="123" cy="78" rx="18" ry="35" fill="#aa7e5d" />
        <ellipse cx="80" cy="84" rx="47" ry="43" fill="#eed1a7" />
        <Eyes />
        <ellipse cx="80" cy="105" rx="21" ry="17" fill="#fff5df" />
        <path d="m73 97 7 7 7-7Z" fill="#203e36" />
        <path d="M78 111q-6 20 6 20 11 0 3-20" fill="#d89b91" />
      </>
    ),
    rabbit: (
      <>
        <ellipse cx="59" cy="42" rx="13" ry="30" fill="#fffdf6" />
        <ellipse cx="101" cy="42" rx="13" ry="30" fill="#fffdf6" />
        <path d="M59 25v26m42-26v26" stroke="#e6b5a5" strokeWidth="7" />
        <ellipse cx="80" cy="91" rx="48" ry="40" fill="#fffdf6" />
        <Eyes y={84} />
        <path d="m76 97 4 4 4-4" fill="#d89b91" />
      </>
    ),
    tree: (
      <>
        <path d="M69 78h23v62H69Z" fill="#d0a17c" />
        <path
          d="M80 22q30-5 36 23 35 1 30 30 7 33-31 31-10 18-35 3-26 16-38-3-33 0-28-29-7-30 26-32 9-25 40-23Z"
          fill="#a8c797"
        />
        <Eyes y={65} />
      </>
    ),
    bean: (
      <>
        <path
          d="M40 59c-8-24 29-35 49-13s11 45-13 42-6 32 12 36c-61 11-74-38-48-65Z"
          fill="#ddbe8e"
        />
        <path d="M67 56q19 24-5 44" fill="none" stroke="#9b7653" />
        <circle cx="48" cy="64" r="3" fill="#203e36" />
      </>
    ),
  };
  return (
    <svg
      className="word-art"
      viewBox="0 0 160 160"
      role="img"
      aria-label={`${title}的圖片`}
    >
      <title>{title}的圖片</title>
      <g
        stroke="#39594c"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {pictures[id]}
      </g>
    </svg>
  );
}
