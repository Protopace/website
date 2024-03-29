export interface Image {
    fields: {
        title: string;
        description: string;
        file: {
            url: string;
            details: {
                image: {
                    width: number;
                    height: number;
                }
            }
        }
    }
}