"use client";

import type { UseFormRegister, UseFormWatch } from "react-hook-form";

interface CheckboxOption {
  value: string;
  label: string;
}

interface BrandCheckboxGroupProps {
  name: string;
  options: readonly CheckboxOption[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  watch: UseFormWatch<any>;
  error?: string;
}

export function BrandCheckboxGroup({ name, options, register, watch, error }: BrandCheckboxGroupProps) {
  const currentValues = (watch(name) as string[]) ?? [];

  return (
    <div className="flex flex-col gap-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {options.map((opt) => {
          const isChecked = currentValues.includes(opt.value);
          return (
            <label
              key={opt.value}
              className="flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all duration-150"
              style={{
                background: isChecked ? "var(--primary)" : "var(--bg-elevated)",
                border: `1px solid ${isChecked ? "var(--primary)" : "var(--primary-muted)"}`,
                color: isChecked ? "var(--text-on-dark)" : "var(--text-primary)",
              }}
            >
              <input
                type="checkbox"
                value={opt.value}
                {...register(name)}
                className="sr-only"
              />
              <span
                className="w-4 h-4 rounded flex items-center justify-center flex-shrink-0 text-xs font-bold"
                style={{
                  border: `1.5px solid ${isChecked ? "var(--accent)" : "var(--primary-muted)"}`,
                  background: isChecked ? "var(--accent)" : "transparent",
                  color: "white",
                }}
              >
                {isChecked && "✓"}
              </span>
              <span className="text-sm font-medium" style={{ fontFamily: "var(--font-display)" }}>{opt.label}</span>
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
