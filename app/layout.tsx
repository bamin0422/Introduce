import Navbar, { NavItem } from "@web/components/Navbar/index";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers as ThemeProvider } from "@web/context/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Daein Min",
  description: "안녕하세요! 민대인입니다.",
  icons: "favicon.ico",
};

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "🏠 Home",
    page: "home",
  },
  {
    label: "🔗 About",
    page: "about",
  },
  {
    label: "🗂 Projects",
    page: "projects",
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-100 dark:bg-black">
        <ThemeProvider>
          <Navbar navItems={NAV_ITEMS} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
