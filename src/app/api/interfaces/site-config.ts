import { Image } from "./image";
import { SeoMetadata } from "./seo-metadata";

export interface SiteConfig {
    sys: {
        id: string;
        createdAt: string;
        updatedAt: string;
        locale: string;
    };
    fields: {
        company: string;
        name: string;
        icon: Image;
        logo: Image;
        facebookUrl: string,
        instagramUrl: string,
        linkedinUrl: string,
        youtubeUrl: string,
        twitterUrl: string,
        googleVerification: string,
        bingVerification: string,
        baiduVerification: string,
        yandexVerification: string,
        seoMetadata: SeoMetadata,
    }
}