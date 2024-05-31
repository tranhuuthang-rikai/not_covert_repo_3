const URL_GENERATOR_TOKEN = "https://d2jtrui7bbhww8.cloudfront.net/generate-token/test";

function fetchToken() {
  return new Promise((resolve, reject) => {
    fetch(URL_GENERATOR_TOKEN)
      .then((response) => response.json())
      .then((data) => {
        const token = data.data;
        localStorage.setItem('rocket-page-token', token); // Save token to localStorage
        resolve(token);
      })
      .catch((error) => {
        console.error("Error fetching token:", error);
        reject(error);
      });
  });
}

// Fetch the token and store it in localStorage
fetchToken()
  .then(() => {
    console.log("Token fetched and stored successfully.");
  })
  .catch((error) => {
    console.error("An error occurred while fetching the token:", error);
  });