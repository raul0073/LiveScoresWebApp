import ThemeSwitcher from "@/components/ThemeSwitcher";
import Logo from "@/components/Logo";
import { UserButton } from "@clerk/nextjs";
import React, { ReactNode } from "react";
import Footer from "@/components/Footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div
      className="flex flex-col min-h-screen
     min-w-full bg-background max-h-screen"
    >
      <nav className="flex justify-between items-center border-b border-border h-[60px] px-4 py-2 mb-2">
        <Logo />
        <div className="flex gap-4 items-center">
          <ThemeSwitcher />
          <UserButton afterSignOutUrl="/sign-in" />
        </div>
      </nav>
      <main className="flex w-full flex-grow justify-center mb-6">{children}</main>
      <footer className="flex w-full justify-between items-center border-t border-border py-3 px-1 fixed bottom-0 bg-background z-10 overflow-hidden">
        <Footer />
      </footer>
    </div>
  );
}
