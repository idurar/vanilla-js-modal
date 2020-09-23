
function outsideClick() {
  if (event.target.closest('.modal-inner')){
    return;
  }
  const modalVisible = document.querySelector('.modal-visible');
  if (modalVisible){
    closeModal();
  }  
}
function escKey() {
  if (event.keyCode == 27) {
    closeModal(); 
  }
}

function closeClick() {
  if (event.target.classList.contains('closeModal')) {
    closeModal();
  }
  else return; 

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


const modal =  {
    
    open : function (idContent) {
      
      const vanillaModal = document.querySelector('.vanilla-modal');
        if(vanillaModal){
          const content= document.getElementById(idContent);
          let currentModalContent= content.cloneNode(true);
          currentModalContent.classList.add("current-modal");
          currentModalContent.style="";
          document.getElementById("modal-content").appendChild(currentModalContent);
          vanillaModal.classList.add("modal-visible");
          
          document.addEventListener("click", outsideClick,true);   
          document.addEventListener("keydown",escKey);
          document.getElementById('modal-content').addEventListener('click',closeClick, false);       
        }  
    },  
   
    close : function () {
      closeModal();
    }

}

// for webpack es6 use uncomment this line  
// export default modal;
  
