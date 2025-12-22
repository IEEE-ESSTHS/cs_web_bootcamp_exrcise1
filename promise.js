fetch('https://api.example.com/data')
  .then(response => {
    console.log('Got response!');
    return response.json();
  })
  .then(data => {
    console.log('Got data:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });