let titles = "", rd = 0, director = "", desc = "", rt = 0;
let name = "", age = "", gender = "";

// Async/Await from Studio Ghibli API
async function getInfo() {
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

        titles = data.map(e => e.title);
        rd = data.map(e => e.release_date);
        director = data.map(e => e.director);
        desc = data.map(e => e.description);
        rt = data.map(e => e.rt_score);

        getInfo_0();

    } catch(err) {
        alert("HTTP req failed!");
        console.error(err);
    }
}
getInfo();

// Castle In the Sky
function getInfo_0() {
    let i = 0;
    document.querySelector(".titles").innerHTML = titles[i];
    document.querySelector(".rd").innerHTML = rd[i];
    document.querySelector(".director").innerHTML = `Director: ${director[i]}`;
    document.querySelector(".description").innerHTML = `Description: ${desc[i]}`;
    document.querySelector(".rt").innerHTML = `Rating: ${rt[i]}`;
}

// People API
// async function getPeople() {
//     const url = 'https://ghibliapi.herokuapp.com/people';
//     let h = new Headers();
//         h.append('Accept', 'application/json'); 

//     let req = new Request(url, {
//         method: 'GET',
//         headers: h,
//         mode: 'cors'
//     });

//     try {
//         let response = await fetch(req);
//         let data = await response.json();
//         console.log(data);

//         name = data.map(e => e.name);
//         gender = data.map(e => e.gender);
//         age = data.map(e => e.age);

//         // getPeople_0();

//     } catch(err) {
//         alert("HTTP req failed!");
//         console.error(err);
//     }
// }
