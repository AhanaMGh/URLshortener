

let shortenButton = document.getElementById("short"); 
let urlInput = document.getElementById("myurl");
let apiInput = document.getElementById("myapi");
let urlWarning = document.getElementById("URLWarning"); 
let urlSaved = document.getElementById("URLSaved"); 
let apiWarning = document.getElementById("apiWarning"); 
let apiSaved = document.getElementById("apiSaved"); 
let saveButton = document.getElementById("save"); 
const apiurl = new URL ("http://t.ly/api/v1/link/shorten");
let headers = {
  "Content-Type": "application/json",
  "Accept": "application/json"
}

shortenButton.addEventListener('click', () => {
  if (urlInput.value.trim() === "") {
    urlWarning.style.display = "block";
    setTimeout(() => {
      urlWarning.style.display = "none";
    }, 1500);
  } else {
    fetch(apiurl, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        "long_url": urlInput.value,
        "domain": "https://t.ly/",
        "api_token": apiInput.value
      })
    })


      .then(response => response.json())
      .then(json => {
        urlSaved.style.display = "block";
        urlSaved.textContent = json.short_url;
      })

  }
});


saveButton.addEventListener('click', () => {
  if (apiInput.value.trim() === "") {
    apiWarning.style.display = "block"; 
    setTimeout(() => {
      apiWarning.style.display = "none"; 
    }, 1500);

  } else {
    apiSaved.style.display = "block"; 
    setTimeout(() => {
      apiSaved.style.display = "none"; 
    }, 1500);
  }
});

function toggleSearch() {
  var dropdown = document.getElementById("dropdownSelect");
  var searchBar = document.getElementById("searchBar");

  var selectedOption = dropdown.value;

  if (selectedOption === "default") {
    searchBar.style.display = "none";
  } else {
    searchBar.style.display = "block";
  }
}

// Uz2CayQxGhL0XZWGF5sRybghAISfoW7uyLHu9q7BIiGyaXuiDr2h7wtyq7sH
