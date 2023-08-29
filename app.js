var createimage = document.createElement("img");
createimage.setAttribute("src","https://i.pinimg.com/564x/3d/db/6c/3ddb6c426a9a02f66560c197c389d7a2.jpg")
var targetelement = document.getElementById("carousel");
targetelement.append(createimage)

var carouselimages = [
    "https://i.pinimg.com/564x/3d/db/6c/3ddb6c426a9a02f66560c197c389d7a2.jpg",
    "https://i.pinimg.com/564x/e2/0d/b8/e20db858f34e24d86e4e567580138a5a.jpg",
    
    "https://i.pinimg.com/564x/fe/da/f2/fedaf2c2f89a06468405391a26f154d8.jpg",
    "https://i.pinimg.com/564x/70/50/35/7050358d3b87ca0298b566b68fd53a9d.jpg"
]

var count = 0;

setInterval(()=>{
    if(count<carouselimages.length){
        createimage.src=carouselimages[count];
        count++
    }
    else{
        count=0;
    }
},2000)

function next(){
    count++;
    if(count>=carouselimages.length){
        count=0;
    }
    createimage.src= carouselimages[count]
}

function previous(){
    count--;
    if(count<0){
        count=carouselimages.length-1;
    }
    createimage.src= carouselimages[count]
}
