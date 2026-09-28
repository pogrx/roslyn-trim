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
              Important Information
            </h1>
          </div>
          <div className="mx-auto w-full max-w-md md:ml-auto">
            <img src={SHEET_MUSIC_IMG} alt="Director Mr. Aliano at the 2024 Induction Ceremony" className="aspect-[4/3] w-full object-cover" />
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
                  Wednesdays, 3:15–3:45 in the Orchestra Room — check GC for updates
                </dd>
              </div>
              <div className="flex gap-4 border-b border-border pb-4">
                <dt className="w-24 shrink-0 font-semibold text-foreground">Where</dt>
                <dd className="text-muted-foreground">Orchestra room</dd>
              </div>
              <div className="flex gap-4">
                <dt className="w-24 shrink-0 font-semibold text-foreground">Attendance</dt>
                <dd className="text-muted-foreground">
                  All members will receive an attendance QR code that they must scan at every meeting. Attendance is mandatory and will be recorded. Members are required to attend at least 50% of all Tri-M meetings in order to remain in good standing.
                </dd>
              </div>
            </dl>
          </Panel>

          <Panel title="Membership requirements" className="h-full">
            <div className="space-y-8">
              <section aria-labelledby="prospective-members-heading">
                <h3 id="prospective-members-heading" className="text-lg font-semibold text-foreground">Prospective Members</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Students interested in joining Tri-M must:</p>
                <ul className="mt-3 ml-1 list-disc space-y-3.5 pl-5 marker:text-foreground">
                  {REQUIREMENTS.prospective.map(req => <li key={req} className="text-sm leading-relaxed text-muted-foreground">
                      {req}
                    </li>)}
                </ul>
              </section>
              <section aria-labelledby="returning-members-heading">
                <h3 id="returning-members-heading" className="text-lg font-semibold text-foreground">Returning Members</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Current Tri-M members must:</p>
                <ul className="mt-3 ml-1 list-disc space-y-3.5 pl-5 marker:text-foreground">
                  {REQUIREMENTS.returning.map(req => <li key={req} className="text-sm leading-relaxed text-muted-foreground">
                      {req}
                    </li>)}
                </ul>
              </section>
            </div>
          </Panel>

          <Panel title="Points" className="h-full">
            <p className="mb-5 text-sm leading-relaxed text-muted-foreground">Members can earn points in many ways—through meetings, fundraising, performances, tutoring, ushering, and other Tri-M activities. Points are taken into account in leadership applications, and members must earn at least 100 points per school year to maintain their membership.</p>
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
                    <td className="py-4 align-top leading-relaxed text-muted-foreground">
                      {Array.isArray(row.description) ? <ul className="list-disc space-y-2 pl-5">
                          {row.description.map(item => <li key={item}>{item}</li>)}
                        </ul> : row.description}
                    </td>
                  </tr>)}
                </tbody>
              </table>
            </div>
          </Panel>

          <Panel title="Induction" className="h-full">
            <p className="text-sm leading-relaxed text-muted-foreground">
              This year’s Tri-M Induction Ceremony will be held in January. During the ceremony, Tri-M officers will formally induct all newly accepted members into the chapter.
              Inducted students will receive a certificate verifying their induction and will also have the opportunity to perform during the ceremony if they wish. Current Tri-M members are strongly encouraged to attend and support the chapter’s newest members.
              At the final Tri-M meeting of the school year, students who were inducted that year and have successfully met the chapter’s meeting attendance, point, and performance requirements will receive their official Tri-M membership card and Tri-M pin. 
              Graduating seniors who remain members in good standing receive a Tri-M cord that they may wear at graduation.
            </p>
          </Panel>
        </div>

      </section>
    </>;
}
