"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowLeftRight, RefreshCw } from "lucide-react";

const QUICK_AMOUNTS = [5, 10, 20, 50, 100];
const FALLBACK_RATE = 1600;

export default function CurrencyConverterPage() {
  const [rate, setRate] = useState<number | null>(null);
  const [lastUpdated, setLastUpdated] = useState("");
  const [loading, setLoading] = useState(true);
  const [usdAmount, setUsdAmount] = useState("1");
  const [ngnAmount, setNgnAmount] = useState("");

  const fetchRate = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("https://open.er-api.com/v6/latest/USD");
      const data = await res.json();
      const r: number = data.rates.NGN;
      setRate(r);
      setNgnAmount((parseFloat(usdAmount || "0") * r).toFixed(2));
      setLastUpdated(new Date(data.time_last_update_utc).toLocaleString("en-NG", { dateStyle: "medium", timeStyle: "short" }));
    } catch {
      setRate(FALLBACK_RATE);
      setNgnAmount((parseFloat(usdAmount || "0") * FALLBACK_RATE).toFixed(2));
      setLastUpdated("Could not fetch live rate — using estimate");
    } finally {
      setLoading(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => { fetchRate(); }, [fetchRate]);

  const handleUsdChange = (val: string) => {
    setUsdAmount(val);
    if (rate && val !== "") setNgnAmount((parseFloat(val) * rate).toFixed(2));
    else setNgnAmount("");
  };

  const handleNgnChange = (val: string) => {
    setNgnAmount(val);
    if (rate && val !== "") setUsdAmount((parseFloat(val) / rate).toFixed(4));
    else setUsdAmount("");
  };

  const fmt = (n: number) =>
    n.toLocaleString("en-NG", { minimumFractionDigits: 0, maximumFractionDigits: 0 });

  return (
    <main className="bg-slate-50 text-slate-900 min-h-screen pt-32 pb-24 px-6 font-body">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-xl mx-auto"
      >
        <h1 className="font-display text-5xl md:text-6xl font-bold mb-4 text-center leading-tight">
          Currency Converter
        </h1>
        <p className="text-slate-700 text-center text-lg mb-12">
          Convert between US Dollars and Nigerian Naira at live exchange rates.
        </p>

        <div className="bg-white rounded-2xl border border-slate-900/10 shadow-sm p-8">
          {/* Live rate bar */}
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-900/10">
            <div>
              <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Live Rate</p>
              {loading ? (
                <div className="h-6 w-52 bg-slate-100 animate-pulse rounded" />
              ) : (
                <p className="font-bold text-xl">
                  1 USD{" "}
                  <span className="text-slate-400 font-normal">=</span>{" "}
                  <span className="text-emerald-500">
                    ₦{rate?.toLocaleString("en-NG", { minimumFractionDigits: 2 })}
                  </span>
                </p>
              )}
              <p className="text-xs text-slate-400 mt-1">{lastUpdated}</p>
            </div>
            <button
              onClick={fetchRate}
              disabled={loading}
              title="Refresh rate"
              className="p-2 rounded-lg hover:bg-slate-100 transition-colors text-slate-400 hover:text-emerald-500 disabled:opacity-50"
            >
              <RefreshCw size={18} className={loading ? "animate-spin" : ""} />
            </button>
          </div>

          {/* USD field */}
          <div className="mb-4">
            <label className="block text-xs font-bold mb-2 uppercase tracking-widest text-slate-400">
              US Dollar — USD
            </label>
            <div className="flex items-center border border-slate-900/20 rounded-xl focus-within:border-emerald-500 transition-colors overflow-hidden">
              <span className="px-4 py-3 text-slate-500 font-bold bg-slate-50 border-r border-slate-900/10 text-lg">$</span>
              <input
                type="number"
                value={usdAmount}
                onChange={(e) => handleUsdChange(e.target.value)}
                className="w-full bg-transparent px-4 py-3 text-slate-900 text-xl font-bold focus:outline-none"
                placeholder="0.00"
                min="0"
              />
            </div>
          </div>

          {/* Swap icon */}
          <div className="flex justify-center my-5">
            <div className="p-2.5 bg-emerald-500/10 rounded-full text-emerald-500">
              <ArrowLeftRight size={20} />
            </div>
          </div>

          {/* NGN field */}
          <div>
            <label className="block text-xs font-bold mb-2 uppercase tracking-widest text-slate-400">
              Nigerian Naira — NGN
            </label>
            <div className="flex items-center border border-slate-900/20 rounded-xl focus-within:border-emerald-500 transition-colors overflow-hidden">
              <span className="px-4 py-3 text-slate-500 font-bold bg-slate-50 border-r border-slate-900/10 text-lg">₦</span>
              <input
                type="number"
                value={ngnAmount}
                onChange={(e) => handleNgnChange(e.target.value)}
                className="w-full bg-transparent px-4 py-3 text-slate-900 text-xl font-bold focus:outline-none"
                placeholder="0.00"
                min="0"
              />
            </div>
          </div>
        </div>

        {/* Quick reference */}
        <div className="mt-10">
          <h2 className="font-display text-xl font-bold mb-4 text-center">Quick Reference</h2>
          <div className="grid grid-cols-5 gap-2">
            {QUICK_AMOUNTS.map((amount) => (
              <button
                key={amount}
                onClick={() => handleUsdChange(String(amount))}
                className="bg-white border border-slate-900/10 rounded-xl p-3 text-center hover:border-emerald-500 hover:shadow-sm transition-all group"
              >
                <p className="font-bold text-base">${amount}</p>
                <p className="text-xs text-slate-500 group-hover:text-emerald-500 transition-colors mt-0.5">
                  {rate ? `₦${fmt(amount * rate)}` : "—"}
                </p>
              </button>
            ))}
          </div>
        </div>

        <p className="text-center text-xs text-slate-400 mt-8">
          Rates sourced from{" "}
          <span className="font-medium">Open Exchange Rates</span>. For informational purposes only.
        </p>
      </motion.div>
    </main>
  );
}
