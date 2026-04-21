import type { ReactNode } from "react";

import { Footer } from "./footer";
import { Header } from "./header";
import { Sidebar } from "./sidebar";

type ExamplePageTemplateProps = {
  children: ReactNode;
  /** Omit to render only main content (full width inside the shell). */
  sidebar?: ReactNode;
};

export function ExamplePageTemplate({ children, sidebar }: ExamplePageTemplateProps) {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
      <Header />
      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-6 px-4 py-6 sm:px-6 lg:flex-row lg:gap-8 lg:px-8 lg:py-8">
        {sidebar !== undefined ? sidebar : <Sidebar />}
        <div className="min-w-0 flex-1">{children}</div>
      </div>
      <Footer />
    </div>
  );
}
