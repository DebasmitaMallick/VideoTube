export class DeleteRequest{
    delete_request:{
        id: number;
        videoId: number;
        requestedBy: string;
        requestDate: string;
        status: any;
        approvedBy: any;
        seen: number
    }[] = [
        {
            id: 1,
            videoId: 2,
            requestedBy: 'Mohit',
            requestDate: '',
            status: 1,
            approvedBy: '',
            seen: 0
        },
        {
            id: 2,
            videoId: 4,
            requestedBy: 'John',
            requestDate: '',
            status: 0,
            approvedBy: '',
            seen: 0
        }
    ]
}