// FormField — label + input wrapper + error display
// Used by ProposalPlannerForm to wrap each form input

interface FormFieldProps {
  label: string;
  error?: string;
  required?: boolean;
  hint?: string;
  children: React.ReactNode;
}

export function FormField({ label, error, required, hint, children }: FormFieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        className="text-sm font-medium"
        style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.06em", color: "var(--text-primary)" }}
      >
        {label}
        {required && <span style={{ color: "var(--accent)", marginLeft: "4px" }}>*</span>}
      </label>
      {children}
      {hint && !error && (
        <p className="text-xs" style={{ fontFamily: "var(--font-body)", color: "var(--text-muted)" }}>
          {hint}
        </p>
      )}
      {error && (
        <p className="text-xs font-medium" style={{ fontFamily: "var(--font-body)", color: "#c0392b" }}>
          {error}
        </p>
      )}
    </div>
  );
}
