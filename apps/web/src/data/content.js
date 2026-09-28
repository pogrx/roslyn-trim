export const HERO_IMG = 'https://horizons-cdn.hostinger.com/aa50e594-9507-4d6e-8611-96e42b13dafd/images-r7HzG.jpeg';
export const REHEARSAL_IMG = 'https://horizons-cdn.hostinger.com/aa50e594-9507-4d6e-8611-96e42b13dafd/tri-m_music_honor_society_logo-eY2Tu.jpg';
export const CHOIR_IMG = 'https://horizons-cdn.hostinger.com/aa50e594-9507-4d6e-8611-96e42b13dafd/43tri-mits-fCf9o.jpg';
export const SHEET_MUSIC_IMG = '../../../../imgs/IMG_0496.jpg';

export function parseDate(iso) {
    const [y, m, d] = iso.split('-').map(Number);
    return new Date(y, m - 1, d);
}

export const ANNOUNCEMENTS = [
    {
        id: 1,
        date: '2026-09-27',
        title: 'This page is updated at the end of each month, so please check back periodically for new opportunities.',
        body: '',
    }
];

export const VOLUNTEER_OPPORTUNITIES = [
    {
        id: 1,
        date: '2026-09-27',
        title: 'This page is updated at the end of each month, so please check back periodically for new volunteer opportunities.',
        body: '',
    }
];

export const OFFICERS = [
    { role: 'President', students: ['Gefen Portnoy'] },
    { role: 'Vice President', students: ['Sofia Carlese'] },
    {
        role: 'Secretaries',
        students: ['Sabrina Putterman (Recording)', 'Sarah Carlese (PR)', 'Vivien Lee (Outreach)'],
    },
    { role: 'Treasurer', students: ['Darren Shen'] },
    { role: 'Historian', students: ['Madeleine Klein'] },
    {
        role: 'Membership Coordinators',
        students: ['Leah Blumberg', 'Abbigale Oh', 'Sienna D’Souza'],
    },
    {
        role: 'Digital Media Coordinators',
        students: ['Daniel Oh', 'Anannya Anand', 'Libby Relkin'],
    },
    { role: 'Fundraising Coordinators', students: ['Adriana Pincic & Isabella Qiu'] },
    { role: 'Event Coordinators', students: ['Chloe Lee', 'Lucas Lee', 'Taehoon Shin'] },
    { role: 'Event Assistant', students: ['Adrian Jin'] },
];

export const REQUIREMENTS = {
    prospective: [
        'Be enrolled in a Roslyn High School music ensemble and/or music course and meet the chapter’s eligibility requirements',
        'Receive a recommendation from a Roslyn High School music faculty member',
        'Submit a completed membership application by the stated fall deadline',
        'Be approved for membership by the Chapter Advisor',
    ],
    returning: [
        'Earn a minimum of 100 points each school year',
        'Attend at least 50% of Tri-M meetings',
        'Remain actively involved in chapter meetings, performances, service activities, and/or fundraising opportunities',
        'Continue to meet the standards expected of Tri-M members in order to remain in good standing',
    ],
};

export const POINT_SYSTEM = [
    {
        area: 'Performance',
        pointValue: '20-100 per performance',
        description: [
            '80 points for a performance during Quarter 1',
            '60 points during Quarter 2',
            '40 points during Quarter 3',
            '20 points during Quarter 4',
            '100 points for performing at the Induction Ceremony',
        ],
    },
    { area: 'Fundraising', pointValue: '20 per unit sold', description: 'During approved fundraisers, members earn 20 points for every unit sold.' },
    { area: 'Ushering', pointValue: '40 per performance', description: 'Members earn 40 points for ushering at an approved performance.' },
    { area: 'Tutoring', pointValue: '40 per session', description: 'Members earn 40 points for each approved tutoring session.' },
    { area: 'Club Fair Representation', pointValue: '40 per period', description: 'Members earn 40 points for each period they represent Tri-M at the Club Fair.' },
    { area: 'Out-of-School Performances', pointValue: '50 each', description: 'Members may earn points for attending or performing in an out-of-school performance. A ticket stub, program, or other proof is required.' },
];

export const FAQS = [
    {
        q: 'Who can join Tri-M?',
        a: 'As a national honor society, Tri-M maintains standards for membership. Students who are currently enrolled in a music ensemble and/or music course at Roslyn High School and who meet the membership requirements established by the Roslyn High School Tri-M chapter are eligible to apply for membership. Candidates should demonstrate strong musicianship, academic achievement, leadership, service, and character. All applications must be submitted by the stated deadline and are subject to review and approval by the Chapter Advisor. For more information, please contact Mr. Aliano.',
    },
    {
        q: 'What are points in Tri-M? Why do I need them after I\'m inducted?',
        a: 'Tri-M points are a way of tracking your continued participation, service, and involvement in the chapter. Induction recognizes that you have met the qualifications for membership, but members are still expected to remain active and contribute to Tri-M throughout the year. Members are expected to earn at least 100 points each year in order to maintain active membership and remain in good standing, and points are especially important for students interested in becoming Tri-M officers. At the end of the year, the Chapter Advisor and current student leadership consider each member’s overall involvement when selecting students for leadership positions such as President, Vice President, Secretary, Treasurer, and Historian. A student’s point total provides one measure of how consistently that student has participated in and contributed to the chapter throughout the year—In other words, induction gets you into Tri-M; your continued participation is what keeps you an active member and helps demonstrate your readiness to take on greater leadership within the chapter.”'
    },
    {
        q: 'How do I get points?',
        a: 'Refer to the Important Info page.',
        link: { label: 'Important Info', to: '/info' },
    },
    {
        q: 'Is attendance mandatory?',
        a: 'Attendance is taken at every Tri-M meeting, and members earn service points for attending. Members are required to attend at least half of all scheduled meetings. While occasional absences due to conflicts or other commitments are understandable, excessive absences may affect a student’s eligibility for leadership positions and, in some cases, continued membership. Students who are interested in joining Tri-M but are unsure whether they can meet the attendance requirement because of other clubs, activities, or commitments should contact Mr. Aliano to discuss their situation before applying.',
    },
    {
        q: 'Does Tri-M help on college applications?',
        a: 'Yes — Tri-M is a national honor society, which shows dedication and involvement to college applications even as a regular member. Roslyn Tri-M also offers students leadership positions, which can lead to greater initiative and impact.',
    },
];
