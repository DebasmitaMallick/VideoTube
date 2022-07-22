export class VideoUploadData {
    constructor(
        public file: any,
        public title: string,
        public description: string,
        public videotype: string,
        public category: string){}

    public getTitle(){
        return this.title
    }

    public getCategory(){
        return this.category;
    }
 
}