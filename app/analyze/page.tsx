"use client";

import { useMemo, useState } from "react";

type ModeKey = "analysis" | "soap" | "daily" | "report" | "explain";

const modeLabels: Record<ModeKey, string> = {
  analysis: "分析",
  soap: "SOAP",
  daily: "実習日誌",
  report: "症例レポート",
  explain: "患者説明",
};

const modeOrder: ModeKey[] = ["analysis", "soap", "daily", "report", "explain"];

function pickFactors(text: string) {
  const factors: string[] = [];

  if (/歩行|ふらつき|転倒|立位|バランス/.test(text)) {
    factors.push("バランス能力低下", "歩行安定性低下");
  }
  if (/痛|疼痛|腰痛|膝痛|肩痛|しびれ/.test(text)) {
    factors.push("疼痛による動作制限");
  }
  if (/片麻痺|脳卒中|麻痺|痙縮/.test(text)) {
    factors.push("神経学的要因");
  }
  if (/不安|恐怖|怖い|自信がない/.test(text)) {
    factors.push("不安による動作縮小");
  }
  if (/80代|70代|90代|高齢/.test(text)) {
    factors.push("加齢に伴う身体機能低下");
  }
  if (/呼吸|息切れ|SpO2|酸素/.test(text)) {
    factors.push("呼吸循環面の影響");
  }
  if (/認知|理解|指示理解|見当識/.test(text)) {
    factors.push("認知機能の影響");
  }
  if (/筋力|MMT|立ち上がり/.test(text)) {
    factors.push("筋力低下");
  }

  factors.push("体幹機能低下", "環境要因");

  return Array.from(new Set(factors)).slice(0, 5);
}

function pickPriorityTests(text: string) {
  const tests = ["バイタル", "姿勢観察", "動作観察"];

  if (/歩行|ふらつき|転倒|立位/.test(text)) {
    tests.push("歩行観察", "立位バランス");
  }
  if (/痛|疼痛|腰痛|膝痛|肩痛/.test(text)) {
    tests.push("疼痛評価", "関節可動域");
  }
  if (/片麻痺|脳卒中|麻痺/.test(text)) {
    tests.push("筋力評価", "感覚検査", "体幹機能");
  } else {
    tests.push("下肢筋力", "体幹機能");
  }
  if (/認知|理解|見当識/.test(text)) {
    tests.push("認知面の確認");
  }
  if (/呼吸|息切れ|SpO2|酸素/.test(text)) {
    tests.push("呼吸状態の確認");
  }

  return Array.from(new Set(tests)).slice(0, 6);
}

