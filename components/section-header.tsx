type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  inverted?: boolean;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  inverted = false,
}: SectionHeaderProps) {
  return (
    <div className={inverted ? "section-header section-header--inverted" : "section-header"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
