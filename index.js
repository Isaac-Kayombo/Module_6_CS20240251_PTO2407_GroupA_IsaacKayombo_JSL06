// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

// Function to display menu items by category
function displayMenuItems(menu) {
    // Getting the menu container element from the HTML
    const menuContainer = document.getElementById('menu');

    // Looping through each category and its items in the menu object
    for (const [category, items] of Object.entries(menu)) {

        // CREATING h3 ELEMENT FOR EACH CATEGORY.
        const categoryTitle = document.createElement('h3');
        categoryTitle.textContent = category;
        menuContainer.appendChild(categoryTitle); // APPENDING categoryTitle TO MENU CONTAINER.

        // CREATING LIST ELEMENT FOR ITEMS IN THE CATEGORY.
        const categoryList = document.createElement('ul');

        // LOOPING THROUGH THE ITEMS IN THE CATEGORY TO CREATE LIST ITEMS.
        items.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item;

            // ATTACHING EVENT LISTENER TO LIST ITEM TO ADD TO ORDER.
            listItem.addEventListener('click', () => {

            });

            // APPENDING LIST ITEM TO CATEGORY LIST.
            categoryList.appendChild(listItem);
        });

        // APPENDING LIST TO MENU CONTAINER.
        menuContainer.appendChild(categoryList);
    }            
}

// Callback function for adding an item to the order
function addToOrder(itemName) {
    // GETTING REFERENCES FOR ORDER ITEMS AND ORDER TOTAL IN HTML.
    const orderItemList = document.getElementById('order-items');
    const orderTotalElem = document.getElementById('order-total');
    // Get the order items list and the order total element from the HTML

    // Create a list item for the order

    // Set the text content of the list item to the item name

    // Append the list item to the order items list

    // Calculate and update the total price

    // Update the text content of the order total element with the new total
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
}

// Start the menu system by calling the init function
initMenuSystem(menu);
