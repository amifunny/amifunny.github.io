import { motion } from 'motion/react';
import { projects } from '../data';

const accentBg: Record<string, string> = {
  zap: 'bg-zap',
  hot: 'bg-hot',
  electric: 'bg-electric',
  mint: 'bg-mint',
};
const accentText: Record<string, string> = {
  zap: 'text-ink',
  hot: 'text-paper',
  electric: 'text-paper',
  mint: 'text-ink',
};

const statusLabel: Record<string, string> = {
  shipping: 'SHIPPING',
  'in-progress': 'IN PROGRESS',
  shipped: 'SHIPPED',
};

export function Projects() {
  return (
    <section id="projects" className="bg-ink text-paper py-24 md:py-32">
      <div className="wrap">
        <div className="mb-12">
          <div className="font-mono text-xs uppercase tracking-widest text-paper/60">
            03 / SIDE QUESTS
          </div>
          <h2 className="font-display text-5xl md:text-7xl leading-none mt-4">
            <span className="text-zap">PROJECTS</span> &amp;{' '}
            <span
              className="text-stroke"
              style={{ WebkitTextStroke: '2px #f5f2ea' }}
            >
              EXPERIMENTS
            </span>
          </h2>
          <p className="mt-4 max-w-2xl font-mono text-xs uppercase tracking-widest text-paper/70">
            Two of these are in-progress 2026 builds. The rest are shipped, all
            of them are on github.
          </p>
        </div>

        <ul className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((p, i) => (
            <motion.li
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.07 }}
              className={`brutal-border-2 group ${accentBg[p.accent]} ${accentText[p.accent]} flex flex-col p-6 md:p-7 transition-transform hover:-translate-y-1`}
            >
              <div className="flex items-center justify-between gap-3">
                <span className="brutal-border bg-paper text-ink font-mono text-[10px] uppercase tracking-widest px-2 py-0.5">
                  {statusLabel[p.status]}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest opacity-70">
                  0{i + 1}
                </span>
              </div>

              <h3 className="font-display text-3xl md:text-4xl leading-none mt-4">
                {p.name}
              </h3>
              <p className="mt-2 font-mono text-xs uppercase tracking-wider opacity-80">
                {p.tagline}
              </p>

              <p className="mt-4 text-sm md:text-base leading-snug">
                {p.description}
              </p>

              <ul className="mt-5 flex flex-wrap gap-1.5 font-mono text-[10px] uppercase tracking-widest">
                {p.stack.map((s) => (
                  <li
                    key={s}
                    className="brutal-border bg-paper/95 text-ink px-2 py-0.5"
                  >
                    {s}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-5 flex flex-wrap gap-2">
                {p.links.map((l) => (
                  <a
                    key={l.href + l.label}
                    href={l.href}
                    target={l.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="brutal-border bg-paper text-ink font-display px-3 py-2 text-sm hover:bg-ink hover:text-paper"
                  >
                    {l.label} ↗
                  </a>
                ))}
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
