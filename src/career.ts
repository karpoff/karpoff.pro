export const career = [
    {
        key: 'st',
        period: 'Aug 2020 - ...',
        company: {
            name: 'ServiceTitan',
            url: 'https://www.servicetitan.com/',
            logo: '/companies/st.png',
        },
        position: 'staff software developer',
        description: 'Home and Commercial Services Management Software',
        technologies: 'javascript, react, typescript',
        roles: [
            'FrontEnd developer in product teams (react)',
            'Core FrontEnd developer (common tools for FE)'
        ],
        achievements: [
            'improved FE skills: react, mobx',
            'micro-frontend experience, created CI/CD flow for micro-frontends that allows to release them safely',
            'improved skills with app/micro-frontend bundling (webpack)',
            'improved self-management skills'
        ],
    },

    {
        key: 'tinkoff',
        period: 'June 2017 — August 2020',
        company: {
            name: 'Tinkoff',
            url: 'https://www.tinkoff.ru',
            logo: '/companies/tinkoff.png',
        },
        position: 'senior software developer, engineering manager',
        description: 'Tinkoff - Website builder. Tinkoff - CRM. creating internal admin system',
        technologies: 'javascript, angular, node, postgres, python, react',
        roles: [
            'FrontEnd developer (angular, ngrx, node.js)',
            'BackEnd developer (node.js, express, postgres, redis, bull.js)',
            'System architect',
            'Engineering manager',
            'Technical Project Manager'
        ],
        achievements: [
            'angular skills (ngrx, rxjs, angular builders etc)',
            'highly improved lead skills',
            'got lots of positive experience in engineering and project management',
            'the architecture of a distributed system with lots of services, async queues etc.'
        ],
    },

    {
        key: 'artezio',
        period: 'Feb 2014 — June 2017',
        company: {
            name: 'Artezio',
            url: 'https://www.artezio.ru',
            logo: '/companies/artezio.png',
        },
        position: 'software developer, development lead',
        description: 'web-scrapping project, mobile applications creation, project management',
        roles: [
            'Python developer',
            'Team lead',
            'Project management',
            'FrontEnd developer',
            'React Native developer'
        ],
        achievements: [
            'python skills',
            'experience in working with distributed applications',
            'react/react native skills',
            'team lead skills',
            'engineering management skills'
        ],
    },

    {
        key: 'ultima',
        period: 'Nov 2012 — Feb 2014',
        company: {
            name: 'Ultima BusinessWare',
            url: 'https://www.ultimatebusinessware.ru/',
            logo: '/companies/ultima.png'
        },
        position: 'software developer',
        description: 'e-commerce websites development. ERP maintenance',
        roles: [
            'Fullstack web developer (php + js)',
            'ERP maintance and configuration (C#, VBScript)'
        ],
        achievements: [],
    },

    {
        key: 'mera',
        period: 'Aug 2006 — Nov 2012',
        company: {
            name: 'MERA',
            url: 'https://www.mera.com/',
            logo: '/companies/mera.png'
        },
        position: 'software developer',
        description: 'development of SS7 stack protocols, SIP phone support',
        roles: [
            'Developer of MTPL3-M3UA and SCTP protocol of SS7 stack',
            'SIP phone development'
        ],
        achievements: [],
    },
];

export const projects = [
    {
        key: 'armaqi',
        title: 'armaqi.org',
        href: 'https://armaqi.org',
        description: 'Non-commercial project to monitor air quality in Armenia.',
        what: ['Website implementation (next.js with vercel)', 'Maintenance and adding new features'],

        live: 'https://armaqi.org',
        code: 'https://github.com/armaqi-org/armaqi.org',

        technologies: ['next.js', 'React', 'TS'],
    },
    {
        key: 'tinkoff',
        title: 'Tinkoff website builder',
        href: 'https://www.tinkoff.ru/business/website-builder/',
        description: 'No-code website builder for the customers of the biggest online bank in Russia.',
        what: ['System architecture', 'Engineering management', 'Team leadership', 'Fullstack development', 'Technical project management'],

        technologies: ['PM', 'Angular', 'node.js', 'TPM'],
    },
    {
        key: 'st',
        title: 'ServiceTitan',
        href: 'https://www.servicetitan.com/',
        description: 'Home and Commercial Software for the Trades.',
        what: ['FrontEnd development', 'Platform development'],

        technologies: ['React', 'TS'],
    },
];

export const education = [
    {
        key: 'nstu',
        title: 'Niznhy Novgorod State Technical University',
        period: '2003-2009',
        speciality: 'Network and Switching systems',
        degree: 'Bachelor+'
    }
];