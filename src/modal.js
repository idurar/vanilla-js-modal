
// import delegate from '../lib/delegate'



const closeModal = function () {
  const vanillaModal = document.querySelector('.vanilla-modal');
  if(vanillaModal){
    vanillaModal.classList.remove("modal-visible")
    vanillaModal.querySelector(".modal-content").innerHTML="";
    
    // if (filter.includes('default')) {
  
    // }
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
      
      // document.removeEventListener('click',  function () {}, false);  
      // else{
      //   
      // }
}


const closeClickHandler = function () {
    
  // delegate(document.body, '.modal-content .closeModal', 'click', function(e) {
  //   console.log(e.delegateTarget);
  //   closeModal();
  //   // const btnClose = e.delegateTarget;
  //   //   btnClose.addEventListener("click", function () { 
  //   //     console.log(btnClose)
  //   //     close(); 
  //   //   }, false);
  // }, false);


}

const modal =  {
    //console.log(component);
    
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
  
