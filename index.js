let scrolls=document.getElementById("scrolls");
let scroll_smallbox=document.getElementById("scroll_smallbox");
var a=1;
var b=25;
function scrolling(a,b) {
    for(var i=a;i<=b;i++){
        let h1=document.createElement("h1");
        h1.textContent=`Masai Student ${i}`;
        scroll_smallbox.append(h1);
    }
    debouncing();
}
scrolling(a,b);

var id;
function debouncing(){
    clearTimeout(id);
    id=setTimeout(()=>{
       a=a+25;
       b=b+25;
       scrolling(a,b)
    },5000)
}

let leftside=scrolls.scrollLeft;
let topside=scrolls.scrollTop;

let heightscroll=scrolls.scrollHeight;

let text="clientHeight: "+ scrolls.clientHeight + "px<br/>";
text+="clientWidth: "+ scrolls.clientWidth + "px<br/>"; 
//document.getElementById("demo").innerHTML=text;

