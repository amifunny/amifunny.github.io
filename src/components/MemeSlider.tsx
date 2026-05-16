import { useCallback, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

type Meme = {
  src: string;
  top: string;
  bottom: string;
  alt: string;
};

// Tech-flavored captions over classic meme templates. Images are mirrored into
// /public/memes so the build is self-contained and won't link-rot on imgflip.
const memes: Meme[] = [
  {
    src: '/memes/leo-pointing.jpg',
    alt: 'Leonardo DiCaprio pointing meme',
    top: "THAT'S MY CODE",
    bottom: 'IN THE STAGING ENVIRONMENT',
  },
  {
    src: '/memes/homelander-phone.png',
    alt: 'Homelander disappointed at phone',
    top: 'WHEN PROD GOES DOWN',
    bottom: "AND THE LOGS SAY 'undefined'",
  },
  {
    src: '/memes/butcher.jpg',
    alt: 'Billy Butcher, The Boys',
    top: 'OI MATE,',
    bottom: 'YOU CALL THAT A MICROSERVICE?',
  },
  {
    src: '/memes/leo-tv.jpg',
    alt: 'Leonardo DiCaprio pointing at TV',
    top: 'THERE GOES MY PR',
    bottom: 'STILL UNREVIEWED FROM TUESDAY',
  },
  {
    src: '/memes/no-god-no.png',
    alt: 'Michael Scott no god please no, The Office',
    top: 'I FORGOT TO',
    bottom: 'BACK UP THE DATABASE',
  },
  {
    src: '/memes/dwight-false.jpg',
    alt: "Dwight Schrute 'False', The Office",
    top: 'IT WORKS ON MY MACHINE.',
    bottom: 'FALSE.',
  },
  {
    src: '/memes/jim-identity.jpg',
    alt: 'Jim Halpert Identity Theft, The Office',
    top: 'MICROSERVICES',
    bottom: 'ARE NOT A JOKE, JIM',
  },
  {
    src: '/memes/prison-mike.jpg',
    alt: 'Prison Mike, The Office',
    top: 'THE WORST THING',
    bottom: 'WAS DEBUGGING JAVASCRIPT',
  },
  {
    src: '/memes/kevin-chili.jpg',
    alt: 'Kevin Malone chili spill, The Office',
    top: 'WHEN YOU DROP A TABLE',
    bottom: 'IN PRODUCTION',
  },
  {
    src: '/memes/stanley-pretzel.jpg',
    alt: 'Stanley Hudson Pretzel Day, The Office',
    top: 'A MEETING',
    bottom: 'THAT COULD HAVE BEEN A SLACK MESSAGE',
  },
];


// Classic Impact-with-stroke caption. Black fill, white stroke, all caps.
function MemeCaption({ children, position }: { children: string; position: 'top' | 'bottom' }) {
  return (
    <div
      className={
        position === 'top'
          ? 'absolute left-0 right-0 top-3 md:top-5 px-4 text-center pointer-events-none'
          : 'absolute left-0 right-0 bottom-3 md:bottom-5 px-4 text-center pointer-events-none'
      }
    >
      <span
        className="font-meme uppercase font-black leading-none tracking-tight text-white text-[clamp(1.25rem,4vw,3rem)]"
        style={{
          WebkitTextStroke: '2px #000',
          textShadow:
            '3px 3px 0 #000, -3px 3px 0 #000, 3px -3px 0 #000, -3px -3px 0 #000, 0 4px 0 #000, 4px 0 0 #000',
        }}
      >
        {children}
      </span>
    </div>
  );
}

export function MemeSlider() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = memes.length;

  const go = useCallback((delta: number) => {
    setI((curr) => (curr + delta + total) % total);
  }, [total]);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => go(1), 5800);
    return () => clearInterval(t);
  }, [paused, go]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft') go(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [go]);

  const current = memes[i];

  return (
    <section
      id="memes"
      className="bg-paper-soft border-y-4 border-ink py-16 md:py-24"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="wrap">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
          <div>
            <div className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-ink/60">
              // SOME MEMES FOR YOU
            </div>
            <h3 className="font-display text-3xl md:text-5xl leading-none mt-2">
              MEETINGS ARE LONG{' '}
              <span className="bg-zap px-2 brutal-border">MEMES ARE LONGER</span>
            </h3>
          </div>
          
        </div>

        <div className="grid grid-cols-12 gap-4 md:gap-6 items-center">
          <button
            aria-label="Previous meme"
            type="button"
            onClick={() => go(-1)}
            className="col-span-2 md:col-span-1 brutal-border-2 brutal-shadow bg-paper text-ink font-display text-2xl md:text-4xl aspect-square grid place-items-center hover:bg-zap hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-transform"
          >
            ←
          </button>

          <div className="col-span-8 md:col-span-10">
            <div className="relative">
              <AnimatePresence mode="wait" initial={false}>
                <motion.figure
                  key={current.src}
                  initial={{ opacity: 0, x: 24, rotate: -1.5 }}
                  animate={{ opacity: 1, x: 0, rotate: -0.6 }}
                  exit={{ opacity: 0, x: -24, rotate: 1 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="relative brutal-border-2 brutal-shadow-lg bg-ink overflow-hidden"
                >
                  <img
                    src={current.src}
                    alt={current.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full max-h-[68vh] object-contain bg-black"
                  />
                  <MemeCaption position="top">{current.top}</MemeCaption>
                  <MemeCaption position="bottom">{current.bottom}</MemeCaption>

                
                </motion.figure>
              </AnimatePresence>
            </div>
          </div>

          <button
            aria-label="Next meme"
            type="button"
            onClick={() => go(1)}
            className="col-span-2 md:col-span-1 brutal-border-2 brutal-shadow bg-paper text-ink font-display text-2xl md:text-4xl aspect-square grid place-items-center hover:bg-zap hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-transform"
          >
            →
          </button>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          {memes.map((m, idx) => (
            <button
              key={m.src}
              aria-label={`Show meme ${idx + 1}`}
              type="button"
              onClick={() => setI(idx)}
              className={`h-3 w-6 brutal-border transition-colors ${
                idx === i ? 'bg-ink' : 'bg-paper hover:bg-zap'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
