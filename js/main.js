let titles = "", rd = 0, director = "", desc = "", rt = 0;
let g_data = "";

// Fetch with Async/Await from Studio Ghibli API
(async function getInfo() {
    const url = 'https://ghibliapi.herokuapp.com/films';
    let h = new Headers();
        h.append('Accept', 'application/json'); 

    let req = new Request(url, {
        method: 'GET',
        headers: h,
        mode: 'cors'
    });

    try {
        let response = await fetch(req);
        let data = await response.json();
        g_data = data;
        
        titles = data.map(e => e.title);
        rd = data.map(e => e.release_date);
        director = data.map(e => e.director);
        desc = data.map(e => e.description);
        rt = data.map(e => e.rt_score);
        
        getAllInfo();

    } catch(err) {
        // alert("HTTP req failed!");
        console.error(err);
    }
})();


// Loop through variables and display into respective HTML classes
function getAllInfo() {
    for (let i = 0; i < 20; i++) {
            document.querySelector(`.titles${i}`).innerHTML = titles[i];
            document.querySelector(`.rd${i}`).innerHTML = rd[i];
            document.querySelector(`.director${i}`).innerHTML = `Director: ${director[i]}`;
            document.querySelector(`.description${i}`).innerHTML = `${desc[i]}`;
            document.querySelector(`.rt${i}`).innerHTML = `Rating: ${rt[i]}`;
    }
}


// SEARCH FUNCTIONALITY
let inputLetters = "";
const rowSection = document.querySelector(".row");

// Save user input letters 
document.querySelector(".searchBar").addEventListener("keyup", function(e) {
    inputLetters = e.target.value.toLowerCase();  
})

// Enter key pressed event
document.querySelector(".searchBar").addEventListener("keypress", function(e) {
    if (e.keyCode == 13 || e.which) {
    
        let indexOfTitle = 0;
 
        // Convert array of titles to lowercase
        let lower_titles = []
        for (var i = 0; i < g_data.map(e => e.title).length; i++) {
            lower_titles.push(g_data.map(e => e.title)[i].toLowerCase());
        }

        // Get Index of Array and scroll to card using the index
        if (lower_titles.includes(inputLetters)) {
            indexOfTitle = lower_titles.indexOf(inputLetters);
            document.querySelector(`.card${indexOfTitle}`).scrollIntoView({ block: 'start',  behavior: 'smooth' });
        } 
    }
})

// Search Button clicked event
document.querySelector(".searchButton").addEventListener("click", function() {
    let indexOfTitle = 0;
 
    // Convert array of titles to lowercase
    let lower_titles = []
    for (var i = 0; i < g_data.map(e => e.title).length; i++) {
        lower_titles.push(g_data.map(e => e.title)[i].toLowerCase());
    }

    // Get Index of Array and scroll to card using the index
    if (lower_titles.includes(inputLetters)) {
        indexOfTitle = lower_titles.indexOf(inputLetters);
        document.querySelector(`.card${indexOfTitle}`).scrollIntoView({ block: 'start',  behavior: 'smooth' });
    } 
})


//Button Close Cards (btn-custom)
for (let i = 0; i < 20; i++) {
    document.querySelector(`.btn-custom${i}`).addEventListener("click", function(e){
        e.preventDefault();
        $(`.card${i}`).remove()
    });
}
