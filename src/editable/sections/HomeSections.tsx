import Link from 'next/link'
import { ArrowRight, Car, GraduationCap, Home, Phone, Scale, Search, Star, Wrench } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import type { HomeTimeSection } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { slot4BrandConfig } from '@/editable/theme/brand.config'
import { editableDesignContract as dc } from '@/editable/layouts/design-contract'
import { getEditablePostImage, postHref } from '@/editable/cards/PostCards'

type HomeSectionProps = {
  primaryTask: TaskKey
  primaryRoute: string
  posts: SitePost[]
  timeSections: HomeTimeSection[]
}

const heroImage = 'https://images.unsplash.com/photo-1595475207225-428b62bda831?auto=format&fit=crop&w=1800&q=82'
const merchantImage = 'https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&w=900&q=80'
const shopImage = 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=900&q=80'

const categories = [
  { label: 'Autos', href: '/listing?category=autos', icon: Car },
  { label: 'Home & Garden', href: '/listing?category=home-garden', icon: Home },
  { label: 'Legal & Financial', href: '/listing?category=legal-financial', icon: Scale },
  { label: 'Education', href: '/listing?category=education', icon: GraduationCap },
  { label: 'Professional Services', href: '/listing?category=professional-services', icon: Wrench },
]

const getContent = (post?: SitePost | null) => post?.content && typeof post.content === 'object' ? post.content as Record<string, unknown> : {}
const asText = (value: unknown) => typeof value === 'string' ? value.trim() : ''
const getField = (post: SitePost, keys: string[]) => {
  const content = getContent(post)
  for (const key of keys) {
    const value = asText(content[key])
    if (value) return value
  }
  return ''
}

function getExcerpt(post?: SitePost | null, limit = 120) {
  const content = getContent(post)
  const raw = asText(content.description) || asText(content.summary) || post?.summary || ''
  const clean = raw.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()
  return clean.length > limit ? `${clean.slice(0, limit).trim()}...` : clean
}

function taskLabel(task: TaskKey) {
  return SITE_CONFIG.tasks.find((item) => item.key === task)?.label || task
}

function ratingFor(index: number) {
  return (4.6 + (index % 4) * 0.1).toFixed(1)
}

