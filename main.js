displayFact=()=>{
    let displayFact=document.querySelector(".display-fact")
    let url="https://api.chucknorris.io/jokes/random"
    fetch(url)
        .then(response=>{
            return response.json()
        })
        .then(responseData=>{
            console.log("response",responseData)
            displayFact.innerHTML=responseData.value;
        })
}

function themeChange(){
    var elem=document.body;
    elem.classList.toggle("body.light-mode");
}
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-light');
    } else {
        setTheme('theme-dark');
    }
}

// Immediately invoked function to set the theme on initial load
(function () {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark');
        document.getElementById('slider').checked = false;
    } else {
        setTheme('theme-light');
      document.getElementById('slider').checked = true;
    }
})();