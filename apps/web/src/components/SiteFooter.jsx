import React from 'react';
import { Link } from 'react-router-dom';
const FOOTER_LINKS = [{
  to: '/',
  label: 'Home'
}, {
  to: '/about',
  label: 'About Tri-M'
}, {
  to: '/announcements',
  label: 'Student Announcements'
}, {
  to: '/info',
  label: 'Important Information'
}];
export default function SiteFooter() {
  return <footer className="bg-navy-deep text-primary-foreground">
            <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2">
                <div>
                    <div>
                        <span className="leading-tight">
                            <span className="block font-display text-lg font-normal"><span style={{
                fontFamily: "\"Playfair Display\", sans-serif"
              }}>Tri-M Honor Society at Roslyn High School</span></span>
                        </span>
                    </div>
                    <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/65">The Modern Music Masters honor society at Roslyn High School — "Service Through Music"</p>
                </div>

                <div className="md:justify-self-end">
                    <h3 className="text-xs font-semibold text-white/60"><span style={{
            fontFamily: "\"Playfair Display\", sans-serif"
          }}><span style={{
              color: "rgb(255, 255, 255)"
            }}><span style={{
                fontSize: "14px",
                lineHeight: "normal"
              }}>Navigation</span></span></span></h3>
                    <ul className="mt-4 space-y-2.5">
                        {FOOTER_LINKS.map(link => <li key={link.to}>
                                <Link to={link.to} className="text-sm text-white/70 transition-colors hover:text-white">
                                    {link.label}
                                </Link>
                            </li>)}
                    </ul>
                </div>
            </div>
        </footer>;
}