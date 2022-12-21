// Project Instructions 
// Select color input
// Select size input
// When size is submitted by the user, call makeGrid()

// Note: This project was completed 
// by using starter code and instructions
// provided by Udacity team as part of the Nanodegree project

// listener function that handles the cell's click  event
function colorGrid(event) {
    // Get the user selected color
    const colorSelected = document.getElementById('colorPicker').value;
    // check to see if the clicked element was a cell
    if(event.target.nodeName.toLowerCase() === 'td') {
        // Toggle the cell - blank or user selected color
        if(event.target.style.backgroundColor === "") {
            event.target.style.backgroundColor = colorSelected;
        }
        else{
            event.target.style.backgroundColor = '';
        }
    }
}

// listener function that handles the form submit event
function makeGrid(event) {
    event.preventDefault();
    // Get the grid size upon form submission
    const gridHeight = document.getElementById('inputHeight').value;
    const gridWidth = document.getElementById('inputWidth').value;
    //  Make a grid using the user input values
    //  First, get the parent element table 
    const tableGrid = document.querySelector('#pixelCanvas');
    // Clear the grid for every new form submission
    tableGrid.textContent="";
    // using a nested for loop to create a table based on user input
    for(let i = 0; i < gridHeight; i++){
        // create a new row
        const currRow = document.createElement('TR');
        // create columns for this row
        for(let j = 0; j < gridWidth; j++){
            const currColumn = document.createElement('TD');
            //add the columns to the corresponding row
            currRow.appendChild(currColumn);
            // adding the event listener to each cell
            // the listener function colorGrid handles the click event of each cell
            currColumn.addEventListener('click', colorGrid);
        }
        // add the row to the parent table
        tableGrid.appendChild(currRow);
    }
    
}

// Add event listener to the form with  id="sizePicker" on  event type submit
// When the event occurs, call the listener function makeGrid to handle the event
const form = document.querySelector('#sizePicker');
form.addEventListener('submit', makeGrid);


