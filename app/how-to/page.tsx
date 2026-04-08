export default function HowToPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-black">使い方</h1>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-bold">1. 症例を入力</h2>
            <p className="mt-4 leading-7 text-white/70">
              主訴、動作、症状、不安、転倒歴などを入力します。
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-bold">2. モードを選ぶ</h2>
            <p className="mt-4 leading-7 text-white/70">
              分析、SOAP、実習日誌、症例レポート、患者説明から選べます。
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-bold">3. 結果を確認</h2>
            <p className="mt-4 leading-7 text-white/70">
              結果を見ながら、考え方の流れを整理できます。
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}