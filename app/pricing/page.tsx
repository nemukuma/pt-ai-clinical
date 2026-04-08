const plans = [
  {
    name: "Free",
    price: "0円",
    items: ["疑似分析デモ", "基本ページ閲覧", "機能体験用"],
  },
  {
    name: "Pro",
    price: "980円 / 月",
    items: ["将来の本物AI分析", "履歴保存", "回数上限の緩和"],
  },
  {
    name: "Premium",
    price: "2,980円 / 月",
    items: ["上位分析機能", "詳細レポート", "優先サポート"],
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-black">料金</h1>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <h2 className="text-2xl font-bold">{plan.name}</h2>
              <p className="mt-3 text-3xl font-black">{plan.price}</p>
              <ul className="mt-6 space-y-3 text-white/70">
                {plan.items.map((item) => (
                  <li key={item}>・{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}