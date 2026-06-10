interface CaptionProps {
  project: string;
  year: string;
  type?: string;
  className?: string;
  centered?: boolean;
}

export default function Caption({ project, year, type, className = '', centered = false }: CaptionProps) {
  return (
    <div
      className={`caption-motif ${centered ? 'justify-center' : ''} ${className}`}
      role="group"
      aria-label={`${project}, ${year}`}
    >
      <span>{project}</span>
      <span className="divider" aria-hidden="true" />
      {type && <span>{type}</span>}
      {type && <span className="divider" aria-hidden="true" />}
      <span>{year}</span>
    </div>
  );
}
