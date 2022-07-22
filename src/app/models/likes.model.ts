// import { dislikes } from "./dislikes.model";
export class likes{
    // Dislike = new dislikes();
    likes: {
        id: number;
        username: string;
        commentId: number;
        videoId: number
    }[] = [
        {
            id: 2,
            username: 'Debz',
            commentId: 1,
            videoId: 0
        },
        {
            id: 1,
            username: 'Debz',
            commentId: 0,
            videoId: 1
        }
    ];

    videoIsLiked(username: string, videoId: number){
        for(var i=0; i<this.likes.length; i++){
            if(this.likes[i].username === username && this.likes[i].videoId === videoId){
                return true;
            }
        }
        return false;
    }
    commentIsLiked(username: string,commentId: number){
        for(var i=0; i<this.likes.length; i++){
            if(this.likes[i].username === username && this.likes[i].commentId === commentId){
                return true;
            }
        }
        return false;
    }

    videoLikesCount(videoId: number){
        let c = 0;
        for(var i=0; i<this.likes.length; i++){
            if(this.likes[i].videoId === videoId){
                c++;
            }
        }
        return c;
    }

    commentLikesCount(commentId: number){
        let c = 0;
        for(var i=0; i<this.likes.length; i++){
            if(this.likes[i].commentId === commentId){
                c++;
            }
        }
        return c;
    }

    postLike(data: {
        id: number;
        username: string;
        commentId: number;
        videoId: number
    }){
        this.likes.unshift(data);
        // this.Dislike.undislike(data.username, data.commentId, data.videoId);
    }

    unLike(username: string,commentId: number, videoId: number){
        for(var i=0; i<this.likes.length; i++){
            if(this.likes[i].username === username && this.likes[i].commentId === commentId && this.likes[i].videoId === videoId){
                this.likes.splice(i,1);
                return;
            }
        }
    }
}