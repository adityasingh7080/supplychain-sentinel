export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 p-8 text-slate-900">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-semibold text-blue-600">
          SUPPLY CHAIN INTELLIGENCE
        </p>

        <h1 className="mt-2 text-4xl font-bold">
          SupplyChain Sentinel
        </h1>

        <p className="mt-3 text-slate-600">
          Monitor supplier delays, inventory shortages, and production risks.
        </p>

        <section className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-xl bg-white p-5 shadow">
            <p className="text-sm text-slate-500">Critical risks</p>
            <p className="mt-2 text-3xl font-bold text-red-600">3</p>
          </div>

          <div className="rounded-xl bg-white p-5 shadow">
            <p className="text-sm text-slate-500">Orders at risk</p>
            <p className="mt-2 text-3xl font-bold text-amber-600">37</p>
          </div>

          <div className="rounded-xl bg-white p-5 shadow">
            <p className="text-sm text-slate-500">Revenue at risk</p>
            <p className="mt-2 text-3xl font-bold">₹18,00,000</p>
          </div>
        </section>

        <section className="mt-8 rounded-xl bg-white p-6 shadow">
          <h2 className="text-xl font-bold">Critical alert</h2>

          <p className="mt-3 text-slate-700">
            Motor Housing will run out in 2 days. The MetalWorks shipment is
            delayed by 7 days.
          </p>

          <button className="mt-5 rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white">
            Run Delay Scenario
          </button>
        </section>
      </div>
    </main>
  );
}