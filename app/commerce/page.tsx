export default function CommercePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-black">特定商取引法表記</h1>

        <div className="mt-8 space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6 leading-8 text-white/75">
          <p>販売事業者：PT AI Clinical</p>
          <p>運営責任者：ご自身のお名前</p>
          <p>所在地：必要に応じて記載</p>
          <p>メールアドレス：お問い合わせ用メールアドレス</p>
          <p>販売価格：各プランページに記載</p>
          <p>支払方法：将来的にStripe等を予定</p>
          <p>商品の引渡時期：決済完了後、直ちに利用可能</p>
          <p>返品・キャンセル：デジタルサービスのため原則不可</p>
        </div>
      </div>
    </main>
  );
}