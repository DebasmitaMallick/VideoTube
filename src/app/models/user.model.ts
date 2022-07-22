export class User {

    userId: number;
    details: {
        id: any;
        firstName: string;
        lastName: string;
        username: string;
        email: string;
        password: string;
        signUpDate: string;
        profilePic: string;
        role: string;
        number: string
    }[] = [];
    deleteRequest: any;
    
    userDetails: {
        id: any;
        firstName: string;
        lastName: string;
        username: string;
        email: string;
        password: string;
        signUpDate: string;
        profilePic: string;
        role: string;
        number: string
    } [] = [
            {
                id: 2,
                firstName: 'User',
                lastName: 'Two',
                username: 'John',
                email: 'john@gmail.com',
                password: 'secret',
                signUpDate: 'January 22nd, 2022',
                profilePic: '',
                role: 'admin',
                number: '9830243214'
            },
            {
                id: 1,
                firstName: 'User',
                lastName: 'One',
                username: 'Mohit',
                email: 'mohit@gmail.com',
                password: 'secret',
                signUpDate: 'January 22nd, 2022',
                profilePic: '',
                role: 'admin',
                number: '9830243214'
            },
            {
                id: 0,
                firstName: 'Debasmita',
                lastName: 'Mallick',
                username: 'Debz',
                email: 'debasmita@gmail.com',
                password: 'secret',
                signUpDate: 'January 22nd, 2022',
                profilePic: '',
                role: 'admin',
                number: '9830243214'
            }
    ];
    constructor(userId: any){
        this.userId = userId;
        this.getUserDetails();
    }
    getUserDetails(){
        this.details = [];
        if(this.userId === null){
            this.details[0] = {
                id: null,
                firstName: '',
                lastName: '',
                username: '',
                email: '',
                password: '',
                signUpDate: '',
                profilePic: '',
                role: 'Admin',
                number: ''
            };
            return;
        }
        for (let i=0; i<this.userDetails.length; i++){
            if(this.userDetails[i].id === this.userId){
                this.details[0] = this.userDetails[i];
                break;
            }
        }
        return this.details;
    }

    DeleteRequest(){
        this.deleteRequest = {
            1 : {
                videoId : '235',
                requestedBy : 'Andrew',
                requestDate : '2022-04-02 09:39:46',
                status: null,
                approvedBy: 'Sandy',
                seen: 0
            },
            2 : {
                videoId : '235',
                requestedBy : 'Andrew',
                requestDate : '2022-04-02 09:39:46',
                status: null,
                approvedBy: 'Sandy',
                seen: 0
            },
            3 : {
                videoId : '235',
                requestedBy : 'Andrew',
                requestDate : '2022-04-02 09:39:46',
                status: null,
                approvedBy: 'Sandy',
                seen: 0
            },
        }
        return this.details;
    }

    

    updateUserDetails(fname: string, lname: string, email: string){
        for (let i=0; i<this.userDetails.length; i++){
            if(this.userDetails[i].id === this.userId){
                this.userDetails[i].firstName = fname;
                this.userDetails[i].lastName = lname;
                this.userDetails[i].email = email;
                break;
            }
        }
        alert('Update Successful');
    }

    updateUserPassword(newPass: string){
        for (let i=0; i<this.userDetails.length; i++){
            if(this.userDetails[i].id === this.userId){
                this.userDetails[i].password = newPass;
                break;
            }
        }
        alert('Update Successful');
    }

    
}