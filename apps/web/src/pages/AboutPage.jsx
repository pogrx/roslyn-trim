import React from 'react';
import { Helmet } from 'react-helmet';
import { VOLUNTEER_OPPORTUNITIES, parseDate } from '@/data/content';

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>Volunteer Opportunities | Tri-M Music Honor Society at Roslyn High School</title>
        <meta
          name="description"
          content="Volunteer with Tri-M Chapter 860 at Roslyn High School — concert crew, peer tutoring, community outreach performances, NYSSMA mentoring, and more. Earn service points giving back through music."
        />
      </Helmet>

      {/* Page header */}
      <section className="border-b border-border bg-secondary/50">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-24">
          <h1 className="max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            Volunteer opportunities
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Music is meant to be shared. Tri-M Chapter 860 members log hundreds of service hours each
            year tutoring younger musicians, running concert logistics, and bringing performances into
            the Roslyn community. Find a role that fits your schedule and earn service points doing it.
          </p>
        </div>
      </section>

      {/* Opportunities list */}
      <section className="bg-secondary/60">
        <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 md:py-24">
          <div className="mb-12 max-w-2xl">
            <h2 className="font-display text-[2.4rem] font-semibold tracking-tight sm:text-[3.2rem]">
              Current opportunities
            </h2>
          </div>

          <div>
            {VOLUNTEER_OPPORTUNITIES.map((opp) => (
              <article key={opp.id} className="border-t border-border py-8 last:border-b">
                <h3 className="font-display text-[1.65rem] font-semibold tracking-tight sm:text-[2rem]">
                  {opp.title}
                </h3>
                <p className="mt-1 text-xs font-medium uppercase text-muted-foreground">
                  {parseDate(opp.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {opp.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
