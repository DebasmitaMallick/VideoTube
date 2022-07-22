export class VideoGridItem{
    
    private video: any
    private largeMode: any
    constructor(video: any, largeMode: any){
        this.video = video
        this.largeMode = largeMode
    }

    demo(){
        // return "<p>Hello Sample!</p>";
        // 1. Select the div element using the id property
        let sec = document.getElementById("sec");
        // 2. Create a new <p></p> element programmatically
        let p = document.createElement("p");
        // 3. Add the text content
        p.textContent = "Hello Sample!";
        // 4. Append the p element to the div element
        sec?.appendChild(p);

    }

    create(){
        let thumbnail = this.createThumbnail()
        let details = this.createDetails()
        let id = 1
        let url = "watch.php?id="+id

        return "<a href="+url+"><div class='videoGridItem'>"+thumbnail+details+"</div></a>"
    }

    createThumbnail(){
        let thumbnail = "";
        let duration = '00:30';
        return "<div class='thumbnail'><img src="+thumbnail+"><div class='duration'><span>"+duration+"</span></div</div>"
    }

    createDetails(){
        let title = ''
    }

    
    
}
























/*

public function createLargeNotifications($videos, $title, $showFilter) {
    $this->gridClass .= " large";
    $this->largeMode = true;
    return $this->createNotificationList($videos, $title, $showFilter);
}

public function createNotificationList($videos, $title, $showFilter) {

    if($videos == null) {
        $gridItems = $this->generateItems();
    }
    else {
        $gridItems = $this->generateNotificationItemsFromVideos($videos);
    }

    $header = "";

    if($title != null) {
        $header = $this->createGridHeader($title, $showFilter);
    }

    return "$header
            <div class='$this->gridClass'>
                $gridItems
            </div>";
}

public function generateNotificationItemsFromVideos($videos) {
    $elementsHtml = 
    '<form method="post"><table class="table" id="notificationTable">
        <thead>
            <tr>
                <th>Video</th>
                <th>Requested By</th>
                <th> </th>
            </tr>
        </thead>
        <tbody>';

    foreach($videos as $video) {
        $item = new VideoGridItem($video, $this->largeMode);
        $query = $this->con->prepare("SELECT * FROM delete_request WHERE videoId = :videoId");
        $videoId = $item->getVideoId();
        $query->bindParam(":videoId", $videoId);
        $query->execute();
        $row = $query->fetch(PDO::FETCH_ASSOC);
        $elementsHtml .= '<tr><td>'.$item->create().'</td><td>'.$row['requestedBy'].'</td>';
        $elementsHtml .= '<td><button style="font-size: 0.8rem;" type="submit" name="approve'.$row['id'].'" class="btn btn-primary mr-2 mt-2">Approve</button><button style="font-size: 0.8rem;" type="submit" name="reject'.$row['id'].'" class="btn mt-2">Reject</button></td></tr>';
    }
    $elementsHtml .= '</tbody></table></form>';
    return $elementsHtml;
}


VIDEO GRID ITEM--------





<form method="post"><table class="table" id="notificationTable">
    <thead>
        <tr>
            <th>Video</th>
            <th>Requested By</th>
            <th> </th>
        </tr>
    </thead>
    <tbody>







title!: string
    desciption!: string
    active!: boolean
    videoInfoList!: any

getVideos(){
        this.videoInfoList = {
            1 : {
                title : 'Politics',
                desciption : 'Politics',
                active : true
            },
            2 : {
                title : 'Politics',
                desciption : 'Politics',
                active : true
            },
            3 : {
                title : 'Politics',
                desciption : 'Politics',
                active : true
            },
            4 : {
                title : 'Politics',
                desciption : 'Politics',
                active : true
            }

        };
        return this.videoInfoList;
    }

*/