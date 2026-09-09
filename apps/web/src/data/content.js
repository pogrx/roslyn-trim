export const HERO_IMG = 'https://horizons-cdn.hostinger.com/aa50e594-9507-4d6e-8611-96e42b13dafd/images-r7HzG.jpeg';
export const REHEARSAL_IMG = 'https://horizons-cdn.hostinger.com/aa50e594-9507-4d6e-8611-96e42b13dafd/tri-m_music_honor_society_logo-eY2Tu.jpg';
export const CHOIR_IMG = 'https://horizons-cdn.hostinger.com/aa50e594-9507-4d6e-8611-96e42b13dafd/43tri-mits-fCf9o.jpg';
export const SHEET_MUSIC_IMG = 'https://horizons-cdn.hostinger.com/aa50e594-9507-4d6e-8611-96e42b13dafd/1516903594498-H0Mhk.jpeg';

export function parseDate(iso) {
    const [y, m, d] = iso.split('-').map(Number);
    return new Date(y, m - 1, d);
}

export const ANNOUNCEMENTS = [
    {
        id: 1,
        date: '2026-11-06',
        title: 'Lorem ipsum',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra posuere lacus eget iaculis. Proin iaculis diam sed quam cursus feugiat ut vel arcu. Aliquam est lacus, interdum at leo a, aliquam commodo sem. Praesent lorem neque, finibus id eleifend nec, vehicula sed odio. Aliquam venenatis ornare justo, vitae mollis nisi semper ut. Aenean lorem nibh, ornare id fringilla sed, viverra nec elit. Praesent ac faucibus augue, vel ullamcorper massa. Morbi bibendum elit at mi ultricies, sit amet aliquam odio pellentesque.',
    },
    {
        id: 2,
        date: '2026-11-06',
        title: 'Lorem ipsum',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra posuere lacus eget iaculis. Proin iaculis diam sed quam cursus feugiat ut vel arcu. Aliquam est lacus, interdum at leo a, aliquam commodo sem. Praesent lorem neque, finibus id eleifend nec, vehicula sed odio. Aliquam venenatis ornare justo, vitae mollis nisi semper ut. Aenean lorem nibh, ornare id fringilla sed, viverra nec elit. Praesent ac faucibus augue, vel ullamcorper massa. Morbi bibendum elit at mi ultricies, sit amet aliquam odio pellentesque.',
    },
    {
        id: 3,
        date: '2026-11-06',
        title: 'Lorem ipsum',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra posuere lacus eget iaculis. Proin iaculis diam sed quam cursus feugiat ut vel arcu. Aliquam est lacus, interdum at leo a, aliquam commodo sem. Praesent lorem neque, finibus id eleifend nec, vehicula sed odio. Aliquam venenatis ornare justo, vitae mollis nisi semper ut. Aenean lorem nibh, ornare id fringilla sed, viverra nec elit. Praesent ac faucibus augue, vel ullamcorper massa. Morbi bibendum elit at mi ultricies, sit amet aliquam odio pellentesque.',
    },
];

export const VOLUNTEER_OPPORTUNITIES = [
    {
        id: 1,
        date: '2026-11-06',
        title: 'Lorem ipsum',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra posuere lacus eget iaculis. Proin iaculis diam sed quam cursus feugiat ut vel arcu. Aliquam est lacus, interdum at leo a, aliquam commodo sem. Praesent lorem neque, finibus id eleifend nec, vehicula sed odio. Aliquam venenatis ornare justo, vitae mollis nisi semper ut. Aenean lorem nibh, ornare id fringilla sed, viverra nec elit. Praesent ac faucibus augue, vel ullamcorper massa. Morbi bibendum elit at mi ultricies, sit amet aliquam odio pellentesque.',
    },
    {
        id: 2,
        date: '2026-11-06',
        title: 'Lorem ipsum',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra posuere lacus eget iaculis. Proin iaculis diam sed quam cursus feugiat ut vel arcu. Aliquam est lacus, interdum at leo a, aliquam commodo sem. Praesent lorem neque, finibus id eleifend nec, vehicula sed odio. Aliquam venenatis ornare justo, vitae mollis nisi semper ut. Aenean lorem nibh, ornare id fringilla sed, viverra nec elit. Praesent ac faucibus augue, vel ullamcorper massa. Morbi bibendum elit at mi ultricies, sit amet aliquam odio pellentesque.',
    },
    {
        id: 3,
        date: '2026-11-06',
        title: 'Lorem ipsum',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra posuere lacus eget iaculis. Proin iaculis diam sed quam cursus feugiat ut vel arcu. Aliquam est lacus, interdum at leo a, aliquam commodo sem. Praesent lorem neque, finibus id eleifend nec, vehicula sed odio. Aliquam venenatis ornare justo, vitae mollis nisi semper ut. Aenean lorem nibh, ornare id fringilla sed, viverra nec elit. Praesent ac faucibus augue, vel ullamcorper massa. Morbi bibendum elit at mi ultricies, sit amet aliquam odio pellentesque.',
    },
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

export const REQUIREMENTS = [
    'Enrolled in a Roslyn HS music ensemble or shows dedication to music',
    'Recommendation from music faculty member',
    'Completed application submitted by the fall deadline',
    'Minimum of 100 points per school year',
];

export const POINT_SYSTEM = [
    { area: 'Performance', pointValue: '25-100', description: 'You can perform solo or ensemble pieces at Tri-M meetings throughout the year to gain points. Performances grant 100 points in Q1, 75 in Q2, 50 in Q3, and 25 in Q4.' },
    { area: 'Fundraising', pointValue: '10 per sale', description: 'During a fundraiser (DoubleGood popcorn), 10 points can be earned for every unit sold.' },
    { area: 'Induction', pointValue: '50-100', description: 'Points can be earned by participating in or contributing to the Induction ceremony. See below.' },
];

export const FAQS = [
    {
        q: 'Who can join Tri-M?',
        a: 'Any student who shows dedication to music and/or is currently enrolled in a music class at Roslyn High School can join the Tri-M Honor Society. However, all applications must be made before the due date and reviewed by an officer.',
    },
    {
        q: 'How do I get points?',
        a: 'Refer to the Important Info page.',
        link: { label: 'Important Info', to: '/info' },
    },
    {
        q: 'Is attendance mandatory?',
        a: 'Attendance is checked at every meeting. While some absences for conflicts or other priorities are understandable, attendance is encouraged and too many absences can lead to loss of leadership eligibility or even membership.',
    },
    {
        q: 'Does Tri-M help on college applications?',
        a: 'Yes — Tri-M is a national honor society, which shows dedication and involvement to college applications even as a regular member. Roslyn Tri-M also offers students leadership positions, which can lead to greater initiative and impact.',
    },
];
