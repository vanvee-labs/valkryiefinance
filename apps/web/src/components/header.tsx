"use client";
import Link from "next/link";
import { ConnectButton } from "./wallet/connect-button";
import { ModeToggle } from "./mode-toggle";
import UserMenu from "./user-menu";

export default function Header() {
  const links = [
    { to: "/", label: "Home" },
    { to: "/dashboard", label: "Dashboard" },
    { to: "/wallet", label: "Wallet" },
    { to: "/vault", label: "Vault Demo" },
    { to: "/ai", label: "AI Demo" },
    { to: "/stores", label: "Stores Demo" },
  ];

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-14 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold">Valkryie</span>
            </Link>
            <nav className="hidden md:flex gap-6">
              {links.map(({ to, label }) => (
                <Link
                  key={to}
                  href={to}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <ConnectButton />
            <ModeToggle />
            <UserMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
