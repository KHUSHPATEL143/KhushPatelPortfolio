import { ExternalLink } from 'lucide-react';

function StatusLink({ href, label }) {
  if (!href) {
    return <span className="mini-chip pending-chip">{label}: pending</span>;
  }

  return (
    <a href={href} target="_blank" rel="noreferrer" className="mini-chip link-chip">
      {label}
      <ExternalLink size={14} />
    </a>
  );
}

export default StatusLink;
