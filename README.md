fetch('https://api.example.com/data')
  .then(response => {
return response.json();
})
  .then(data => {
 console.log(data);
})
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
