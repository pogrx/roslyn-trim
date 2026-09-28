import React, { useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { Inbox } from 'lucide-react';
import { ANNOUNCEMENTS, CHOIR_IMG, parseDate } from '@/data/content';

export default function AnnouncementsPage() {
  const visible = useMemo(() => {
    return [...ANNOUNCEMENTS].sort((a, b) => parseDate(b.date) - parseDate(a.date));
  }, []);

  return (
    <>
      <Helmet>
        <title>Announcements &amp; News | Tri-M Music Honor Society at Roslyn High School</title>
        <meta name="description" content="Announcements and news for Tri-M Chapter 860 members at Roslyn High School — meetings, events, deadlines, and service opportunities." />
      </Helmet>

      {/* Banner */}
      <section className="relative flex min-h-[42dvh] items-end overflow-hidden bg-navy-deep">
        <img src={CHOIR_IMG} alt="2025 Tri-M Induction Ceremony" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-navy-deep/70" />
        <div className="relative mx-auto w-full max-w-6xl px-4 pb-12 pt-28 sm:px-6">
          <h1 className="font-display text-4xl font-semibold tracking-tight text-primary-foreground sm:text-6xl">
            Announcements &amp; News
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
            Announcements/initiatives created by student members and upcoming events.
          </p>
        </div>
      </section>

      {/* List */}
      <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        {visible.length === 0 ? (
          <div className="flex flex-col items-center gap-3 border border-dashed border-border py-20 text-center">
            <Inbox className="h-8 w-8 text-muted-foreground" />
            <p className="font-display text-[1.35rem] font-semibold">Nothing here yet</p>
            <p className="max-w-sm text-sm text-muted-foreground">
              There are no announcements right now. Check back soon.
            </p>
          </div>
        ) : (
          <div>
            {visible.map((item) => (
              <article key={item.id} className="border-t border-border py-8 last:border-b">
                <h2 className="font-display text-[1.65rem] font-semibold tracking-tight sm:text-[2rem]">
                  {item.title}
                </h2>
                <p className="mt-1 text-xs font-medium uppercase text-muted-foreground">
                  {parseDate(item.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
