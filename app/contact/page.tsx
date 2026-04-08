export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-black">お問い合わせ</h1>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="grid gap-4">
            <input
              placeholder="お名前"
              className="rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none"
            />
            <input
              placeholder="メールアドレス"
              className="rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none"
            />
            <textarea
              placeholder="お問い合わせ内容"
              className="min-h-[160px] rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none"
            />
            <button className="w-fit rounded-2xl bg-white px-6 py-3 font-bold text-black">
              送信する
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}