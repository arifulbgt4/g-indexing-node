const { google } = require("googleapis");
const path = require("path");

// Load your service account key
const serviceAccountPath = path.join(__dirname, "service-account-key.json");

// Create JWT client for authentication
const jwtClient = new google.auth.JWT({
  keyFile: serviceAccountPath,
  scopes: ["https://www.googleapis.com/auth/indexing"], // Scope for Indexing API
});

// Initialize the Indexing API
const indexing = google.indexing({
  version: "v3",
  auth: jwtClient,
});

// Function to push a URL to the Indexing API
async function pushUrlToGoogle(url) {
  try {
    const response = await indexing.urlNotifications.publish({
      requestBody: {
        url,
        type: "URL_UPDATED", // Use 'URL_UPDATED' or 'URL_DELETED' as needed
      },
    });
    console.log(`Successfully notified Google about: ${url}`);
    console.log(response.data);
  } catch (error) {
    console.error(
      "Error notifying Google:",
      error.response?.data?.error?.message || error.message
    );
  }
}

module.exports = {
  pushUrlToGoogle,
};
