let div = document.getElementById("videodiv");


//! Show/Display Videos on Homepage
async function display(){
    let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=youtuber%20video&key=AIzaSyAxG--_HGPJlv0O3gNPXjywxf7fxCcsLPg&maxResults=20`);
    let data = await res.json();
    
    console.log(data);
    for({id:{videoId}}of data.items){
        let videodiv= document.createElement("iframe")
        videodiv.setAttribute("class","mons")
        videodiv.src = `https://www.youtube.com/embed/${videoId}`;
        videodiv.allow = 'fullscreen'
        div.append(videodiv)
    }
}
display();



//! Search When Something is typed in the search-box

async function searchVideos(){
    document.getElementById("videodiv").innerHTML="";
    let query = document.getElementById("video").value;

    let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${query}&type=video&key=AIzaSyAxG--_HGPJlv0O3gNPXjywxf7fxCcsLPg&maxResults=20`);
    let data = await res.json();

    for({id:{videoId}}of data.items){
        let videodiv= document.createElement("iframe")
        videodiv.setAttribute("class","mons")
        videodiv.src = `https://www.youtube.com/embed/${videoId}`;
        videodiv.allow = 'fullscreen'
        div.append(videodiv)
    }
}

// function Home(){
//     document.getElementById("video").textContent = "";
// }