function buildMockResult(mode: ModeKey, input: string) {
  const text = input.trim() || "症例未入力";
  const factors = pickFactors(text);
  const tests = pickPriorityTests(text);

  if (mode === "analysis") {
    return `【分析結果】
① 症例の要点整理
・入力内容から、主問題の背景に複数要因が関与している可能性があります
・現時点では印象だけで断定せず、観察事実と解釈を分けることが重要です

② 考えられる主要因
${factors.map((f) => `・${f}`).join("\n")}

③ 除外してはいけない視点
・急性症状の有無
・疼痛の影響
・認知機能
・環境設定
・循環 / 呼吸状態

④ 優先評価項目
${tests.map((t) => `・${t}`).join("\n")}

⑤ 現時点の統合解釈
・単一要因ではなく、身体機能、心理面、環境面が重なって現在の問題が表れている可能性があります

⑥ SOAPのAに使える短文例
・現在の問題には${factors.slice(0, 3).join("、")}など複数要因の関与が示唆される

⑦ 次の一手
・追加評価で主要因を切り分ける
・観察事実と解釈を分けて記録する
・危険兆候があれば最優先で確認する`;
  }

  if (mode === "soap") {
    return `S：
・本人の訴えや不安感、困っている動作を確認する必要がある

O：
・入力内容より、${tests.join("、")}の確認が必要
・現時点では詳細評価前のため、客観所見の追加取得が必要

A：
・${factors.join("、")}など、複数要因が関与している可能性がある
・単一要因で決めつけず、評価結果を統合して考える必要がある

P：
・${tests.slice(0, 4).join("、")}を優先して実施する
・主要因を整理したうえで介入方針を立てる`;
  }

  if (mode === "daily") {
    return `本日の学び
・症例は単一要因ではなく、多面的に捉える必要があると学んだ

気づき
・${factors.slice(0, 3).join("、")}など複数視点で考える重要性を感じた

反省点
・最初の印象だけで考えを進めそうになった

明日の目標
・${tests.slice(0, 4).join("、")}を中心に評価し、主要因を整理する`;
  }

  if (mode === "report") {
    return `問題点整理
・主問題の背景に${factors.join("、")}など複数の要因が関与している可能性がある

評価結果の統合
・現時点では詳細評価前であり、${tests.join("、")}の確認が必要である

仮説
・主問題は単一の障害ではなく、身体機能、心理、環境要因が複合して形成されている可能性がある

介入方針
・危険兆候を除外しつつ、主要因を絞ったうえで段階的に介入する

予後予測
・主要因が整理できれば改善余地はあると考えられる`;
  }

  return `患者さんに分かりやすくお伝えすると、今の状態は一つの原因だけではなく、${factors.slice(0, 3).join("、")}などが重なっている可能性があります。これから詳しく確認して、安全に動きやすくなる方法を一緒に考えていきます。`;
}

export default function AnalyzePage() {
  const [mode, setMode] = useState<ModeKey>("analysis");
  const [input, setInput] = useState(
    "80代女性。歩行不安定。立位でふらつきあり。転倒歴あり。下肢筋力低下が疑われるが不安も強い。"
  );
  const [result, setResult] = useState("");

  const buttonLabel = useMemo(() => `${modeLabels[mode]}を生成`, [mode]);

  return (
    <main className="mx-auto max-w-6xl px-6 py-16 text-white">
      <div className="mb-10">
        <div className="inline-block rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
          疑似分析デモ
        </div>
        <h1 className="mt-5 text-4xl font-black md:text-5xl">分析ページ</h1>
        <p className="mt-4 max-w-3xl leading-8 text-white/70">
          このページはAI APIを使わず、入力内容に応じて結果が変化する疑似分析デモです。
          実際の学習導線を確認しやすいように、分析の見え方を本番に近づけています。
        </p>
      </div>

      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
        <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {modeOrder.map((key) => {
            const active = mode === key;
            return (
              <button
                key={key}
                onClick={() => setMode(key)}
                className={`rounded-2xl px-4 py-3 text-sm font-bold transition ${
                  active
                    ? "bg-cyan-500 text-white"
                    : "border border-white/10 bg-white/5 text-white/70 hover:bg-white/10"
                }`}
              >
                {modeLabels[key]}
              </button>
            );
          })}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_0.95fr]">
          <div className="rounded-3xl border border-white/10 bg-black/30 p-5">
            <p className="text-sm text-white/45">症例入力</p>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="mt-4 min-h-[220px] w-full rounded-2xl border border-white/10 bg-slate-950/80 p-4 text-sm leading-7 text-white outline-none"
              placeholder="症例情報を入力してください"
            />
            <button
              onClick={() => setResult(buildMockResult(mode, input))}
              className="mt-5 rounded-2xl bg-cyan-500 px-6 py-3 text-sm font-black text-white hover:bg-cyan-400"
            >
              {buttonLabel}
            </button>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm text-white/45">出力</p>
                <h2 className="mt-1 text-2xl font-bold">{modeLabels[mode]}</h2>
              </div>
              <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-2 text-xs text-emerald-200">
                Demo
              </div>
            </div>
            <pre className="mt-4 min-h-[320px] whitespace-pre-wrap rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-sm leading-7 text-emerald-200">
              {result || "ここに結果が表示されます。"}
            </pre>
          </div>
        </div>
      </div>
    </main>
  );
}