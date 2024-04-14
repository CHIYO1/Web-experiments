var imglist=[
    "轮播图片/love1.jpg",
    "轮播图片/love2.jpg",
    "轮播图片/love3.jpg",
    "轮播图片/love4.jpg",
    "轮播图片/love5.jpg"
];

var cur_index=0;



function start(){
    if (typeof slideshowInterval === 'undefined') {
        slideshowInterval = setInterval(next, 200);
    }
}

function end(){
    clearInterval(slideshowInterval);
    slideshowInterval = undefined;
}

function next(){
    cur_index++;
    cur_index%=5;
    var image=document.getElementById("img2");
    image.setAttribute("src",imglist[cur_index]);
}