import { Image } from "./image";

export interface Author {
    sys: {
        id: string;
        createdAt: string;
        updatedAt: string;
        locale: string;
    };
    fields: {
        name: string;
        picture: Image;
    };
}