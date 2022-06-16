
//Get the required button 
const buttons = document.querySelectorAll(".ButtonClicks");
console.log(buttons);
const modal_Outer = document.querySelector(".modal_outer");
const modal_Inner = document.querySelector(".modal_inner");
const nav_Outer = document.querySelector(".nav-p");

window.addEventListener("scroll", 
   
    
    
meow);
function meow(){
  nav_Outer.innerHTML=`<ul>
  <li>Home</li>
  <li>About</li>
  <li>Contact us</li>
  
  </ul>`;
  
  
  const scrollPos=window.scrollY;
  if(scrollPos >= 50){
  nav_Outer.classList.add("opens");
  } else{
    nav_Outer.classList.remove("opens");
  }
  
}
console.log(modal_Inner);

///Add an eventlistener to the button.

buttons.forEach((button) => {
    button.addEventListener("click", handlerButton);
    
    });



//Create the functions here for the button clicked
function handlerButton(e){
    console.log("Halleluyah hey");
    const butt=e.currentTarget;
    console.log(butt);
    const card=butt.closest(".card");//GO up through the DOM tree to see the class of mr card;
    const imgSrc=card.querySelector("img").src//Mr card now get the image src of the current image
    //Getting the description from the dataset;
    const desc = card.dataset.description;
    console.log(desc);
    modal_Inner.innerHTML=`<img src="${imgSrc.replace(200,500)}" width="500px" height="500px" >
    <p>${desc}</p>
    `;
    modal_Outer.classList.add("open");
}




//Create function for the modal outer and the inner 
function closeModel(){
    modal_Outer.classList.remove("open");
}

modal_Outer.addEventListener("click", (e)=>{
  //console.log(e.target.closest(".modal_inner"));//The closest to the parent element modal_Outer
//The reason we do the above is because of clarity to  listen to the event carefully so good 
const isOutside = !(e.target.closest(".modal_inner"));
//well i turned it to boolean to serve my purpose 
if(isOutside){
     //Since the above return false so whenever we click outside the modal  it cancels the 
   closeModel();
    }

}

);

//Quick cancel for the user to escape
window.addEventListener("keydown",(e)=>{
  if(e.key.includes("Home")){
    
    e.preventDefault();
    console.log(e.key);
    closeModel();
  }
})