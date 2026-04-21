export function Footer() {
  return (
    <footer className="mt-auto border-t border-zinc-200 bg-white/80 dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p className="text-xs text-zinc-500 dark:text-zinc-400">
          © {new Date().getFullYear()} Acme Admin. Example layout only.
        </p>
        <nav className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-medium text-zinc-600 dark:text-zinc-400">
          <a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-200">
            Privacy
          </a>
          <a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-200">
            Terms
          </a>
          <a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-200">
            Support
          </a>
        </nav>
      </div>
    </footer>
  );
}
