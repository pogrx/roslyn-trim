import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ANNOUNCEMENTS, FAQS, HERO_IMG, REHEARSAL_IMG, parseDate } from '@/data/content';
export default function HomePage() {
  const upcoming = [...ANNOUNCEMENTS]
    .sort((a, b) => parseDate(b.date) - parseDate(a.date))
    .slice(0, 3);
  return <>
      <Helmet>
        <title>Tri-M Music Honor Society | Roslyn High School</title>
        <meta name="description" content="The Tri-M Music Honor Society (Modern Music Masters) at Roslyn High School — recognizing student musicians for achievement in music, scholarship, leadership, and service." />
      </Helmet>

      {/* Hero */}
      <section className="relative flex min-h-[88dvh] items-end overflow-hidden bg-navy-deep">
        <img src={HERO_IMG} alt="2024 Roslyn Orchestra Winter Concert" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-navy-deep/70" />
        <div className="relative mx-auto w-full max-w-6xl px-4 pb-20 pt-32 sm:px-6">
          <h1 className="max-w-3xl font-display text-5xl font-semibold leading-[1.02] tracking-tight text-primary-foreground sm:text-6xl lg:text-7xl">Welcome to Roslyn Tri-M</h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            The Roslyn Tri-M Music Honor Society recognizes Roslyn&apos;s many dedicated student musicians and collaborates to create leadership and help the community.
          </p>
        </div>
      </section>

      {/* Upcoming */}
      <section className="bg-secondary/60">
        <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 md:py-24">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-[2.4rem] font-semibold tracking-tight sm:text-[3.2rem]">Recent announcements &amp; news</h2>
            <Link to="/announcements" className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy transition-colors hover:text-foreground">All announcements &amp; news<ArrowUpRight className="h-4 w-4" /></Link>
          </div>
          <div>
            {upcoming.map(item => {
            return <Link key={item.id} to="/announcements" className="group flex items-start gap-5 border-t border-border py-6 last:border-b sm:items-center sm:gap-8">
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-[1.2rem] font-semibold tracking-tight sm:text-[1.35rem]">
                      {item.title}
                    </h3>
                  </div>
                  <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-muted-foreground sm:mt-0" />
                </Link>;
          })}
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 md:py-28">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <img src={REHEARSAL_IMG} alt="Tri-M members rehearsing chamber music in the Roslyn band room" className="aspect-[4/3] w-full object-cover" />
          </div>
          <div>
            <h2 className="font-display text-[2.4rem] font-semibold leading-tight tracking-tight sm:text-[3.2rem]">
              Modern Music Masters at Roslyn High School
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              From Tri-M Music Honor Society: <q>A Tri-M® Music Honor Society chapter opens up a world of opportunities for students who have already shown themselves to be academically capable and musically gifted. Through performance and community service, they’ll develop confidence, creativity, critical thinking, compassion, and a host of other leadership skills sure to serve them well in school and beyond.</q>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-secondary/60">
        <div className="mx-auto w-full max-w-3xl px-4 py-20 sm:px-6 md:py-24">
          <div className="mb-10 text-center">
            <h2 className="font-display text-[2.4rem] font-semibold tracking-tight sm:text-[3.2rem]">FAQ</h2>
          </div>
          <Accordion type="single" collapsible className="border border-border bg-card px-6">
            {FAQS.map((faq, i) => <AccordionItem key={faq.q} value={`faq-${i}`} className="border-border">
                <AccordionTrigger className="py-5 text-left font-display text-[1.2rem] font-normal tracking-tight hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                  {faq.link ? (
                    <>
                      {faq.a.split(faq.link.label)[0]}
                      <Link to={faq.link.to} className="font-medium text-foreground underline underline-offset-4 hover:text-navy-deep">
                        {faq.link.label}
                      </Link>
                      {faq.a.split(faq.link.label)[1]}
                    </>
                  ) : (
                    faq.a
                  )}
                </AccordionContent>
              </AccordionItem>)}
          </Accordion>
        </div>
      </section>
    </>;
}
