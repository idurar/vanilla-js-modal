

function outsideClick() {
  console.log("outsideClickHandler");
  if (event.target.closest('.modal-inner')){
    return;
  }
  const modalVisible = document.querySelector('.modal-visible');
  if (modalVisible){
    
    closeModal();
  }  
}
function escKey() {
  console.log("escKeyHandler");
  if (event.keyCode == 27) {
    closeModal(); 
  }
}

function closeClick() {
  console.log("closeClickHandler");
  if (event.target.classList.contains('closeModal')) { // Step 3
    
    closeModal();
  }
  else {
    return; 
  }
}

const closeModal = function () {
  const vanillaModal = document.querySelector('.vanilla-modal');
  if(vanillaModal){
    vanillaModal.classList.remove("modal-visible")
    document.getElementById("modal-content").innerHTML="";
  }

  document.removeEventListener("keydown", escKey);
  document.removeEventListener("click", outsideClick,true);
  document.removeEventListener('click',closeClick, false);
}



const outsideClickHandler = function () {   
   document.addEventListener("click", outsideClick,true);   
}

const escKeyHandler = function () {
  document.addEventListener("keydown",escKey);    
}

const closeClickHandler = function () {
  document.getElementById('modal-content').addEventListener('click',closeClick, false);
}

const modal =  {
    
    open : function (idContent,filter=["default"]) {
      
      const vanillaModal = document.querySelector('.vanilla-modal');
      if(vanillaModal){
        
        const content= document.getElementById(idContent);
        
        
        let currentModalContent= content.cloneNode(true);
        currentModalContent.classList.add("current-modal");
        currentModalContent.style="";
        document.getElementById("modal-content").appendChild(currentModalContent);
        vanillaModal.classList.add("modal-visible");
        
        escKeyHandler();
        outsideClickHandler();
        closeClickHandler();        
      }
    
    },  
   
    close : function () {
      closeModal();
    }

}

// for webpack es6 use uncomment this line  
// export default modal;
  
