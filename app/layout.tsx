import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "PT AI Clinical",
  description: "理学療法士実習生向けの学習サポートサイト",
};

const navItems = [
  { href: "/", label: "ホーム" },
  { href: "/analyze", label: "分析" },
  { href: "/how-to", label: "使い方" },
  { href: "/pricing", label: "料金" },
  { href: "/contact", label: "お問い合わせ" },
];

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body className="bg-slate-950 text-white">
        <header className="border-b border-white/10 bg-slate-950/90">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link href="/" className="text-lg font-black">
              PT AI Clinical
            </Link>

            <nav className="hidden gap-5 text-sm text-white/70 md:flex">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>

        {children}

        <footer className="border-t border-white/10 bg-slate-950">
          <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-white/55">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <p>© 2026 PT AI Clinical</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/terms">利用規約</Link>
                <Link href="/privacy">プライバシーポリシー</Link>
                <Link href="/commerce">特定商取引法表記</Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}