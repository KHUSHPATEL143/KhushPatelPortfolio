import { socialLinks, siteMeta } from '../../data/portfolio';

function SiteFooter() {
  const verifiedSocials = socialLinks.filter((item) => item.status === 'verified');

  return (
    <footer className="site-footer">
      <p>Designed and developed by {siteMeta.name}.</p>
      <div className="footer-links">
        {verifiedSocials.map((item) => (
          <a key={item.label} href={item.url} target="_blank" rel="noreferrer">
            {item.label}
          </a>
        ))}
      </div>
    </footer>
  );
}

export default SiteFooter;
