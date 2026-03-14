import { useMemo, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { findSoulBySlug } from '../data/souls'

async function copyText(text) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text)
    return
  }

  const textArea = document.createElement('textarea')
  textArea.value = text
  textArea.setAttribute('readonly', '')
  textArea.style.position = 'fixed'
  textArea.style.opacity = '0'
  document.body.appendChild(textArea)
  textArea.select()
  document.execCommand('copy')
  document.body.removeChild(textArea)
}

export default function SoulDetailPage() {
  const navigate = useNavigate()
  const { slug } = useParams()
  const [copyStatus, setCopyStatus] = useState('Copy template')

  const soul = useMemo(() => findSoulBySlug(slug), [slug])

  if (!soul) {
    return (
      <main className="mx-auto flex min-h-screen w-full max-w-3xl items-center justify-center px-5">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-soft">
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
            Soul template not found
          </h1>
          <p className="mt-3 text-slate-600">
            The requested template does not exist in the mock collection.
          </p>
          <Link
            to="/"
            className="mt-6 inline-flex rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white"
          >
            Return to library
          </Link>
        </div>
      </main>
    )
  }

  const handleCopy = async () => {
    try {
      await copyText(soul.content)
      setCopyStatus('Copied')
      window.setTimeout(() => setCopyStatus('Copy template'), 1800)
    } catch {
      setCopyStatus('Copy failed')
      window.setTimeout(() => setCopyStatus('Copy template'), 2000)
    }
  }

  return (
    <main className="mx-auto w-full max-w-4xl px-5 pb-16 pt-8 md:px-8 lg:px-10">
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="mb-5 inline-flex items-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50"
      >
        ← Back
      </button>

      <article className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white/90 shadow-soft backdrop-blur">
        <header className="border-b border-slate-100 p-6 md:p-8">
          <div className="flex items-center gap-3">
            <img
              src={soul.avatar}
              alt={`${soul.person} avatar`}
              className="h-14 w-14 rounded-full border border-slate-200 object-cover"
            />
            <p className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600">
              {soul.person}
            </p>
          </div>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            {soul.title}
          </h1>
          <p className="mt-3 max-w-2xl text-slate-600">{soul.intro}</p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
            >
              {copyStatus}
            </button>
            <Link
              to="/"
              className="inline-flex rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
            >
              Back to all templates
            </Link>
          </div>
        </header>

        <section className="p-6 md:p-8">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
            Full soul.md content
          </h2>
          <pre className="overflow-x-auto rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-7 text-slate-800">
            <code>{soul.content}</code>
          </pre>
        </section>
      </article>
    </main>
  )
}
