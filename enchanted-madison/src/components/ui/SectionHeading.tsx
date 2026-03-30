type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex flex-col gap-3 ${alignment}`}>
      {eyebrow ? <p className="font-accent text-3xl text-gold">{eyebrow}</p> : null}
      <h2 className="max-w-4xl font-heading text-4xl font-semibold leading-none text-forest lg:text-6xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-content-md text-base leading-8 text-charcoal/80 lg:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
