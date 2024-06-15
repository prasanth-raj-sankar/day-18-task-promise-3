async function result() {
    try {
        var year = 2024; // Set the year
        var countryCode = 'AT'; // Set the country code
        var data = await fetch(`https://date.nager.at/api/v3/publicholidays/${year}/${countryCode}`);
        var res = await data.json();
        console.log(res);

        var tableContainer = document.getElementById('tableContainer');

        // Clear existing table if any
        tableContainer.innerHTML = "";

        // Create table element
        var table = document.createElement('table');
        table.className = 'table';

        // Create table header
        var thead = document.createElement('thead');
        thead.innerHTML = `
            <tr>
                <th scope="col">Date</th>
                <th scope="col">Local Name</th>
                <th scope="col">Name</th>
                <th scope="col">country Code</th>
                <th scope="col">types</th>
            </tr>
        `;
        table.appendChild(thead);

        // Create table body
        var tbody = document.createElement('tbody');

        // Iterate over the fetched data and populate table rows
        res.forEach(item => {
            var row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.date}</td>
                <td>${item.localName}</td>
                <td>${item.name}</td>
                <td>${item.countryCode}</td>
                <td>${item.types}</td>
            `;
            tbody.appendChild(row);
        });

        table.appendChild(tbody);

        // Append table to container
        tableContainer.appendChild(table);

    } catch (error) {
        console.log(error);
    }
}

// Call the result function to fetch and display data
result();
