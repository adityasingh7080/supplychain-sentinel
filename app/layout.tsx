"use client";

import { useState } from "react";

export default function Home() {
  const [scenarioRun, setScenarioRun] = useState(false);

  const criticalRisks = scenarioRun ? 4 : 3;
  const ordersAtRisk = scenarioRun ? 37 : 0;
  const revenueAtRisk = scenarioRun ? "₹18,00,000" : "₹0";

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
            <p className="mt-2 text-3xl font-bold text-red-600">
              {criticalRisks}
            </p>
          </div>

          <div className="rounded-xl bg-white p-5 shadow">
            <p className="text-sm text-slate-500">Orders at risk</p>
            <p className="mt-2 text-3xl font-bold text-amber-600">
              {ordersAtRisk}
            </p>
          </div>

          <div className="rounded-xl bg-white p-5 shadow">
            <p className="text-sm text-slate-500">Revenue at risk</p>
            <p className="mt-2 text-3xl font-bold">{revenueAtRisk}</p>
          </div>
        </section>

        <section className="mt-8 rounded-xl bg-white p-6 shadow">
          <h2 className="text-xl font-bold">Supplier delay scenario</h2>

          {!scenarioRun ? (
            <>
              <p className="mt-3 text-slate-700">
                Simulate a 7-day delay for the MetalWorks motor-housing shipment.
              </p>

              <button
                onClick={() => setScenarioRun(true)}
                className="mt-5 rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white"
              >
                Run Delay Scenario
              </button>
            </>
          ) : (
            <div className="mt-4">
              <p className="font-semibold text-red-600">
                Scenario complete: Motor Housing will run out in 2 days.
              </p>

              <p className="mt-2 text-slate-700">
                The shipment is delayed by 7 days. 37 customer orders are at
                risk, with ₹18,00,000 revenue at risk.
              </p>

              <p className="mt-3 rounded-lg bg-green-50 p-3 font-medium text-green-800">
                Recommendation: Source 20 Motor Housings from AlloyParts to
                protect high-priority orders.
              </p>

              <button
                onClick={() => setScenarioRun(false)}
                className="mt-5 rounded-lg border border-slate-300 px-4 py-2 font-semibold"
              >
                Reset Scenario
              </button>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}