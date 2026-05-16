import { motion } from 'motion/react';
import { work } from '../data';

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

// Parses a leading "**Bold Prefix:** rest" pattern from a string. The bold
// prefix is rendered with a different weight so each bullet starts with a
// visual anchor (matches the resume bullet format).
function Bullet({ text }: { text: string }) {
  const match = text.match(/^\*\*(.+?):\*\*\s*(.*)$/s);
  if (!match) {
    return <>{text}</>;
  }
  return (
    <>
      <span className="font-bold">{match[1]}:</span> {match[2]}
    </>
  );
}

export function Work() {
  return (
    <section
      id="work"
      className="border-t-4 border-ink bg-paper-soft py-24 md:py-32"
    >
      <div className="wrap">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-ink/60">
              02 / WHAT I'VE DONE
            </div>
            <h2 className="font-display text-5xl md:text-7xl leading-none mt-4">
              JOB EXPERIENCE.
            </h2>
          </div>
        </div>

        <ul className="space-y-12">
          {work.map((job, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-15%' }}
              transition={{ duration: 0.5 }}
              className={`brutal-border-2 brutal-shadow-lg ${accentBg[job.accent]} ${accentText[job.accent]} grid gap-6 p-6 md:grid-cols-12 md:p-10`}
            >
              <div className="md:col-span-4">
                <div className="font-mono text-xs uppercase tracking-widest opacity-70">
                  {job.period}
                </div>
                <h3 className="font-display text-3xl mt-2 md:text-5xl leading-[0.95]">
                  {job.role}
                </h3>
                <div className="mt-2 font-display text-xl underline underline-offset-4">
                  @ {job.company}
                </div>
                <ul className="mt-4 flex flex-wrap gap-1.5 font-mono text-[10px] uppercase tracking-widest">
                  {job.stack.map((s) => (
                    <li
                      key={s}
                      className="brutal-border bg-paper text-ink px-2 py-0.5"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="md:col-span-8">
                <p className="font-display text-2xl leading-[1.1] md:text-3xl">
                  {job.blurb}
                </p>
                <ul className="mt-6 space-y-3 text-base md:text-lg">
                  {job.highlights.map((h, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="mt-1 inline-block h-4 w-4 shrink-0 bg-ink" />
                      <span>
                        <Bullet text={h} />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
