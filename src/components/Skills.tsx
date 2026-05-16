import { skills } from '../data';

export function Skills() {
  return (
    <section id="skills" className="bg-paper py-24 md:py-32">
      <div className="wrap">
        <div className="mb-12">
          <div className="font-mono text-xs uppercase tracking-widest text-ink/60">
            04 / STACK
          </div>
          <h2 className="font-display text-5xl md:text-7xl leading-none mt-4">
            TOOLS&nbsp;
            <span className="text-hot">I&nbsp;LIKE</span>.
          </h2>
        </div>

        <ul className="grid gap-3">
          {skills.map((row) => (
            <li
              key={row.group}
              className="brutal-border bg-paper grid gap-3 p-4 md:grid-cols-12 md:p-5"
            >
              <div className="md:col-span-3">
                <span className="font-display text-xl md:text-2xl">
                  {row.group}
                </span>
                <div className="font-mono text-[10px] uppercase tracking-widest text-ink/50">
                  {String(row.items.length).padStart(2, '0')} tools
                </div>
              </div>
              <ul className="md:col-span-9 flex flex-wrap items-center gap-2">
                {row.items.map((it) => (
                  <li
                    key={it}
                    className="font-mono text-sm uppercase tracking-wide brutal-border px-2 py-1 hover:bg-zap"
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>

    </section>
  );
}
