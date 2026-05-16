import { motion } from 'motion/react';
import { profile } from '../data';

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate min-h-[100svh] overflow-hidden bg-paper pt-28"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.12] bg-dots"
      />
      <div
        aria-hidden
        className="absolute -right-32 -top-20 -z-10 h-[60vh] w-[60vh] rotate-12 bg-hot"
      />

      <div className="wrap pt-12 md:pt-16">
        <div className="mb-10 flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-widest md:text-sm">
          <span className="brutal-border bg-paper px-3 py-1">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-mint" />
            {profile.available}
          </span>
          <span className="brutal-border bg-paper px-3 py-1">
            Bengaluru, IN
          </span>
          <span className="brutal-border bg-zap px-3 py-1">
            {profile.yoe}+ YOE
          </span>
        </div>

        <div className="font-display leading-[0.85] tracking-tight">
          <h1 className="sr-only">
            {profile.name}, {profile.role}
          </h1>

          <motion.div
            initial={{ y: '110%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <span className="block text-[clamp(3.5rem,15vw,16rem)]">
              HEMANT
            </span>
          </motion.div>
          <motion.div
            initial={{ y: '110%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.1,
            }}
            className="overflow-hidden"
          >
            <span className="block text-stroke text-[clamp(3.5rem,15vw,16rem)] glitch">
              SINGH<span
                style={{ WebkitTextStroke: '0', color: '#FF006E' }}
              >.</span>
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 grid gap-6 md:grid-cols-3"
        >
          <div className="md:col-span-2">
            <p className="font-sans text-2xl leading-tight md:text-3xl">
              Tech Lead and Senior Software Engineer at{' '}
              <span className="bg-zap px-2 brutal-border inline-block rotate-[-1.5deg]">
                WisdomCircle
              </span>
              , building user-friendly, scalable systems from scratch and
              solving hard engineering problems.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href="#contact"
              className="brutal-border brutal-shadow bg-hot text-paper font-display text-2xl text-center px-6 py-4 transition-transform hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
            >
              HIRE ME ↗
            </a>
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="brutal-border bg-paper font-display text-2xl text-center px-6 py-4 hover:bg-ink hover:text-paper"
            >
              RESUME
            </a>
          </div>
        </motion.div>

        <div className="mt-16 mb-10 flex items-center gap-4 font-mono text-xs uppercase tracking-widest">
          <div className="h-px w-24 bg-ink" />
          <span>SCROLL · THERE IS A CAT</span>
        </div>
      </div>
    </section>
  );
}
