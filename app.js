let ModalCloseBtn=document.querySelector(".modal_close");
let modal=document.querySelector(".modal");



/*window.addEventListener("load" ,function() {
    modal.classList.add("active");
}); */

ModalCloseBtn.addEventListener("click", function(){
    modal.classList.remove("active");
})