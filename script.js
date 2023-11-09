// const mediaQuery = window.matchMedia("(max-width: 700px)");
// function handleTabletChange(e) {
//     console.log(e.matches);
//     if (e.matches) {
//         console.log("Media Query Matches!");
//     }
// }
// mediaQuery.addEventListener("change", handleTabletChange);
// handleTabletChange(mediaQuery);

let all = document.getElementsByTagName("*");
for (let index = 0; index < all.length; index++) {
   all[index].style.margin = "0";
   all[index].style.padding = "0";
   all[index].style.boxSizing = "bor_card-box";
    
}
let body = document.querySelector("#root");

let card = document.createElement("div");
card.style.backgroundColor="hsl(210, 46%, 95%)";
card.style.width = "100vw";
card.style.height="100vh";
card.style.backgroundSize = "cover";
card.style.display="flex";
card.style.alignItems="center";
card.style.justifyContent="center";

body.appendChild(card);

let bac1 = document.createElement("div");
bac1.style.width = "730px";
bac1.style.height = "280px";
bac1.style.borderRadius = "10px";
bac1.style.backgroundColor = "#FFF";
bac1.style.boxShadow = "1px 20px 19px 4px #DBE5ED";
bac1.style.margin = "0 auto";
card.appendChild(bac1);

let container = document.createElement("div");
container.style.display = "flex";
container.style.gap = "40px";
bac1.appendChild(container);

let img = document.createElement("div");
img.style.backgroundImage = "url(./images/rec.png)";
img.style.width = "285px";
img.style.height = "280px";
img.style.backgroundRepeat = "no-repeat";
img.style.backgroundSize ="cover";
container.appendChild(img);

let shift = document.createElement("p");
shift.style.width = "358px";
shift.style.height = "84px";
shift.textContent = `Shift the overall look and feel by adding 
these wonderful touches to 
furniture in your home`;
shift.style.color = "#49556B";
shift.style.fontSize = "20px";
shift.style.letterSpacing = "0.42px";
shift.style.lineHeight = "120%";
shift.style.fontFamily = "Manrope";
shift.style.fontWeight = "bold";
shift.style.padding = "10px 59px 0 0";
container.appendChild(shift);

let ever = document.createElement("p");
ever.textContent = `Ever been in a room and felt like something  was missing?
Perhaps it felt slightly bare and uninviting. I’ve got some 
simple tips to help ypu make any room feel complete.`;
ever.style.fontSize = "12px";
ever.style.letterSpacing="0";
ever.style.color = "#73859D";
shift.appendChild(ever);

let myname = document.createElement("div");
myname.style.display = "flex";
myname.style.width="350px";
myname.style.alignItems = "center";
myname.style.justifyContent = "star";

shift.appendChild(myname);

let imgs = document.createElement("div");
imgs.style.backgroundImage = "url(./images/mechael.jpg)";
imgs.style.width = "40px";
imgs.style.height = "40px";
imgs.style.borderRadius="50%";
imgs.style.backgroundRepeat = "no-repeat";
imgs.style.backgroundSize ="cover";
myname.appendChild(imgs);

let Michelle = document.createElement("div");
Michelle.textContent = "Michelle Appleton";
Michelle.style.fontSize = "12px";
Michelle.style.color = "#49556B";
Michelle.style.letterSpacing = "0.188px";
Michelle.style.marginLeft = "16px";
Michelle.style.fontFamily = "Inter";
myname.appendChild(Michelle);

let march = document.createElement("div");
march.textContent = "28 Jun 2020";
march.style.fontSize = "12px";
march.style.color = "#BFC3CC";
march.style.letterSpacing = "0.156px";
march.style.fontFamily = "Inter";
Michelle.appendChild(march);


let share = document.createElement("div");
share.style.backgroundImage = "url(./images/share.png)";
share.style.width = "32px";
share.style.height = "32px";
share.style.borderRadius="50%";
share.style.backgroundRepeat = "no-repeat";
share.style.backgroundSize = "cover";
share.style.marginLeft = "150px";

myname.appendChild(share);

let app=document.createElement("div");

share.appendChild(app);

let message=document.createElement("div");
message.style.width="250px";
message.style.height="60px";
message.style.borderRadius="10px";
message.style.background="#49556B";
message.style.marginTop="-85px"
message.style.marginLeft="-90px";
app.appendChild(message);

let triangle=document.createElement("div");
triangle.style.width="0";
triangle.style.height="0";
triangle.style.borderLeft="20px solid transparent";
triangle.style.borderRight="20px solid transparent";
triangle.style.borderTop="20px solid #49556B";
app.appendChild(triangle);

let union=document.createElement("div");
union.style.display="flex";
union.style.padding="20px";
union.style.gap="15px";
message.appendChild(union);

let words=document.createElement("a");
words.textContent=`SHARE`;
words.style.fontSize="15px";
words.style.color="#73859D";
words.style.letterSpacing="5px";
union.appendChild(words);

let face=document.createElement("a");
face.style.backgroundImage = "url(./images/Facebook_icon_2013.svg.png)";
face.style.width="25px";
face.style.backgroundRepeat = "no-repeat";
face.style.backgroundSize = "cover";
union.appendChild(face);

let twitter=document.createElement("a");
twitter.style.backgroundImage="url(./images/twitter.png)";
twitter.style.width="25px";
twitter.style.backgroundRepeat = "no-repeat";
twitter.style.backgroundSize = "cover";
union.appendChild(twitter);

let painters=document.createElement("a");
painters.style.backgroundImage="url(./images/pinteresa_images.png)";
painters.style.width="25px";
painters.style.backgroundRepeat = "no-repeat";
painters.style.backgroundSize = "cover";
union.appendChild(painters);

let show;
share.addEventListener("click", ()=> {
 app.style.display= show ? "none" : "block";
show=!show;
});



const mediaQuery = window.matchMedia("(max-width: 430px)");

function handleTabletChange(e) {

  if (e.matches) {
    bac1.style.maxWidth = "345px";
    bac1.style.height = "650px";

  }
  if (e.matches) {
   container.style.gap = "20px";
   container.style.display="block";
   
  }
  if (e.matches) {
    img.style.padding = `36px 25px 19px 32px`;
    img.style.borderRadius="10px 10px 0 0";
  }
  if (e.matches) {
    shift.style.fontSize = "16px";
    shift.style.fontWeight = "700";
    shift.style.lineHeight = "23.52px";
    shift.style.letterSpacing = "0.336px";
    shift.style.width = "280px";
    shift.style.marginBottom = "12px";
    shift.style.marginLeft="25px";
      }
  if (e.matches) {
     ever.style.fontSize="12.5px";
  }
  if (e.matches){
    myname.style.width="280px";
  }
  if (e.matches){
    imgs.style.width="30px";
    imgs.style.height="30px";
    imgs.style.borderRadius="50%";
  }
  if (e.matches){
    Michelle.style.fontSize="11px";
    Michelle.style.letterSpacing="0";
  }
  if (e.matches){
    share.style.marginLeft="80px";
  }
  if (e.matches){
    message.style.width="350px";
    message.style.marginTop="50px";
    message.style.marginLeft="-250px";
  }
  if (e.matches){
    triangle.style.borderLeft="0";
    triangle.style.borderRight="0";
    triangle.style.borderTop="0";
  }
  if (e.matches){
    union.style.gap="30px";
    union.style.paddingLeft="30px";
  }
}
mediaQuery.addEventListener("change", handleTabletChange);

handleTabletChange(mediaQuery);
