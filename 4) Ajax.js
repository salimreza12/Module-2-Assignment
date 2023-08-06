/*


4) Ajax


Instructions: 


Use this api = https://jsonplaceholder.typicode.com/posts


Print or console.log all data using fetch()
*/




//html code
  <h1>Posts Data</h1>
    <div id="postsContainer"></div>



//javascript code
   // Output the data to the console
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log('Error:', error);
  });


  
  // Output the data to the display
const postsContainer = document.getElementById("postsContainer");

// Fetch the data from the API
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => {
        // Loop through the data and display each post
        data.forEach(post => {
            const postElement = document.createElement("div");
            postElement.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.body}</p>
                <hr>
            `;
            postsContainer.appendChild(postElement);
        });
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });
