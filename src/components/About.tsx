import { motion } from 'motion/react';
import { useState } from 'react';
import { profile, aboutTags } from '../data';

export function About() {
  const [meows, setMeows] = useState(0);

  // Easter egg: click the cat to bump the meow counter and play a tiny synthesized meow.
  const onCatClick = () => {
    setMeows((m) => m + 1);
    try {
      const Ctx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext;
      const ctx = new Ctx();
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.type = 'triangle';
      o.frequency.setValueAtTime(880, ctx.currentTime);
      o.frequency.exponentialRampToValueAtTime(440, ctx.currentTime + 0.18);
      g.gain.setValueAtTime(0.18, ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.3);
      o.connect(g);
      g.connect(ctx.destination);
      o.start();
      o.stop(ctx.currentTime + 0.32);
    } catch {
      /* ignore */
    }
  };

  return (
    <section id="about" className="bg-paper py-24 md:py-32">
      <div className="wrap grid gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-7 lg:col-span-7">
          <div className="font-mono text-xs uppercase tracking-widest text-ink/60">
            01 / ABOUT
          </div>
          <h2 className="font-display text-5xl md:text-7xl leading-none mt-4">
            HI, I'M{' '}
            <span className="text-stroke">HEMANT</span>.
          </h2>

          <div className="mt-8 space-y-5 text-xl leading-snug md:text-2xl">
            {profile.bio.map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                {line}
              </motion.p>
            ))}
          </div>

          <ul className="mt-8 flex flex-wrap gap-2 font-mono text-xs uppercase tracking-wider">
            {aboutTags.map((tag) => (
              <li key={tag} className="brutal-border bg-paper px-2 py-1">
                {tag}
              </li>
            ))}
          </ul>
        </div>

        {/* Cat card */}
        <aside className="md:col-span-5 lg:col-span-5">
          <div className="relative">
            <div
              data-cursor="grow"
              role="button"
              tabIndex={0}
              onClick={onCatClick}
              onKeyDown={(e) =>
                (e.key === 'Enter' || e.key === ' ') && onCatClick()
              }
              className="brutal-border-2 brutal-shadow-lg group relative aspect-square w-full overflow-hidden bg-zap select-none"
            >
              <img
                src="/cat-mascot.png"
                alt="Hemant's brutalist cat mascot"
                className="h-full w-full object-contain p-4 animate-float transition-transform duration-300 group-hover:scale-[1.04]"
                draggable={false}
              />

              <div className="absolute -left-3 -top-3 rotate-[-12deg]">
                <span className="brutal-border bg-paper font-display px-2 py-1 text-xs tracking-wider">
                  THE CAT ★
                </span>
              </div>
              <div className="absolute right-3 bottom-3 rotate-[6deg]">
                <span className="brutal-border bg-hot text-paper font-display px-2 py-1 text-xs tracking-wider">
                  HEAD OF Q.A.
                </span>
              </div>
            </div>

            <p className="mt-4 font-mono text-xs uppercase tracking-widest text-ink/70">
              ☟ click the cat · meows so far:{' '}
              <span className="brutal-border bg-ink text-paper px-2 py-0.5">
                {meows.toString().padStart(3, '0')}
              </span>
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
