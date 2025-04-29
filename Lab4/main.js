//1 a
var tab = open("https://google.com","_blank","width=500,height=500");
if (!tab.closed) {
    console.log("Closing now");
    tab.close();
}

//1 b
var tab = open("https://google.com","_blank","width=500,height=500,top=500");
tab.document.write("Eyad Osama Ibrahim");
setTimeout(()=>{
    tab.close();
},2000)
// problem is we can't access the window (tab) after closing it because tab is no longer accessible so I used setTimeOut function

//2 a
console.log(document.images);
let img = document.querySelectorAll("img");
console.log(img);


//2 b
let city = document.getElementById("city");
for (elem of city.children){
console.log(elem.innerText);
};

//2 c
let tds = document.getElementsByTagName("td");
for (elem of tds)
console.log(elem.innerText);

//2 d
let cname = document.querySelectorAll(".fontBlue.BGrey")
console.log(cname);
for (elem of cname)
console.log(elem.innerText);

//4
setInterval(()=>{
    let dt = new Date();
    document.title = dt.toLocaleString();
},100)

//a5er so2al bta3 l form (hst5dm event listener)
function getValue(){
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    console.log({name , age});
    
}









