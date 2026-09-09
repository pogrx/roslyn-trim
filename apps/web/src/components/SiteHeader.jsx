import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
const NAV_LINKS = [{
  to: '/',
  label: 'Home'
}, {
  to: '/about',
  label: 'Volunteer'
}, {
  to: '/announcements',
  label: 'Announcements'
}, {
  to: '/info',
  label: 'Important Info'
}];
export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="sticky top-0 z-50 border-b border-border bg-background">
            <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 md:h-20">
                <Link to="/" className="flex items-center"><span className="leading-tight"><span className="block font-display text-2xl font-normal tracking-tight text-foreground">Roslyn High School</span><span className="block text-[11px] font-medium uppercase text-muted-foreground">Tri-M Honor Society</span></span></Link>

                <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
                    {NAV_LINKS.map(link => <NavLink key={link.to} to={link.to} end={link.to === '/'} className={({ 
          isActive
        }) => `px-3.5 py-2 text-sm font-medium transition-colors ${isActive ? 'border border-primary bg-transparent text-primary' : 'text-muted-foreground hover:bg-secondary hover:text-foreground'}`}>
                            {link.label}
                        </NavLink>)}
                </nav>

                <div className="md:hidden">
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger asChild>
                            <button aria-label="Open navigation menu" className="flex h-11 w-11 items-center justify-center border border-border bg-card text-foreground">
                                <Menu className="h-5 w-5" />
                            </button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-72 bg-background">
                            <div className="mt-4 flex items-center border-b border-border pb-5">
                                <span className="font-display text-base font-semibold">Tri-M · Roslyn HS</span>
                            </div>
                            <nav className="mt-5 flex flex-col gap-1" aria-label="Mobile">
                                {NAV_LINKS.map(link => <NavLink key={link.to} to={link.to} end={link.to === '/'} onClick={() => setOpen(false)} className={({
                isActive
              }) => `px-4 py-3 text-base font-medium transition-colors ${isActive ? 'bg-navy text-primary-foreground' : 'text-foreground hover:bg-secondary'}`}>
                                        {link.label}
                                    </NavLink>)}
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>;
}