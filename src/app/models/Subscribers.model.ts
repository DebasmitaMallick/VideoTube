export class Subscribers{
    subscribers: { id: number; userTo: string; userFrom: string; }[] = [
        {
          id: 4,
          userTo: 'superAdmin',
          userFrom:'userOne'
        },
        {
          id: 3,
          userTo: 'userThree',
          userFrom:'userTwo'
        },
        {
          id: 2,
          userTo: 'userTwo',
          userFrom:'userOne'
        },
        {
          id: 1,
          userTo: 'userTwo',
          userFrom:'userThree'
        }
    ];

    isSubscribed(userFrom: string, userTo: string){
        for (var i=0; i<this.subscribers.length; i++){
            if(this.subscribers[i].userFrom === userFrom && this.subscribers[i].userTo === userTo){
                return true;
            }
        }
        return false;
    }

    subscribe(data:{id: number; userTo: string; userFrom: string;}){
        this.subscribers.unshift(data);
    }

    unsubscribe(userFrom: string, userTo: string){
        for (var i=0; i<this.subscribers.length; i++){
            if(this.subscribers[i].userFrom === userFrom && this.subscribers[i].userTo === userTo){
                this.subscribers.splice(i,1);
                return;
            }
        }
    }

    subscribersCount(userTo: string){
        let c = 0;
        for (var i=0; i<this.subscribers.length; i++){
            if(this.subscribers[i].userTo === userTo){
                c++;
            }
        }
        return c;
    }
}