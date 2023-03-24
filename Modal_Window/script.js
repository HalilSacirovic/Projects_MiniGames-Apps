const modal = document.querySelector(".modal");
const showModal = document.querySelectorAll(".show-modal");
const overlay = document.querySelector(".overlay");

const closeModal = document.querySelector(".close-modal");

console.log(showModal);

for(let i = 0 ;i < showModal.length; i++){
showModal[i].addEventListener("click",function(){
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
})


}


const closeOverlay = function(){
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

closeModal.addEventListener("click",closeOverlay);


overlay.addEventListener("click",closeOverlay);


document.addEventListener("keydown",function(event){
    if(event.key === "Escape"){
       if(!modal.classList.contains("hidden")){
        closeOverlay()
       };
    }
})

