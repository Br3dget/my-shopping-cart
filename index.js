function init() {
    
    itemForm.addEventListener('submit', onAddItemSubmit);
    itemList.addEventListener('click', onClickItem);
    clearBtn.addEventListener('click', clearItems);
    document.addEventListener('DOMContentLoaded', displayItems);
  
    checkUI();
  }
  
  init();