document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("callApiButton").addEventListener("click", function () {
      // Make an API request
      fetch("https://api.example.com/data")
        .then((response) => response.json())
        .then((data) => {
          document.getElementById("apiResponse").textContent = JSON.stringify(data, null, 2);
        })
        .catch((error) => {
          console.error(error);
        });
    });
  });
  