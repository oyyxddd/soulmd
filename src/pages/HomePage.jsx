import SoulCard from '../components/SoulCard'
import { souls } from '../data/souls'

export default function HomePage() {
  return (
    <main className="w-full pb-16">
      <section className="relative h-[75vh] min-h-[520px] w-full overflow-hidden">
        <img
          src="/bg.png"
          alt="Soulmd hero background"
          className="absolute inset-0 h-full w-full object-contain object-[88%_68%]"
        />
        <header className="absolute inset-x-0 top-0 z-10 mx-auto flex w-full max-w-7xl items-center px-5 py-6 md:px-8 lg:px-10">
          <div className="inline-flex items-center gap-3 rounded-2xl border border-slate-300 bg-white/90 px-4 py-2 text-slate-900 shadow-sm backdrop-blur">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-white/95 text-sm font-bold text-slate-900">
              S
            </span>
            <div>
              <p className="text-sm font-semibold leading-none">soulmd.top</p>
              <p className="mt-1 text-xs text-slate-600">OpenClaw Soul Library</p>
            </div>
          </div>
        </header>

        <div className="absolute inset-x-0 bottom-0 mx-auto w-full max-w-7xl px-5 pb-14 md:px-8 lg:px-10 lg:pb-20">
          <p className="mb-3 inline-flex rounded-full border border-slate-300 bg-white px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-slate-700">
            soul.md templates
          </p>
          <h1
            className="max-w-3xl text-[50px] font-semibold text-slate-900"
            style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif' }}
          >
            A new soul for your OpenClaw.
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-700 md:text-base">
            Explore premium English templates inspired by influential people.
            Preview each soul and open full details in one click.
          </p>
        </div>
      </section>

      <section id="library" className="mx-auto w-full max-w-7xl px-5 pt-10 md:px-8 lg:px-10">
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              Soul.md Preview Library
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Each card contains a condensed template preview.
            </p>
          </div>
          <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-500">
            {souls.length} templates
          </span>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {souls.map((soul) => (
            <SoulCard key={soul.slug} soul={soul} />
          ))}
        </div>
      </section>
    </main>
  )
}
