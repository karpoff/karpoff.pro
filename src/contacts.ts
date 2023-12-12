import { faFacebook, faLinkedin, faTelegram, faGithub, faSkype } from '@fortawesome/free-brands-svg-icons';

const contacts = {
    email: 'anton@karpoff.pro',
    web: 'https://karpoff.pro',
    tg: '@gagarins',
    social: [
        {
            'title': 'Facebook',
            'link': 'https://www.facebook.com/karpenius',
            'display': 'karpenius',
            'icon': faFacebook,
        },
        {
            'title': 'Skype',
            'link': 'skype:akarpoff?userinfo',
            'display': 'akarpoff',
            'icon': faSkype,
        },
        {
            'title': 'Github',
            'link': 'https://github.com/karpoff',
            'display': '@karpoff',
            'icon': faGithub,
        },
        {
            'title': 'LinkedIn',
            'link': 'https://www.linkedin.com/in/karpoff',
            'display': '@karpoff',
            'icon': faLinkedin,
        },
        {
            'title': 'Telegram',
            'link': 'https://t.me/gagarins',
            'display': '@gagarins',
            'icon': faTelegram,
        },
    ]
};

export default contacts;
