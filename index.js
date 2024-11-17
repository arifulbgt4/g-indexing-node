const { pushUrlToGoogle } = require("./googleIndexing"); // Import the function

async function pushUrls(urls) {
  for (const url of urls) {
    await pushUrlToGoogle(url); // Use the imported function
  }
}

// Example batch
const urls = [
  "https://yourdomain.com/dynamic-post-1",
  "https://yourdomain.com/dynamic-post-2",
];

pushUrls(urls)
  .then(() => {
    console.log("All URLs have been processed.");
  })
  .catch((error) => {
    console.error("Error processing URLs:", error.message);
  });
