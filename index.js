const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearBtn = document.getElementById('clear');

function init() {
    itemForm.addEventListener('submit', onAddItemSubmit);
    itemList.addEventListener('click', onClickItem);
    clearBtn.addEventListener('click', clearItems);
    document.addEventListener('DOMContentLoaded', displayItems);
  
    checkUI();
  }

  function onAddItemSubmit(e) {
    e.preventDefault();
    
    const newItem = itemInput.value.trim();
    if (newItem === '') {
        alert('Please add an item');
        return;
    }

    addItemToDOM(newItem);
    addItemToLocalStorage(newItem);

    itemInput.value = '';
    checkUI();
}

function addItemToDOM(item) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item));
    const button = document.createElement('button');
    button.className = 'remove-item btn-link text-red';
    button.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    li.appendChild(button);
    itemList.appendChild(li);
}

function addItemToLocalStorage(item) {
    const items = getItemsFromLocalStorage();
    items.push(item);
    localStorage.setItem('items', JSON.stringify(items));
}

function getItemsFromLocalStorage() {
    let items;
    if (localStorage.getItem('items') === null) {
        items = [];
    } else {
        items = JSON.parse(localStorage.getItem('items'));
    }
    return items;
}

function onClickItem(e) {
    if (e.target.parentElement.classList.contains('remove-item')) {
        removeItem(e.target.parentElement.parentElement);
    }
}

function removeItem(item) {
    if (confirm('Are you sure?')) {
        item.remove();
        removeItemFromLocalStorage(item.textContent.trim());
        checkUI();
    }
}

function removeItemFromLocalStorage(item) {
    let items = getItemsFromLocalStorage();
    items = items.filter(i => i !== item);
    localStorage.setItem('items', JSON.stringify(items));
}

function clearItems() {
    while (itemList.firstChild) {
        itemList.removeChild(itemList.firstChild);
    }
    localStorage.removeItem('items');
    checkUI();
}

function displayItems() {
    const items = getItemsFromLocalStorage();
    items.forEach(item => addItemToDOM(item));
}

function checkUI() {
    itemInput.value = '';

    const items = itemList.querySelectorAll('li');
    clearBtn.style.display = items.length === 0 ? 'none' : 'block';
}
  
  init();