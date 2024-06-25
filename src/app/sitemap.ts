import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://karpoff.pro',
            lastModified: new Date(),
        },
        {
            url: 'https://karpoff.pro/cv',
            lastModified: new Date(),
        },
    ];
}