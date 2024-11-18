const container = document.querySelector('.container');
const input = document.querySelector('.add-input');
const addBtn = document.getElementById('add-btn');
const para = document.querySelector('.para');

addBtn.addEventListener("click", function() {
    // Create a new list item and a delete button
    const newListItem = document.createElement('li');
    newListItem.classList.add('list');
    newListItem.textContent = input.value;
    

    // Only proceed if input has a value
    if (input.value.trim() !== "") {
        // Create delete button for the new item
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete');
        deleteBtn.textContent = "delete";

        // Append delete button to the new list item
        newListItem.appendChild(deleteBtn);
        
        // Append the new list item to the list (ul)
        para.appendChild(newListItem);

        // Clear the input field
        input.value = "";

        // Add event listener to delete button for the newly added item
        deleteBtn.addEventListener("click", function() {
            para.removeChild(newListItem);
        });
    } else {
        alert("Please enter a task.");
    }
});

