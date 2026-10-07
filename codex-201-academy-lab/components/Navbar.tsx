import Link from "next/link";
import { useRouter } from "next/router";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact Us" },
  { href: "/docs", label: "Docs" },
];

export default function Navbar() {
  const router = useRouter();

  return (
    <nav
      aria-label="Primary navigation"
      className="border-b border-purple-200 bg-purple-100 px-6 py-4 dark:border-purple-900 dark:bg-purple-950/70"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/"
          className="rounded font-semibold tracking-tight text-purple-950 outline-none hover:text-purple-700 focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2 focus-visible:ring-offset-purple-100 dark:text-purple-100 dark:hover:text-purple-300 dark:focus-visible:ring-purple-300 dark:focus-visible:ring-offset-purple-950"
        >
          AGENTS.md
        </Link>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium">
          {navLinks.map(({ href, label }) => {
            const isActive = router.pathname === href;

            return (
              <Link
                key={href}
                href={href}
                aria-current={isActive ? "page" : undefined}
                className={`rounded outline-none transition-colors focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2 focus-visible:ring-offset-purple-100 dark:focus-visible:ring-purple-300 dark:focus-visible:ring-offset-purple-950 ${
                  isActive
                    ? "text-purple-950 underline decoration-2 underline-offset-4 dark:text-white"
                    : "text-purple-800 hover:text-purple-950 dark:text-purple-200 dark:hover:text-white"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
