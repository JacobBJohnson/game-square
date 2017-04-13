export class Game {
    id: string;
    name: string;
    summary: string;
    cover: {
        url: string;
        width: number;
        height: number;
    };
    rating: number;

    constructor(obj: any = {}) {
        if (obj) {
            this.id = obj.id ? obj.id : null;
            this.name = obj.name ? obj.name : null;
            this.summary = obj.summary ? obj.summary : null;
            this.cover = obj.cover ? obj.cover : { url: null, width: 0, height: 0 };            
        } else {
            this.id = null;
            this.name = null;
            this.summary = null;
            this.cover = { url: null, width: 0, height: 0 };
        }
        this.rating = Math.floor(Math.random() * 5)
    }
}