import { faFacebook, faLinkedin, faTelegram, faGithub, faSkype } from '@fortawesome/free-brands-svg-icons';

const contacts = {
    email: 'anton@karpoff.pro',
    web: 'https://karpoff.pro',
    social: [
        {
            'title': 'Telegram',
            'link': 'https://t.me/gagarins',
            'display': '@gagarins',
            'icon': faTelegram,
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
            'title': 'Facebook',
            'link': 'https://www.facebook.com/karpenius',
            'display': 'karpenius',
            'icon': faFacebook,
        },
    ]
};

export default contacts;
