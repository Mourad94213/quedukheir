"use client";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  AreaChart,
  Area,
  Legend,
} from "recharts";
import { POSTES, DONS_MENSUELS } from "@/lib/data";
import { euros } from "@/lib/utils";

const DATA_COLORS = [
  "#7f1112",
  "#b5654b",
  "#c7972f",
  "#4f6f52",
  "#8a5a3c",
  "#9aa07d",
];

function TooltipBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-marron/15 bg-cream px-3 py-2 text-sm shadow-lift">
      {children}
    </div>
  );
}

/** Donut : répartition des fonds dépensés par poste. */
export function BudgetDonut() {
  const data = POSTES.map((p, i) => ({
    name: p.label,
    value: p.depense,
    color: DATA_COLORS[i % DATA_COLORS.length],
  }));
  const total = data.reduce((s, d) => s + d.value, 0);

  return (
    <div className="relative h-[280px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            innerRadius={72}
            outerRadius={108}
            paddingAngle={2}
            stroke="none"
          >
            {data.map((d, i) => (
              <Cell key={i} fill={d.color} />
            ))}
          </Pie>
          <Tooltip
            content={({ active, payload }) =>
              active && payload?.length ? (
                <TooltipBox>
                  <p className="font-semibold text-encre">{payload[0].name}</p>
                  <p className="text-gris">
                    {euros(payload[0].value as number)} ·{" "}
                    {Math.round(((payload[0].value as number) / total) * 100)}%
                  </p>
                </TooltipBox>
              ) : null
            }
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-[family-name:var(--font-display)] text-2xl text-encre">
          {euros(total)}
        </span>
        <span className="text-xs text-gris">dépensés (démo)</span>
      </div>
    </div>
  );
}

/** Barres : budget alloué vs dépensé par poste. */
export function AllocationBars() {
  const data = POSTES.map((p) => ({
    name: p.label.length > 22 ? p.label.slice(0, 20) + "…" : p.label,
    Alloué: p.alloue,
    Dépensé: p.depense,
  }));

  return (
    <div className="h-[340px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical" margin={{ left: 8, right: 16 }} barGap={2}>
          <CartesianGrid horizontal={false} stroke="rgba(48,3,3,0.08)" />
          <XAxis
            type="number"
            tickFormatter={(v) => `${v / 1000}k`}
            tick={{ fontSize: 12, fill: "#6a5d54" }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            type="category"
            dataKey="name"
            width={130}
            tick={{ fontSize: 11, fill: "#6a5d54" }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            cursor={{ fill: "rgba(127,17,18,0.05)" }}
            content={({ active, payload, label }) =>
              active && payload?.length ? (
                <TooltipBox>
                  <p className="mb-1 font-semibold text-encre">{label}</p>
                  {payload.map((p) => (
                    <p key={p.name} className="text-gris">
                      {p.name} : {euros(p.value as number)}
                    </p>
                  ))}
                </TooltipBox>
              ) : null
            }
          />
          <Legend wrapperStyle={{ fontSize: 12, paddingTop: 8 }} />
          <Bar dataKey="Alloué" fill="#cbb89a" radius={[0, 4, 4, 0]} />
          <Bar dataKey="Dépensé" fill="#7f1112" radius={[0, 4, 4, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

/** Aire : évolution mensuelle des dons. */
export function DonsTrend() {
  return (
    <div className="h-[240px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={[...DONS_MENSUELS]} margin={{ left: -16, right: 8, top: 8 }}>
          <defs>
            <linearGradient id="donsGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#7f1112" stopOpacity={0.35} />
              <stop offset="100%" stopColor="#7f1112" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid vertical={false} stroke="rgba(48,3,3,0.08)" />
          <XAxis
            dataKey="mois"
            tick={{ fontSize: 12, fill: "#6a5d54" }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tickFormatter={(v) => `${v / 1000}k`}
            tick={{ fontSize: 12, fill: "#6a5d54" }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            content={({ active, payload, label }) =>
              active && payload?.length ? (
                <TooltipBox>
                  <p className="font-semibold text-encre">{label}</p>
                  <p className="text-gris">{euros(payload[0].value as number)} collectés</p>
                </TooltipBox>
              ) : null
            }
          />
          <Area
            type="monotone"
            dataKey="montant"
            stroke="#7f1112"
            strokeWidth={2.5}
            fill="url(#donsGrad)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
