"use client";

import type { UseFormRegister, UseFormWatch } from "react-hook-form";

interface RadioOption {
  value: string;
  label: string;
  detail?: string;
}

interface BrandRadioGroupProps {
  name: string;
  options: readonly RadioOption[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  watch: UseFormWatch<any>;
  error?: string;
  cols?: 1 | 2;
}

export function BrandRadioGroup({ name, options, register, watch, error, cols = 2 }: BrandRadioGroupProps) {
  const currentValue = watch(name) as string;

  return (
    <div className="flex flex-col gap-2">
      <div className={`grid grid-cols-1 ${cols === 2 ? "sm:grid-cols-2" : ""} gap-2`}>
        {options.map((opt) => {
          const isChecked = currentValue === opt.value;
          return (
            <label
              key={opt.value}
              className="flex items-start gap-3 p-3 rounded-xl cursor-pointer transition-all duration-150"
              style={{
                background: isChecked ? "var(--primary)" : "var(--bg-elevated)",
                border: `1px solid ${isChecked ? "var(--primary)" : "var(--primary-muted)"}`,
                color: isChecked ? "var(--text-on-dark)" : "var(--text-primary)",
              }}
            >
              <input
                type="radio"
                value={opt.value}
                {...register(name)}
                className="sr-only"
              />
              <span className="mt-0.5 text-sm font-bold flex-shrink-0" style={{ color: "var(--accent)", fontFamily: "var(--font-mono)" }}>✦</span>
              <span className="flex flex-col gap-0.5 min-w-0">
                <span className="text-sm font-semibold leading-tight" style={{ fontFamily: "var(--font-display)" }}>{opt.label}</span>
                {opt.detail && (
                  <span className="text-xs leading-tight" style={{ fontFamily: "var(--font-body)", opacity: isChecked ? 0.75 : 0.6 }}>{opt.detail}</span>
                )}
              </span>
            </label>
          );
        })}
      </div>
      {error && (
        <p className="text-xs font-medium" style={{ fontFamily: "var(--font-body)", color: "#c0392b" }}>{error}</p>
      )}
    </div>
  );
}
