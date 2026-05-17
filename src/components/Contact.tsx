import { profile } from '../data';

export function Contact() {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-hot text-paper py-28 md:py-36 border-y-4 border-ink"
    >
      <div aria-hidden className="absolute inset-0 -z-10 opacity-25 bg-stripes" />

      <div className="wrap grid gap-8 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-8">
          <div className="font-mono text-xs uppercase tracking-widest opacity-80">
            05 / TALK TO ME
          </div>
          <h2 className="font-display text-5xl md:text-8xl leading-none mt-4">
            LET'S BUILD
            <br />
            SOMETHING
            <br />
            <span
              className="text-stroke"
              style={{ WebkitTextStroke: '3px #f5f2ea' }}
            >
              WEIRD.
            </span>
          </h2>

          <p className="mt-8 max-w-xl text-xl md:text-2xl leading-snug">
            <span className="bg-ink text-paper px-2 inline-block">
              {profile.available}
            </span>{' '}
            for engineering roles at product companies. If you are building
            anything interesting, I would love to chat.
          </p>
        </div>

        <aside className="md:col-span-4 flex flex-col gap-3 font-mono text-sm uppercase tracking-wider">
          <a
            href={`mailto:${profile.email}`}
            className="brutal-border brutal-shadow bg-paper text-ink px-5 py-4 font-display text-base hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-transform"
          >
            ✉ EMAIL
            <div className="font-mono text-[11px] mt-1 normal-case tracking-normal opacity-70">
              {profile.email}
            </div>
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="brutal-border bg-ink text-paper px-5 py-4 font-display text-base hover:bg-paper hover:text-ink"
          >
            ⌥ LINKEDIN ↗
          </a>
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="brutal-border bg-zap text-ink px-5 py-4 font-display text-base hover:bg-paper hover:text-ink"
          >
            ✦ GITHUB ↗
          </a>
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="brutal-border bg-mint text-ink px-5 py-4 font-display text-base hover:bg-paper hover:text-ink"
          >
            ⇩ RESUME (PDF)
          </a>
          <div className="brutal-border bg-paper/10 px-5 py-4 mt-2">
            <div className="opacity-70 text-[10px]">CALL</div>
            <a
              href={`tel:${profile.phone.replace(/\s+/g, '')}`}
              className="font-display text-lg"
            >
              {profile.phone}
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}
