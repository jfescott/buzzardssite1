function callAPI() {

    // Define the API URL
    //const apiUrl = 'https://drxae4km38.execute-api.us-east-1.amazonaws.com/dev/pets/3';
    //const apiUrl = 'http://petstore.execute-api.us-east-1.amazonaws.com/petstore/pets/1';
    //const apiUrl = 'https://9kvkz5hswh.execute-api.us-west-2.amazonaws.com/prod/api/todos/59e207cb10e7ef8f06ae90fa221d15f7';

    const apiUrl = 'https://9kvkz5hswh.execute-api.us-west-2.amazonaws.com/prod/api/todos';

    // Make a GET request
    fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Display data in an HTML element
        apiResponse.textContent = JSON.stringify(data, null, 2);
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

//callAPI();