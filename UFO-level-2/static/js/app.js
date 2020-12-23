// from data.js
var tableData = data;

console.log(tableData);

// Get a reference to the table body
var tbody = d3.select("tbody");

// Loop through and use d3 to append one table row `tr` for each UFO report object
tableData.forEach(function(ufoReport) {
    console.log(ufoReport);
    var row = tbody.append("tr");

// Use 'Object.entries' to console.log each UFO report value
    Object.entries(ufoReport).forEach(function([key, value]){
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});

// Select the button 
// Use the `on` function in d3 to attach an event to the handler function
var button = d3.select("#filter-btn");
button.on("click", function() {

    tbody.html("");

    // Select the input date to get the raw HTML nodes
    var inputElement = d3.select("#datetime");

    // Get the value property of the input value
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    // Filter data with multiple filters (date, city, state, country, shape)
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue||
                                                    sighting.city === inputValue ||
                                                    sighting.state === inputValue ||
                                                    sighting.country === inputValue ||
                                                    sighting.shape === inputValue);
   
    console.log(filteredData);

    filteredData.forEach(function(selections) {

    console.log(selections);

    // Append one table row `tr` for each UFO report object
    var row = tbody.append("tr");

    // Use `Object.entries` to console.log each UFO report value
    Object.entries(selections).forEach(function([key, value]) {
        console.log(key, value);
        
        // Append a cell to the row for each value
        var cell = row.append("td");
        cell.text(value);
    });
});
});
