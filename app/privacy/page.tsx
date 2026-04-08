export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-black">プライバシーポリシー</h1>

        <div className="mt-8 space-y-6 rounded-3xl border border-white/10 bg-white/5 p-6 leading-8 text-white/75">
          <p>
            本サービスでは、お問い合わせ時に氏名やメールアドレスなどの情報を取得する場合があります。
          </p>
          <p>
            取得した情報は、お問い合わせ対応やサービス改善の目的で利用します。
          </p>
          <p>
            法令に基づく場合を除き、本人の同意なく第三者へ提供しません。
          </p>
        </div>
      </div>
    </main>
  );
}