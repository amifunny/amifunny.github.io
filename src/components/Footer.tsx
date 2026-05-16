import { profile } from '../data';

export function Footer() {
  return (
    <footer className="bg-ink text-paper py-10">
      <div className="wrap flex flex-col items-start justify-between gap-6 font-mono text-xs uppercase tracking-widest md:flex-row md:items-center">
        <div>
          © {new Date().getFullYear()} {profile.name} · built brutally with
          Vite, React &amp; Tailwind.
        </div>
        <div className="flex flex-wrap gap-4">
          <a href={profile.socials.github} target="_blank" rel="noopener noreferrer">
            github
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin
          </a>
          <a href={`mailto:${profile.email}`}>email</a>
          <a href={profile.resume}>résumé</a>
        </div>
      </div>
    </footer>
  );
}
