import { Link } from 'react-router-dom'

export default function SoulCard({ soul }) {
  return (
    <Link
      to={`/soul/${soul.slug}`}
      className="group block rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-soft backdrop-blur transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
    >
      <div className="mb-4 flex items-center gap-3">
        <img
          src={soul.avatar}
          alt={`${soul.person} avatar`}
          className="h-12 w-12 rounded-full border border-slate-200 object-cover"
          loading="lazy"
        />
        <div className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600">
          {soul.person}
        </div>
      </div>
      <h3 className="mb-3 text-xl font-semibold tracking-tight text-slate-900 group-hover:text-slate-700">
        {soul.title}
      </h3>
      <p className="text-sm leading-6 text-slate-600">{soul.preview}</p>
      <div className="mt-5 text-sm font-medium text-slate-900">Open template →</div>
    </Link>
  )
}
