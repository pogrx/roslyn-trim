import React from 'react';
import { Helmet } from 'react-helmet';
import { POINT_SYSTEM, REQUIREMENTS, SHEET_MUSIC_IMG } from '@/data/content';
function Panel({
  title,
  children,
  className = ''
}) {
  return <div className={`border border-border bg-card p-7 sm:p-8 ${className}`}>
      <h2 className="font-display text-2xl font-semibold tracking-tight">{title}</h2>
      <div className="mt-6">{children}</div>
    </div>;
}
export default function InfoPage() {
  return <>
      <Helmet>
        <title>Important Information | Tri-M Music Honor Society at Roslyn High School</title>
        <meta name="description" content="Membership requirements, meeting schedule, point system, induction details, and FAQs for Tri-M Chapter 860 at Roslyn High School." />
      </Helmet>

      {/* Banner */}
      <section className="overflow-hidden">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-8 px-4 pt-16 pb-14 sm:px-6 md:grid-cols-[1.05fr_0.95fr] md:gap-10 md:pt-20 md:pb-20">
          <div>
            <h1 className="max-w-xl font-display text-[2.4rem] font-semibold tracking-tight text-foreground sm:text-[3.95rem]">
              Important information
            </h1>
          </div>
          <div className="mx-auto w-full max-w-md md:ml-auto">
            <img src={SHEET_MUSIC_IMG} alt="Sheet music and a violin resting in the Roslyn music room" className="aspect-[4/3] w-full object-cover" />
          </div>
        </div>
      </section>

      {/* Info panels */}
      <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <div className="grid gap-6">
          <Panel title="Meeting schedule" className="h-full">
            <dl className="space-y-4 text-sm leading-relaxed">
              <div className="flex gap-4 border-b border-border pb-4">
                <dt className="w-24 shrink-0 font-semibold text-foreground">When</dt>
                <dd className="text-muted-foreground">
                  Most Wednesdays — check GC for updates
                </dd>
              </div>
              <div className="flex gap-4 border-b border-border pb-4">
                <dt className="w-24 shrink-0 font-semibold text-foreground">Where</dt>
                <dd className="text-muted-foreground">Orchestra room</dd>
              </div>
              <div className="flex gap-4">
                <dt className="w-24 shrink-0 font-semibold text-foreground">Attendance</dt>
                <dd className="text-muted-foreground">
                  All members will recieve an attendence QR code that they must scan in every
                  meeting. Attendance is mandatory and will be recorded.
                </dd>
              </div>
            </dl>
          </Panel>

          <Panel title="Membership requirements" className="h-full">
            <ul className="ml-1 list-disc space-y-3.5 pl-5 marker:text-foreground">
              {REQUIREMENTS.map(req => <li key={req} className="text-sm leading-relaxed text-muted-foreground">
                  {req}
                </li>)}
            </ul>
          </Panel>

          <Panel title="Points" className="h-full">
            <p className="mb-5 text-sm leading-relaxed text-muted-foreground">Members can earn points in many ways—fundraising, performances, and induction. Points will be taken into account in leadership applications, and members have at least 100 points per year to keep their membership.</p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th scope="col" className="pb-3 pr-10 font-semibold text-foreground">Area</th>
                    <th scope="col" className="pb-3 pr-5 font-semibold text-foreground">Point value</th>
                    <th scope="col" className="pb-3 font-semibold text-foreground">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {POINT_SYSTEM.map(row => <tr key={row.area} className="border-b border-border last:border-b-0">
                    <th scope="row" className="py-4 pr-10 align-top font-semibold text-foreground whitespace-nowrap">{row.area}</th>
                    <td className="py-4 pr-5 align-top font-semibold text-foreground whitespace-nowrap">{row.pointValue}</td>
                    <td className="py-4 align-top leading-relaxed text-muted-foreground">{row.description}</td>
                  </tr>)}
                </tbody>
              </table>
            </div>
          </Panel>

          <Panel title="Induction" className="h-full">
            <p className="text-sm leading-relaxed text-muted-foreground">
              An induction ceremony is held for new accepted members each fall, and new
              members recieve a pin at the end of the year. During graduation, senior
              members can wear the Tri-M cord.
            </p>
          </Panel>
        </div>

      </section>
    </>;
}