"use client";

import { Link, usePathname } from "@/i18n/navigation";

const exampleAdminNav = [
  { label: "Dashboard", href: "/" },
  { label: "Users", href: "/users" },
  { label: "Orders", href: "/orders" },
  { label: "Analytics", href: "/analytics" },
  { label: "Settings", href: "/settings" },
] as const;

function isActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="shrink-0 lg:w-52">
      <nav className="flex flex-row flex-wrap gap-2 lg:flex-col lg:gap-1" aria-label="Main">
        {exampleAdminNav.map((item) => {
          const active = isActive(pathname, item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-lg px-3 py-2 text-sm font-medium ${
                active
                  ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                  : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-900"
              }`}
              aria-current={active ? "page" : undefined}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
