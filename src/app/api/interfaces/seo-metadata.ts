import { Image } from "./image";

export interface SeoMetadata {
    sys: {
        id: string;
        locale: string;
    };
    fields: {
        seoTitle : string;
        seoDescription: string;
        canonicalUrl: string;
        ogImage: Image;
        ogLocale: string;
        ogType: string;
        noIndex: boolean;
        noFollow: boolean;
    }
}
