import Link from "next/link";

const features = [
  {
    title: "症例整理",
    desc: "観察・仮説・優先評価の流れを分かりやすく整理。",
  },
  {
    title: "SOAP補助",
    desc: "記録で詰まりやすいAssessmentの考え方を補助。",
  },
  {
    title: "実習日誌サポート",
    desc: "その日の学び、反省、明日の目標までつなげる。",
  },
];

export default function HomePage() {
  return (
    <main>
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="inline-block rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
          理学療法士実習生向けサポートサイト
        </div>

        <h1 className="mt-6 text-5xl font-black leading-tight md:text-6xl">
          PT AI Clinical
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
          理学療法士実習生が、症例の考え方、SOAP、実習日誌、患者説明を
          分かりやすく整理できる学習サポートサイトです。
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/analyze"
            className="rounded-2xl border border-white/20 px-6 py-3 font-bold"
          >
            疑似分析を試す
          </Link>

          <Link
            href="/how-to"
            className="rounded-2xl border border-white/20 px-6 py-3 font-bold"
          >
            使い方を見る
          </Link>

          <Link
            href="/pricing"
            className="rounded-2xl border border-white/20 px-6 py-3 font-bold"
          >
            料金を見る
          </Link>

          <Link
            href="/contact"
            className="rounded-2xl border border-white/20 px-6 py-3 font-bold"
          >
            お問い合わせ
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <h2 className="text-2xl font-bold">{feature.title}</h2>
              <p className="mt-4 leading-7 text-white/70">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}