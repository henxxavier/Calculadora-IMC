export const modal = {
  
    wrapper: document.querySelector(".modal-wrapper"),   
    buttonClose: document.querySelector(".close"),
    message: document.querySelector("span"),
  
    open() {
      modal.wrapper.classList.add("open");
    },
  
    close() {
      modal.wrapper.classList.remove("open");
    },
  };

  modal.buttonClose.onclick = () => modal.close()

  window.addEventListener('keydown', event => {
    if(event.key === 'Escape') {
        modal.close()
    }
  });