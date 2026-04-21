export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-900 text-sm font-semibold text-white dark:bg-zinc-100 dark:text-zinc-900">
            A
          </div>
          <div>
            <p className="text-sm font-semibold leading-none">Acme Admin</p>
            <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">Example dashboard</p>
          </div>
        </div>
        <div className="hidden flex-1 justify-center sm:flex">
          <div className="w-full max-w-md rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm text-zinc-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
            Search…
          </div>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            className="rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-xs font-medium text-zinc-700 shadow-sm dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200"
          >
            Notifications
          </button>
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-200 text-xs font-medium dark:bg-zinc-700">
            JD
          </div>
        </div>
      </div>
    </header>
  );
}
