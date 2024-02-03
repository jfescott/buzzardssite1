//callAPI();

function callAPI() 
{
    // Define the API URL
    const apiUrl = 'https://drxae4km38.execute-api.us-east-1.amazonaws.com/dev/pets/1';

    // Make a GET request
    fetch(apiUrl)
    .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
    })
    .then(data => {
    console.log(data);
    })
    .catch(error => {
    console.error('Error:', error);
    });

}