import { CheckCircle2 } from 'lucide-react';

function EmptyState({ title, copy }) {
  return (
    <div className="empty-card">
      <div className="empty-icon-wrap">
        <CheckCircle2 size={18} />
      </div>
      <h3>{title}</h3>
      <p>{copy}</p>
    </div>
  );
}

export default EmptyState;
