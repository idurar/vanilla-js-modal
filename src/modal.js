

const closeModal = function () {
  const vanillaModal = document.querySelector('.vanilla-modal');
  if(vanillaModal){
    vanillaModal.classList.remove("modal-visible")
    vanillaModal.querySelector(".modal-content").innerHTML="";
  }
}

const outsideClickHandler = function () {
 
        document.addEventListener("click", function (event) {
        
          if (event.target.closest('.modal-inner')){
            return;
          }
          const modalVisible = document.querySelector('.modal-visible');
          if (modalVisible){
            console.log("outsideClickHandler");
            closeModal();
          }  
        },true);
   
}


const closeClickHandler = function () {
    
  document.getElementById('modal-content')
  .addEventListener('click', event => { // Step 2
    console.log(event.target)
    if (event.target.classList.contains('closeModal')) { // Step 3
      console.log('event delegate Clicked!');
      closeModal();
    }
    else {
      return;
     
    }
  }, false);
}

const modal =  {
    
    
    open : function (idContent,filter=["default"]) {
      
      const vanillaModal = document.querySelector('.vanilla-modal');
      if(vanillaModal){
        
        const content= document.getElementById(idContent);
        console.log(content);
        
        let currentModalContent= content.cloneNode(true);
        currentModalContent.classList.add("current-modal");
        currentModalContent.style="";
        vanillaModal.querySelector(".modal-content").appendChild(currentModalContent);
        vanillaModal.classList.add("modal-visible");
        console.log("modal Opened");
        setInterval(() => {
          outsideClickHandler()
        }, 300);
        closeClickHandler();  
      }
    },
   
   
    close : function () {
      closeModal();
    }

}
// for webpack es6 use uncomment this line  
// export default modal;
  
