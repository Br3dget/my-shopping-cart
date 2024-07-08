# Shopping List Application.
This is a simple website application that allows users to manage a shopping list whereaby the users can add items to the list, remove individual items, and clear the entire list. The list is stored in the browser's local storage.

## Features.
Add Items: Users can add new items to the shopping list.
Remove Items: Users can remove individual items from the list.
Clear List: Users can clear the entire shopping list.
Persistent Storage: The shopping list is stored in local storage, so it persists across page reloads.

## Technologies Used.
HTML
CSS
JavaScript

## File Structure.
Copy code
project-root/
    css/
       style.css
    Images/
       Shopping.jpg
    index.html
    index.js

## Getting Started.
## Prerequisites.
You need a modern web browser to run this application.

## Installation.
Clone the repository:
Copy code
git clone git@github.com:Br3dget/my-shopping-cart.git
cd shopping-list

Opening index.html in your browser:
Copy code
open index.html

## Usage.
Add an item:

Enter the item name in the input field.
Click the "Add To Cart" button or press Enter.
Remove an item:

Click the red "X" button next to the item you want to remove.
Clear the entire list:

Click the "Clear Cart" button.

## Code Overview.
HTML
The HTML file (index.html) provides the structure of the application, including a form for adding items, an unordered list for displaying items, and a button for clearing the list.

CSS
The CSS file (css/style.css) contains styles for the application, ensuring it looks clean and user-friendly.

JavaScript
The JavaScript file [index.js] contains the logic for the application, including functions to handle adding, removing, and clearing items, as well as storing and retrieving items from local storage.

## JavaScript Functions.
init(): Initializes the event listeners.
onAddItemSubmit(e): Prevents the default form submission behavior, validates the input, adds the item to the DOM and local storage, then clears the input field.
addItemToDOM(item): Creates a new list item and appends it to the DOM.
addItemToLocalStorage(item): Adds the item to local storage.
getItemsFromLocalStorage(): Retrieves items from local storage.
onClickItem(e): Checks if a remove button was clicked and removes the corresponding item.
removeItem(item): Removes the item from the DOM and local storage.
removeItemFromLocalStorage(item): Removes the item from local storage.
clearItems(): Clears all items from the DOM and local storage.
displayItems(): Displays items from local storage when the page loads.
checkUI(): Updates the UI based on the current state of the item list.

