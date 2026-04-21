import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Example admin dashboard layout",
};

const stats = [
  { label: "Total revenue", value: "$48,294", change: "+12.4%", up: true },
  { label: "Active users", value: "2,847", change: "+3.1%", up: true },
  { label: "Open tickets", value: "34", change: "−8", up: false },
  { label: "Conversion", value: "3.2%", change: "+0.4pp", up: true },
];

const recentOrders = [
  { id: "#10492", customer: "Acme Co.", amount: "$1,240.00", status: "Paid" },
  { id: "#10491", customer: "Northwind", amount: "$892.50", status: "Pending" },
  { id: "#10490", customer: "Contoso", amount: "$2,100.00", status: "Paid" },
  { id: "#10489", customer: "Fabrikam", amount: "$340.00", status: "Refunded" },
];

const activity = [
  { text: "New user signup — jane@example.com", time: "2 min ago" },
  { text: "Invoice #10492 marked as paid", time: "18 min ago" },
  { text: "API key rotated for staging", time: "1 hr ago" },
  { text: "Weekly report generated", time: "3 hr ago" },
];

export default function DashboardPage() {
  return (
    <main className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
        <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
          Overview of your workspace — sample data for layout only.
        </p>
      </div>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
          >
            <p className="text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
              {s.label}
            </p>
            <p className="mt-2 text-2xl font-semibold tabular-nums">{s.value}</p>
            <p
              className={`mt-1 text-xs font-medium ${
                s.up ? "text-emerald-600 dark:text-emerald-400" : "text-amber-600 dark:text-amber-400"
              }`}
            >
              {s.change} vs last period
            </p>
          </div>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-5">
        <div className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 lg:col-span-3">
          <div className="flex items-center justify-between gap-2">
            <h2 className="text-sm font-semibold">Traffic (placeholder)</h2>
            <span className="text-xs text-zinc-500 dark:text-zinc-400">Last 7 days</span>
          </div>
          <div className="mt-4 flex h-48 items-end justify-between gap-1 rounded-lg bg-zinc-50 px-2 pb-2 pt-6 dark:bg-zinc-950/50">
            {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t bg-zinc-300 dark:bg-zinc-600"
                style={{ height: `${h}%` }}
                title={`Day ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 lg:col-span-2">
          <h2 className="text-sm font-semibold">Quick actions</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a
                href="#"
                className="block rounded-lg border border-dashed border-zinc-300 px-3 py-2 text-zinc-600 hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-600 dark:text-zinc-300 dark:hover:bg-zinc-950"
              >
                Create invoice
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block rounded-lg border border-dashed border-zinc-300 px-3 py-2 text-zinc-600 hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-600 dark:text-zinc-300 dark:hover:bg-zinc-950"
              >
                Invite teammate
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block rounded-lg border border-dashed border-zinc-300 px-3 py-2 text-zinc-600 hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-600 dark:text-zinc-300 dark:hover:bg-zinc-950"
              >
                Export report
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <div className="border-b border-zinc-200 px-4 py-3 dark:border-zinc-800">
            <h2 className="text-sm font-semibold">Recent orders</h2>
          </div>
          <table className="w-full text-left text-sm">
            <thead className="bg-zinc-50 text-xs font-medium uppercase text-zinc-500 dark:bg-zinc-950/80 dark:text-zinc-400">
              <tr>
                <th className="px-4 py-2">Order</th>
                <th className="px-4 py-2">Customer</th>
                <th className="px-4 py-2 text-right">Amount</th>
                <th className="px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
              {recentOrders.map((row) => (
                <tr key={row.id} className="hover:bg-zinc-50 dark:hover:bg-zinc-950/50">
                  <td className="px-4 py-2.5 font-mono text-xs">{row.id}</td>
                  <td className="px-4 py-2.5">{row.customer}</td>
                  <td className="px-4 py-2.5 text-right tabular-nums">{row.amount}</td>
                  <td className="px-4 py-2.5">
                    <span
                      className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${
                        row.status === "Paid"
                          ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300"
                          : row.status === "Pending"
                            ? "bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-200"
                            : "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                      }`}
                    >
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="rounded-xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <div className="border-b border-zinc-200 px-4 py-3 dark:border-zinc-800">
            <h2 className="text-sm font-semibold">Activity</h2>
          </div>
          <ul className="divide-y divide-zinc-100 dark:divide-zinc-800">
            {activity.map((item, i) => (
              <li key={i} className="flex flex-col gap-0.5 px-4 py-3 text-sm">
                <span>{item.text}</span>
                <span className="text-xs text-zinc-500 dark:text-zinc-400">{item.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
