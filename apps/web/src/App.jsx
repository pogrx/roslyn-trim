import React from 'react';
import { Route, Routes, BrowserRouter as Router, useLocation } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AnnouncementsPage from './pages/AnnouncementsPage';
import InfoPage from './pages/InfoPage';
import { OFFICERS } from './data/content';

function OfficersBlock() {
    return (
        <section className="border-t border-border bg-card" aria-labelledby="officers-heading">
            <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 md:py-14">
                <h2 id="officers-heading" className="mb-10 text-center text-3xl sm:mb-12 sm:text-4xl">
                    2026-2027 Officers
                </h2>
                <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 sm:gap-x-8 sm:gap-y-10 lg:grid-cols-4 lg:gap-x-10">
                    {OFFICERS.map((officer) => (
                        <article
                            key={officer.role}
                            className={`text-center ${
                                officer.role === 'Event Coordinators'
                                    ? 'lg:col-start-2'
                                    : officer.role === 'Event Assistant'
                                        ? 'lg:col-start-3'
                                        : ''
                            }`}
                        >
                            <h3 className="text-base underline decoration-2 underline-offset-4 sm:text-lg">
                                {officer.role}
                            </h3>
                            <div className="mt-2 space-y-0.5 text-sm leading-relaxed text-foreground sm:text-base">
                                {officer.students.map((student) => (
                                    <p key={student}>{student}</p>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

function AppLayout() {
    const location = useLocation();

    return (
        <div className="flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/volunteer" element={<AboutPage />} />
                    <Route path="/announcements" element={<AnnouncementsPage />} />
                    <Route path="/info" element={<InfoPage />} />
                    <Route path="*" element={<HomePage />} />
                </Routes>
                {location.pathname === '/info' && <OfficersBlock />}
            </main>
            <SiteFooter />
        </div>
    );
}

function App() {
    return (
        <Router>
            <ScrollToTop />
            <AppLayout />
        </Router>
    );
}

export default App;
