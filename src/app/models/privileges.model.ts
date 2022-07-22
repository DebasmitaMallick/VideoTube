export class Privileges{
    userId: number;
    roles : {
        id: number;
        userId: number;
        categoryId: any;
        upload: any;
        delete: any;
        approval: any;
        role: string
    } [] = [];

    constructor(userId: number){
        this.userId = userId;
    }
    
    privileges : {
        id: number;
        userId: number;
        categoryId: any;
        upload: any;
        delete: any;
        approval: any;
        role: string
    } [] = [
        {
            id: 1,
            userId: 1,
            categoryId: 4,
            upload: 1,
            delete: 1,
            approval: 0,
            role: 'category'
        },
        {
            id: 2,
            userId: 1,
            categoryId: 3,
            upload: 1,
            delete: 0,
            approval: 0,
            role: 'category'
        },
        // {
        //     id: 3,
        //     userId: 2,
        //     categoryId: null,
        //     upload: null,
        //     delete: null,
        //     approval: null,
        //     role: 'admin'
        // },
        {
            id: 4,
            userId: 2,
            categoryId: 4,
            upload: 1,
            delete: 1,
            approval: 0,
            role: 'category'
        },
        {
            id: 5,
            userId: 2,
            categoryId: 5,
            upload: 1,
            delete: 0,
            approval: 0,
            role: 'category'
        },
    ];

    getRoles(){
        for (let i=0; i<this.privileges.length; i++){
            if(this.privileges[i].userId === this.userId){
                
                this.roles.push(this.privileges[i]);
            }
        }
        return this.roles;
    }
}