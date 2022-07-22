// import { likes } from "./likes.model";
export class dislikes{
    // Likes = new likes();
    dislikes: {
        id: number;
        username: string;
        commentId: number;
        videoId: number
    }[] = [
        {
            id: 2,
            username: 'Debz',
            commentId: 2,
            videoId: 0
        },
        {
            id: 1,
            username: 'Debz',
            commentId: 0,
            videoId: 2
        }
    ];

    videoIsdisliked(username: string, videoId: number){
        for(var i=0; i<this.dislikes.length; i++){
            if(this.dislikes[i].username === username && this.dislikes[i].videoId === videoId){
                return true;
            }
        }
        return false;
    }
    commentIsdisliked(username: string,commentId: number){
        for(var i=0; i<this.dislikes.length; i++){
            if(this.dislikes[i].username === username && this.dislikes[i].commentId === commentId){
                return true;
            }
        }
        return false;
    }

    videodislikesCount(videoId: number){
        let c = 0;
        for(var i=0; i<this.dislikes.length; i++){
            if(this.dislikes[i].videoId === videoId){
                c++;
            }
        }
        return c;
    }

    commentdislikesCount(commentId: number){
        let c = 0;
        for(var i=0; i<this.dislikes.length; i++){
            if(this.dislikes[i].commentId === commentId){
                c++;
            }
        }
        return c;
    }

    postdislike(data: {
        id: number;
        username: string;
        commentId: number;
        videoId: number
    }){
        this.dislikes.unshift(data);
        //this.Likes.unLike(data.username, data.commentId, data.videoId);
    }

    undislike(username: string,commentId: number, videoId: number){
        for(var i=0; i<this.dislikes.length; i++){
            if(this.dislikes[i].username === username && this.dislikes[i].commentId === commentId && this.dislikes[i].videoId === videoId){
                this.dislikes.splice(i,1);
                return;
            }
        }
    }
}