function ListingCard({ post, href, index }: { post: SitePost; href: string; index: number }) {
  const location = getField(post, ['address', 'location', 'city']) || 'Local service area'
  const phone = getField(post, ['phone', 'telephone', 'mobile'])
  const category = getField(post, ['category']) || post.tags?.[0] || 'Business'
  return (
    <Link href={href} className="group block min-w-0 rounded-md border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="flex aspect-[16/9] items-center justify-center overflow-hidden rounded-t-md bg-[#eef6fb]">
        <img src={getEditablePostImage(post)} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
      </div>
      <div className="p-5">
        <h3 className="line-clamp-2 text-xl font-black leading-tight text-[#102033]">{post.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600">{location}</p>
        {phone ? <p className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-[#102033]"><Phone className="h-4 w-4" /> {phone}</p> : null}
        <div className="mt-5 flex items-center justify-between border-t border-slate-200 pt-4">
          <span className="text-[11px] font-black uppercase text-[#ff5750]">{category}</span>
          <span className="inline-flex items-center gap-1 text-sm font-black text-[#ff5750]"><Star className="h-4 w-4 fill-current" /> {ratingFor(index)}</span>
        </div>
      </div>
    </Link>
  )
}

function ArticleCard({ post, href }: { post: SitePost; href: string }) {
  const category = getField(post, ['category']) || post.tags?.[0] || 'Local guide'
  return (
    <Link href={href} className="group block min-w-0">
      <div className="aspect-[16/10] overflow-hidden rounded-md bg-slate-100">
        <img src={getEditablePostImage(post)} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
      </div>
      <p className="mt-5 text-[11px] font-black uppercase tracking-normal text-[#ff5750]">{category}</p>
      <h3 className="mt-2 line-clamp-3 text-xl font-black leading-tight text-[#102033]">{post.title}</h3>
      <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-600">{getExcerpt(post, 105)}</p>
    </Link>
  )
}

export function EditableHomeHero({ primaryTask, primaryRoute }: HomeSectionProps) {
  const heroTitle = pagesContent.home.hero.title.join(' ') || `Find local ${taskLabel(primaryTask).toLowerCase()}`
  return (
    <section className="relative min-h-[465px] overflow-hidden bg-[#082347] text-white">
      <img src={heroImage} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-black/45" />
      <div className="relative mx-auto flex min-h-[465px] max-w-[var(--editable-container)] flex-col items-center justify-center px-4 py-16 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-black uppercase tracking-normal text-white/80">{pagesContent.home.hero.badge}</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight tracking-normal sm:text-5xl lg:text-6xl">{heroTitle}</h1>
        <p className="mt-4 max-w-2xl text-base font-semibold leading-7 text-white/84">{pagesContent.home.hero.description}</p>
        <form action="/search" className="mt-8 flex w-full max-w-[870px] flex-col overflow-hidden rounded-md bg-white text-[#102033] shadow-2xl sm:flex-row">
          <label className="flex min-h-14 min-w-0 flex-1 items-center gap-3 border-b border-slate-200 px-5 sm:border-b-0 sm:border-r">
            <span className="font-black">Find</span>
            <input name="q" placeholder={pagesContent.home.hero.searchPlaceholder} className="min-w-0 flex-1 bg-transparent text-sm font-semibold outline-none placeholder:text-slate-400" />
          </label>
          
          <button className="inline-flex min-h-14 items-center justify-center gap-2 bg-[#1f73be] px-7 text-sm font-black text-white">
            <Search className="h-5 w-5" /> Search
          </button>
        </form>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <Link href={primaryRoute || '/listing'} className={dc.button.primary}>Browse businesses</Link>
          <Link href="/create" className="inline-flex items-center justify-center rounded-md border border-white/70 bg-white/10 px-7 py-3 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20">Add a listing</Link>
        </div>
      </div>
    </section>
  )
}

export function EditableStoryRail({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const listingPosts = posts.slice(0, 6)
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[var(--editable-container)] px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-[#102033]">Browse our top categories</h2>
        <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <Link key={category.label} href={category.href} className="group flex min-h-36 flex-col items-center justify-center rounded-md border border-slate-200 bg-white p-5 text-center transition hover:-translate-y-1 hover:shadow-lg">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fff0ef] text-[#ff5750]"><Icon className="h-6 w-6" /></span>
                <span className="mt-4 text-base font-black text-[#102033]">{category.label}</span>
              </Link>
            )
          })}
        </div>

        {listingPosts.length ? (
          <div className="mt-16">
            <div className="flex items-end justify-between gap-4">
              <h2 className="text-3xl font-black text-[#102033]">Recommended business</h2>
              <Link href={primaryRoute || '/listing'} className="hidden text-sm font-black text-[#1f73be] sm:inline-flex">See all</Link>
            </div>
            <div className="mt-7 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {listingPosts.map((post, index) => <ListingCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />)}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  )
}

export function EditableMagazineSplit({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const feature = posts[0]
  const rest = posts.slice(1, 4)
  if (!feature) return null
  return (
    <section className="bg-[#f8fbff]">
      <div className="mx-auto max-w-[var(--editable-container)] px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-3xl font-black text-[#102033]">Popular businesses</h2>
          
        </div>
        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1.7fr)_minmax(320px,0.9fr)] lg:items-center">
          <Link href={postHref(primaryTask, feature, primaryRoute)} className="group block overflow-hidden rounded-md bg-white shadow-sm">
            <div className="aspect-[16/9] overflow-hidden">
              <img src={getEditablePostImage(feature)} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
            </div>
          </Link>
          <div>
            <p className="inline-flex rounded bg-[#fff0ef] px-4 py-2 text-[11px] font-black uppercase text-[#ff5750]">Business insight</p>
            <h3 className="mt-5 text-3xl font-black leading-tight text-[#102033]">{feature.title}</h3>
            <p className="mt-4 text-base leading-7 text-slate-600">{getExcerpt(feature, 160)}</p>
            <Link href={postHref(primaryTask, feature, primaryRoute)} className="mt-8 inline-flex rounded-md border border-[#1f73be] px-10 py-3 text-sm font-black text-[#1f73be]">Read more</Link>
          </div>
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {rest.map((post) => <ArticleCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} />)}
        </div>
      </div>
    </section>
  )
}

export function EditableTimeCollections({ primaryTask, primaryRoute, posts, timeSections }: HomeSectionProps) {
  const sectionPosts = (timeSections.flatMap((section) => section.posts).length ? timeSections.flatMap((section) => section.posts) : posts).slice(4, 10)
  if (!sectionPosts.length) return null
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[var(--editable-container)] px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-black uppercase text-[#ff5750]">Directory intelligence</p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-[#102033]">Compare merchants with the details that matter.</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">Browse names, categories, summaries, locations, and contact paths in a normal page width that keeps scanning comfortable.</p>
            <Link href="/listing" className="mt-7 inline-flex items-center gap-2 rounded-md bg-[#1f73be] px-7 py-3 text-sm font-black text-white">Explore more <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {sectionPosts.map((post, index) => <ListingCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index + 6} />)}
          </div>
        </div>
      </div>
    </section>
  )
}

export function EditableHomeCta() {
  return (
    <section id="get-app" className="bg-[#082347] text-white">
      <div className="mx-auto grid max-w-[var(--editable-container)] items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-xs font-black uppercase tracking-normal text-white/70">For merchants</p>
          <h2 className="mt-4 max-w-md text-3xl font-black leading-tight">Fuel your business growth with {slot4BrandConfig.siteName}</h2>
          <p className="mt-5 max-w-md text-base leading-7 text-white/78">Join local merchants who use clear directory profiles to turn search intent into calls, visits, and customer conversations.</p>
          <Link href="/create" className="mt-8 inline-flex rounded-md bg-[#ff5750] px-10 py-3 text-sm font-black text-white">Learn more</Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <img src={shopImage} alt="" className="h-64 w-full rounded-md border-8 border-white object-cover sm:mt-12" />
          <img src={merchantImage} alt="" className="h-64 w-full rounded-md border-8 border-white object-cover" />
        </div>
      </div>
    </section>
  )
}
