export class Comments{
    videoId: number;
    allComments: {
        id: number;
        postedBy: string;
        videoId: number;
        responseTo: number;
        body: string;
        datePosted: string
    }[] = [
        {
            id: 4,
            postedBy: 'Debz',
            videoId: 1,
            responseTo: 3,
            body: 'ikr',
            datePosted: '3 days ago'
        },
        {
            id: 3,
            postedBy: 'Sanjana',
            videoId: 1,
            responseTo: 0,
            body: 'Nice Video',
            datePosted: '3 days ago'
        },
        {
            id: 2.2,
            postedBy: 'Farhan',
            videoId: 1,
            responseTo: 2,
            body: 'Stop',
            datePosted: 'Now'
        },
        {
            id: 2.1,
            postedBy: 'Ishika',
            videoId: 1,
            responseTo: 2,
            body: 'Hey',
            datePosted: 'Now'
        },
        {
            id: 2,
            postedBy: 'Rohit',
            videoId: 1,
            responseTo: 1,
            body: 'Hi',
            datePosted: 'Now'
        },
        {
            id: 1,
            postedBy: 'Kunal',
            videoId: 1,
            responseTo: 0,
            body: 'Hello',
            datePosted: '2 days ago'
        }
    ];
    
    Responses: {
        id: number;
            postedBy: string;
            videoId: number;
            responseTo: number;
            body: string;
            datePosted: string
      }[] = [];
    Comments: {
        id: number;
        postedBy: string;
        videoId: number;
        responseTo: number;
        body: string;
        datePosted: string
    }[] = [];

    req_Comments: {
        id: number;
        postedBy: string;
        videoId: number;
        responseTo: number;
        body: string;
        datePosted: string
    }[] = [];

    constructor(videoId: number){
        this.videoId = videoId;
        this.req_AllComments();
        this.getComments();
    }
    
    getResponses(commentId: number){
        this.Responses = [];
        // this.req_Comments = this.req_AllComments();
        for(var i=0; i<this.req_Comments.length; i++){
            if(this.req_Comments[i].responseTo === commentId){
                this.Responses.push(this.req_Comments[i]);
            }
        }
        return this.Responses;
    }

    req_AllComments(){
        this.req_Comments = [];
        for(var i=0; i<this.allComments.length; i++){
            if(this.allComments[i].videoId === this.videoId){
                this.req_Comments.push(this.allComments[i]);
            }
        }
        return this.req_Comments;
    }

    getComments(){
        // this.req_Comments = this.req_AllComments();
        this.Comments = [];
        for(var i=0; i<this.req_Comments.length; i++){
            if(this.req_Comments[i].responseTo === 0){
                this.Comments.push(this.req_Comments[i]);
            }
        }
        return this.Comments;
    }

    numberOfResponses(commentId: number){
        return this.getResponses(commentId).length;
    }

    postComment(newComment:{
      id: number;
      postedBy: string;
      videoId: number;
      responseTo: number;
      body: string;
      datePosted: string
    }){
      this.allComments.unshift(newComment);
      this.req_Comments.unshift(newComment);
      this.Comments.unshift(newComment);

    }

    demoComments = [
  
        {
          text: "1",
          comments: [
            {
              text: "1.1",
              comments: [
                {
                  text: "1.1.1 "
                }
              ]
            },
             {
              text: "1.2",
              comments: [
                {
                  text: "1.2.1"
                }
              ]
            }
          ]
        },
           {
          text: "2",
          comments: [
            {
              text: "2.1",
              comments: [
                {
                  text: "2.1.1"
                }
              ]
            }
          ]
        }
    ]

}