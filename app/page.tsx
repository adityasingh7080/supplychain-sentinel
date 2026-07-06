"use client";

import { useState } from "react";

export default function Home() {
  const [delayDays, setDelayDays] = useState(7);
  const [scenarioRun, setScenarioRun] = useState(false);

  const ordersAtRisk = scenarioRun ? Math.max(0, delayDays * 5 + 2) : 0;
  const revenueAtRisk = scenarioRun ? ordersAtRisk * 48000 : 0;
  const criticalRisks = scenarioRun ? 4 : 3;

  const formatINR = (amount: number) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);

  return (
    <main className="min-h-screen bg-slate-100 p-8 text-slate-900">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-semibold text-blue-600">
          SUPPLY CHAIN INTELLIGENCE
        </p>

        <h1 className="mt-2 text-4xl font-bold">SupplyChain Sentinel</h1>

        <p className="mt-3 text-slate-600">
          Predict supplier delays, inventory shortages, and production risks.
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
            <p className="mt-2 text-3xl font-bold">
              {formatINR(revenueAtRisk)}
            </p>
          </div>
        </section>

        <section className="mt-8 rounded-xl bg-white p-6 shadow">
          <h2 className="text-xl font-bold">Supplier delay simulator</h2>

          <p className="mt-3 text-slate-700">
            Select how many days the MetalWorks motor-housing shipment is delayed.
          </p>

          <div className="mt-5 max-w-sm">
            <label className="text-sm font-medium">
              Shipment delay: {delayDays} days
            </label>

            <input
              className="mt-2 w-full"
              type="range"
              min="1"
              max="15"
              value={delayDays}
              onChange={(event) => {
                setDelayDays(Number(event.target.value));
                setScenarioRun(false);
              }}
            />

            <div className="mt-1 flex justify-between text-xs text-slate-500">
              <span>1 day</span>
              <span>15 days</span>
            </div>
          </div>

          {!scenarioRun ? (
            <button
              onClick={() => setScenarioRun(true)}
              className="mt-6 rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white"
            >
              Run Scenario
            </button>
          ) : (
            <div className="mt-6 rounded-lg border border-red-200 bg-red-50 p-4">
              <p className="font-semibold text-red-700">
                Scenario complete: shipment delayed by {delayDays} days.
              </p>

              <p className="mt-2 text-slate-700">
                Motor Housing becomes the production bottleneck. {ordersAtRisk} customer
                orders are at risk, with {formatINR(revenueAtRisk)} revenue at risk.
              </p>

              <p className="mt-3 rounded-lg bg-green-50 p-3 font-medium text-green-800">
                Recommendation: Source emergency Motor Housings from AlloyParts
                to protect high-priority orders.
              </p>

              <button
                onClick={() => setScenarioRun(false)}
                className="mt-5 rounded-lg border border-slate-300 bg-white px-4 py-2 font-semibold"
              >
                Edit Scenario
              </button>
              <section className="mt-8 rounded-xl bg-white p-6 shadow">
  <div className="flex items-center justify-between">
    <div>
      <h2 className="text-xl font-bold">Inventory Risk Monitor</h2>
      <p className="mt-1 text-sm text-slate-600">
        Components most likely to affect production.
      </p>
    </div>

    <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-red-700">
      1 Critical
    </span>
  </div>

  <div className="mt-5 overflow-x-auto">
    <table className="w-full text-left text-sm">
      <thead className="border-b text-slate-500">
        <tr>
          <th className="pb-3 font-medium">Component</th>
          <th className="pb-3 font-medium">Current Stock</th>
          <th className="pb-3 font-medium">Daily Usage</th>
          <th className="pb-3 font-medium">Days of Cover</th>
          <th className="pb-3 font-medium">Status</th>
        </tr>
      </thead>

      <tbody>
        <tr className="border-b">
          <td className="py-4 font-semibold">Motor Housing</td>
          <td className="py-4">30 units</td>
          <td className="py-4">15 units/day</td>
          <td className="py-4">2 days</td>
          <td className="py-4">
            <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-700">
              Critical
            </span>
          </td>
        </tr>

        <tr className="border-b">
          <td className="py-4 font-semibold">Electric Motor</td>
          <td className="py-4">120 units</td>
          <td className="py-4">15 units/day</td>
          <td className="py-4">8 days</td>
          <td className="py-4">
            <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
              Watch
            </span>
          </td>
        </tr>

        <tr>
          <td className="py-4 font-semibold">Copper Wire</td>
          <td className="py-4">900 m</td>
          <td className="py-4">75 m/day</td>
          <td className="py-4">12 days</td>
          <td className="py-4">
            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
              Healthy
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</section>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}