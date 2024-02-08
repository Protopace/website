export interface Image {
    fields: {
        title: string;
        description: string;
        file: {
            url: string;
        }
    }
}

export interface Post {
    sys: {
        id: string;
        createdAt: string;
        updatedAt: string;
        locale: string;
    };
    fields: {
        title: string;
        slug: string;
        content: Object;
        excerpt: string;
        coverImage: Image;
        date: string;
        author: {
            fields: {
                name: string;
                picture: Image;
            }
        };
        categories: [{
            fields: {
                name: string;
                description: string;
            }
        }];
        seoMetadata: Object;
        siteConfig: Object;
    }
}