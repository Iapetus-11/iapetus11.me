export type ResumeItemDefinition = {
    dateRange: [Date, Date | null];
    company: string;
    title: string;
    bullets: string[];
    skills: string[];
};

export const RESUME_ITEMS: ResumeItemDefinition[] = [
    {
        dateRange: [new Date(2025, 1, 1), null],
        company: 'MedShift',
        title: 'Senior Software Engineer I',
        bullets: [
            'Planned and led projects across two teams, ensuring timely success to meet customer expectations',
            'Met with B2B customers to determine project requirements and communicate updates',
            'Responsible for onboarding new engineers, as well as mentoring interns and peers across multiple teams',
            'Continued working on various projects, both internal and external',
        ],
        skills: [
            'Django',
            'Django Rest Framework',
            'Vue',
            'JavaScript',
            'TypeScript',
            'Tailwind CSS',
            'Auth0',
            'Stripe',
            'BigCommerce',
            'Docusign',
            'Cloudflare',
            'Project Management',
            'Customer Communication',
            'Project Architecting',
        ],
    },
    {
        dateRange: [new Date(2022, 8, 6), new Date(2025, 1, 1)],
        company: 'MedShift',
        title: 'Full-Stack Software Engineer',
        bullets: [
            'Programmed a cross-platform app & website to help sales reps acquire leases for medical device deals, backed by $400 million',
            'Developed scalable solutions for collecting and displaying IoT data from various IoT offerings for different customers',
            'Mentored coworkers and superiors, helping them with tasks & peer programming as well as offering assistance after-hours',
            'Developed novel software solutions integrating with Oracle Financial Cloud & Stripe processing millions of dollars',
            'Programmed a SaaS solution for facilitating a pay-per-use model based on IoT data from medical devices',
            'Helped my team learn/migrate to more robust technologies (Cloudflare, TypeScript, Ruff Linter)',
            'While on-call, assisted with after-hours emergencies ensuring our products remained stable for customers',
        ],
        skills: [
            'Django',
            'Django Rest Framework',
            'Vue',
            'JavaScript',
            'TypeScript',
            'Tailwind CSS',
            'Auth0',
            'Stripe',
            'Pipedrive',
            'Docusign',
            'Cloudflare',
            'Photo Editing',
        ],
    },
    {
        dateRange: [new Date(2019, 9, 1), null],
        company: 'Self-Employed',
        title: 'Freelance Software Engineer',
        bullets: [
            'Took commissioned programming work from a variety of small businesses and invididuals',
            'Wrote several social media bots for a few platforms including Twitter, Discord, and Reddit',
            'Developed several web scrapers and data aggregation utilities (usually into Google Sheets)',
            'Engineered a PoC for collecting data from a distributed network of Arduino ESP32s and Raspberry Pis',
            'Mentored CS students, helping them understand topics from their classes',
            'Undertook graphic design and even hiring/candidate-vetting responsibilities',
        ],
        skills: [
            'Python',
            'JavaScript',
            'HTML',
            'Twitter API',
            'Discord API',
            'Reddit API',
            'Web Scraping',
            'FastAPI',
            'Stripe',
            'Selenium',
            'Google Sheets',
            'MQTT',
            'Graphic Design',
            'Hiring Consultant',
        ],
    },
];
