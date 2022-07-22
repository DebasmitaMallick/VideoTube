export class Video{
    videoList: {
        id: number; 
        uploadedBy: string; 
        title: string; 
        description: string; 
        privacy: number; 
        filePath: string; 
        category: string; 
        uploadDate: string; 
        views: number; 
        duration: string}[] = [
        {
            id: 1,
            uploadedBy: 'Debz',
            title: 'Politics',
            description: 'Politics',
            privacy: 1,
            filePath: 'assets/videos/politics.mp4',
            category: 'Politics',
            uploadDate: 'jan 24th 2022',
            views: 22,
            duration: '00:38'
        },
        {
            id: 2,
            uploadedBy: 'Mohit',
            title: 'Social',
            description: 'Social',
            privacy: 1,
            filePath: 'assets/videos/social.mp4',
            category: 'Social',
            uploadDate: 'jan 24th 2022',
            views: 22,
            duration: '00:38'
        },
        {
            id: 3,
            uploadedBy: 'Debz',
            title: 'Business',
            description: 'Business',
            privacy: 1,
            filePath: 'assets/videos/business.mp4',
            category: 'Business',
            uploadDate: 'jan 24th 2022',
            views: 22,
            duration: '00:38'
        },
        {
            id: 4,
            uploadedBy: 'John',
            title: 'Social',
            description: 'Social',
            privacy: 1,
            filePath: 'assets/videos/rabindraSarobar.mp4',
            category: 'Social',
            uploadDate: 'jan 24th 2022',
            views: 22,
            duration: '00:38'
        }
    ];
    videoIdx!: number;

    constructor(videoId: number){

        for(let i=0; i<this.videoList.length; i++){
            if(this.videoList[i].id == videoId){
                this.videoIdx = i;
                break;
            }
        }
    }

    getVideoTitle(){
        return this.videoList[this.videoIdx].title;
    }

    getViews(){
        return this.videoList[this.videoIdx].views;
    }

    getUploader(){
        return this.videoList[this.videoIdx].uploadedBy;
    }

    getUploadDate(){
        return this.videoList[this.videoIdx].uploadDate;
    }

    getVideoDescription(){
        return this.videoList[this.videoIdx].description;
    }

    getVideoItem(){
        return this.videoList[this.videoIdx];
    }

}