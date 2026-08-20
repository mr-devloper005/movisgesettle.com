'use client'

import { useMemo, useState, type CSSProperties } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, Search, UserPlus, LogIn, X, PlusCircle, UserCircle } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { globalContent } from '@/editable/content/global.content'
import { slot4BrandConfig } from '@/editable/theme/brand.config'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableNavbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const { session, logout } = useEditableLocalAuthSession()
  const brandName = slot4BrandConfig.siteName
  const navVars = { '--editable-nav-bg': '#ffffff', '--editable-nav-text': '#102033', '--editable-nav-active': '#1f73be', '--editable-nav-active-text': '#ffffff', '--editable-cta-bg': '#1f73be', '--editable-cta-text': '#ffffff', '--editable-search-bg': '#ffffff', '--editable-border': '#d9e2ea', '--editable-container': '1180px' } as CSSProperties
  const navItems = useMemo(
    () => SITE_CONFIG.tasks.filter((task) => task.enabled).map((task) => ({ label: task.label, href: task.route })),
    []
  )

  return (
    <header style={navVars} className="sticky top-0 z-50 border-b border-[var(--editable-border)] bg-[var(--editable-nav-bg)] text-[var(--editable-nav-text)] shadow-[0_2px_10px_rgba(15,23,42,0.05)]">
      <nav className="mx-auto flex min-h-[68px] w-full max-w-[var(--editable-container)] items-center gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex shrink-0 items-center gap-3">
          <img src="/favicon.png?v=20260413" alt={brandName} className="h-10 w-10 object-contain" />
          <span className="hidden min-w-0 sm:block">
            <span className="block max-w-[190px] truncate text-base font-black tracking-normal">{brandName}</span>
            <span className="block max-w-[190px] truncate text-[10px] font-bold uppercase opacity-55">{globalContent.nav?.tagline || slot4BrandConfig.tagline}</span>
          </span>
        </Link>

        <form action="/search" className="mx-auto hidden min-w-0 flex-1 justify-center md:flex">
          <div className="flex w-full max-w-[650px] overflow-hidden rounded-md border border-[var(--editable-border)] bg-[var(--editable-search-bg)] shadow-sm">
            <label className="flex min-w-0 flex-1 items-center gap-2 border-r border-[var(--editable-border)] px-4 py-2.5">
              <span className="text-sm font-black">Find</span>
              <input name="q" type="search" placeholder="Mechanic, salon, contractor" className="min-w-0 flex-1 bg-transparent text-sm font-semibold outline-none placeholder:text-slate-400" />
            </label>
            
            <button className="flex w-12 items-center justify-center bg-[#1f73be] text-white" aria-label="Search businesses"><Search className="h-5 w-5" /></button>
          </div>
        </form>

        <div className="hidden items-center gap-2 lg:flex">
          {navItems.slice(0, 4).map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`)
            return (
              <Link key={item.href} href={item.href} className={`rounded-md px-3 py-2 text-sm font-bold transition ${active ? 'bg-[var(--editable-nav-active)] text-[var(--editable-nav-active-text)]' : 'hover:bg-slate-100'}`}>
                {item.label}
              </Link>
            )
          })}
        </div>

        <div className="ml-auto flex shrink-0 items-center gap-2">
          {session ? (
            <>
              <span className="hidden max-w-[180px] items-center gap-2 truncate rounded-md bg-slate-100 px-3 py-2 text-sm font-black sm:inline-flex"><UserCircle className="h-4 w-4 shrink-0" /> {session.name}</span>
              <Link href="/create" className="hidden items-center gap-2 rounded-md bg-[var(--editable-cta-bg)] px-4 py-2.5 text-sm font-black text-[var(--editable-cta-text)] shadow-sm sm:inline-flex"><PlusCircle className="h-4 w-4" /> Create</Link>
              <button type="button" onClick={logout} className="hidden items-center gap-2 rounded-md border border-[var(--editable-border)] px-3 py-2 text-sm font-black hover:bg-slate-100 sm:inline-flex">Logout</button>
            </>
          ) : (
            <>
              <Link href="/login" className="hidden items-center gap-2 rounded-md border border-[#1f73be] px-4 py-2 text-sm font-black text-[#1f73be] hover:bg-[#eef6fb] sm:inline-flex"><LogIn className="h-4 w-4" /> Login</Link>
              <Link href="/signup" className="hidden items-center gap-2 rounded-md bg-[var(--editable-cta-bg)] px-4 py-2.5 text-sm font-black text-[var(--editable-cta-text)] shadow-sm sm:inline-flex"><UserPlus className="h-4 w-4" /> Sign up</Link>
            </>
          )}
          <button type="button" onClick={() => setOpen((value) => !value)} className="rounded-md border border-[var(--editable-border)] bg-white p-2 lg:hidden" aria-label="Toggle menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-[var(--editable-border)] bg-[var(--editable-nav-bg)] px-4 py-4 lg:hidden">
          {session ? <p className="mb-3 rounded-md bg-slate-100 px-4 py-3 text-sm font-black">Signed in as {session.name}</p> : null}
          <form action="/search" className="mb-4 flex rounded-md border border-[var(--editable-border)] bg-[var(--editable-search-bg)] px-3 py-2">
            <Search className="mt-1 h-4 w-4 opacity-55" />
            <input name="q" type="search" placeholder="Search businesses" className="min-w-0 flex-1 bg-transparent px-3 text-sm outline-none" />
          </form>
          <div className="grid gap-2">
            {[{ label: 'Home', href: '/' }, ...navItems, { label: 'Contact', href: '/contact' }, ...(session ? [{ label: 'Create', href: '/create' }] : [{ label: 'Login', href: '/login' }, { label: 'Sign up', href: '/signup' }])].map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-md border border-[var(--editable-border)] bg-white px-4 py-3 text-sm font-black">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  )
}
