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

function buildMockResult(mode: ModeKey, input: string) {
  const text = input.trim() || "症例未入力";

  const hasWalk = /歩行|ふらつき|転倒|立位/.test(text);
  const hasPain = /痛|疼痛|腰痛|膝痛|肩痛/.test(text);
  const hasStroke = /片麻痺|脳卒中|麻痺/.test(text);
  const hasFear = /不安|恐怖|怖い/.test(text);
  const hasElderly = /高齢|80代|70代|90代/.test(text);

  const factors = [
    hasWalk ? "バランス能力低下" : null,
    hasPain ? "疼痛による動作制限" : null,
    hasStroke ? "神経学的要因" : null,
    hasFear ? "不安による動作縮小" : null,
    hasElderly ? "加齢に伴う身体機能低下" : null,
    "筋力低下",
    "体幹機能低下",
    "環境要因",
  ].filter(Boolean) as string[];

  const uniqueFactors = Array.from(new Set(factors)).slice(0, 5);

  if (mode === "analysis") {
    return `【分析結果】
① 症例の要点整理
・入力内容から複数要因の関与が考えられます
・印象だけで断定せず、観察事実と解釈を分けることが重要です

② 考えられる主要因
${uniqueFactors.map((f) => `・${f}`).join("\n")}

③ 除外してはいけない視点
・急性症状の有無
・疼痛の影響
・認知機能
・環境設定
・循環・呼吸状態

④ 優先評価項目
・バイタル
・姿勢観察
・歩行観察
・立位バランス
・下肢筋力
・体幹機能

⑤ 現時点の統合解釈
・単一要因ではなく、身体機能、心理面、環境面が重なって問題が表れている可能性があります

⑥ SOAPのAに使える短文例
・現在の問題には身体機能低下に加え、心理面や環境面の影響も関与している可能性が示唆される

⑦ 次の一手
・追加評価で主要因を切り分ける
・危険兆候があれば最優先で確認する`;
  }

  if (mode === "soap") {
    return `S：本人の訴えや不安感がみられる可能性があります。

O：入力された症例内容より、姿勢・動作・歩行・筋力・バランスの確認が必要です。

A：${uniqueFactors.join("、")}など複数要因が関与している可能性があります。

P：バイタル、姿勢観察、歩行観察、立位バランス、筋力評価を優先して実施します。`;
  }

  if (mode === "daily") {
    return `本日の学び
・症例は単一要因ではなく多面的に捉える必要がある。

気づき
・観察事実と解釈を分けて考えることが重要。

反省点
・最初の印象で決めつけやすい。

明日の目標
・優先評価項目を整理し、主要因を切り分ける。`;
  }

  if (mode === "report") {
    return `問題点整理
・主訴や症状の背景に複数の身体機能・心理・環境要因が関与している可能性がある。

評価結果の統合
・詳細評価前のため断定はできないが、${uniqueFactors.join("、")}などを中心に確認が必要。

仮説
・主問題は単一の障害ではなく、複合的な要因で形成されている可能性がある。

介入方針
・危険兆候を除外しつつ、主要因を絞った上で介入する。

予後予測
・主要因が整理できれば改善余地はある。`;
  }

  return `患者さんに分かりやすく言うと、今の状態は一つの原因だけではなく、体の力、バランス、不安、生活環境などが重なっている可能性があります。これから詳しく確認して、安全に動きやすくなる方法を一緒に考えていきます。`;
}

export default function AnalyzePage() {
  const [mode, setMode] = useState<ModeKey>("analysis");
  const [input, setInput] = useState(
    "80代女性。歩行不安定。立位でふらつきあり。転倒歴あり。下肢筋力低下が疑われるが不安も強い。"
  );
  const [result, setResult] = useState("");

  const buttonLabel = useMemo(() => `${modeLabels[mode]}を生成`, [mode]);

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-10">
        <div className="inline-block rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-200">
          疑似分析デモ
        </div>
        <h1 className="mt-5 text-4xl font-black md:text-5xl">分析ページ</h1>
        <p className="mt-4 max-w-3xl leading-8 text-white/70">
          このページはAI APIを使わず、入力内容に応じて疑似的に結果が切り替わるデモです。
          学習導線やUI確認を目的とした公開版として利用できます。
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
                    ? "bg-white text-black"
                    : "border border-white/10 bg-white/5 text-white/70"
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
              <div className="rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-2 text-xs text-amber-200">
                Demo
              </div>
            </div>
            <pre className="mt-4 min-h-[320px] whitespace-pre-wrap text-sm leading-7 text-emerald-200">
              {result || "ここに結果が表示されます。"}
            </pre>
          </div>
        </div>
      </div>
    </main>
  );
}