import { pagesContent } from '@/editable/content/pages.content'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { slot4BrandConfig } from '@/editable/theme/brand.config'

export default function AboutPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[#f8fbff] px-4 py-14 text-[#102033] sm:px-6 lg:px-8">
        <section className="mx-auto grid max-w-[var(--editable-container)] gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="rounded-md border border-slate-200 bg-white p-8 shadow-sm lg:p-12">
            <p className="text-xs font-black uppercase text-[#ff5750]">{pagesContent.about.badge}</p>
            <h1 className="mt-5 text-4xl font-black leading-tight tracking-normal sm:text-5xl">About {slot4BrandConfig.siteName}</h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-700">{pagesContent.about.description}</p>
            <div className="mt-8 space-y-4 text-sm leading-8 text-slate-700">
              {pagesContent.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </article>
          <aside className="space-y-4">
            {pagesContent.about.values.map((value) => (
              <div key={value.title} className="rounded-md border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-xl font-black">{value.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-700">{value.description}</p>
              </div>
            ))}
          </aside>
        </section>
      </main>
    </EditableSiteShell>
  )
}
