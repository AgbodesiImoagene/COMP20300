let table = document.querySelector("#table");

// 1. Create a new  XMLHttpRequest  object
let xhr = new XMLHttpRequest();
// 2. GET the JSON file (must be specified)
let file = "json/colorData.json";
xhr.open('GET', file, true);
// 3. Send the request over the network
xhr.send();
// 4. This will be called after the response is received
xhr.onload = function() {
    if (xhr.status != 200) { // analyze HTTP status of the response
        alert(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
    } else { // show the result
        let parsedObj = JSON.parse(xhr.responseText);
        // This function is defined below and deals with the JSON data parsed from the file.
        put_your_code_in_this_function(parsedObj);
    }
};

function put_your_code_in_this_function(parsedObj){
    for (const key of Object.keys(parsedObj)) {
        if (parsedObj[key].constructor === Array) {
            let cap = document.createElement("caption");
            let tableName = document.createTextNode(key.toString());
            cap.appendChild(tableName);
            table.appendChild(cap);

            constructTable(parsedObj[key]);
        }
    }
    // parsedObj.name-within-JSON-for-values-you-want-to-access
}

function constructTable(arr) {
    if (arr.length >= 1) {
        list = [];
        for (const key of Object.keys(arr[0])) {
            list.push(key.toString());
        }
        addHeaders(list);
        addData(arr, list);
    }
}

function addHeaders(names) {
    let headers = document.createElement("tr");
    for (let i = 0; i < names.length; i++) {
        let header = document.createElement("th");
        let headerName = document.createTextNode(names[i]);
        header.appendChild(headerName);
        headers.appendChild(header);
    }
    table.appendChild(headers);
}

function addData(arr, names) {
    for (let i = 0; i < arr.length; i++) {
        let row = document.createElement("tr");
        for (let j = 0; j < names.length; j++) {
            let tableElement = document.createElement("td");
            let data = document.createTextNode(arr[i][names[j]].toString());
            tableElement.appendChild(data);
            row.appendChild(tableElement);
        }
        table.appendChild(row);
    }
}