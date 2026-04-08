export default function TermsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-black">利用規約</h1>

        <div className="mt-8 space-y-6 rounded-3xl border border-white/10 bg-white/5 p-6 leading-8 text-white/75">
          <p>
            本サービスは学習補助を目的とした参考情報を提供するものであり、
            医療判断の最終決定を行うものではありません。
          </p>
          <p>
            利用者は自己責任で本サービスを利用するものとします。
          </p>
          <p>
            不正利用、迷惑行為、法令違反にあたる行為は禁止します。
          </p>
          <p>
            運営者は必要に応じて内容の変更、停止を行うことがあります。
          </p>
        </div>
      </div>
    </main>
  );
}