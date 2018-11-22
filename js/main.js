let titles = "", rd = 0, director = "", desc = "", rt = 0;

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
        getInfo_1();
        getInfo_2();
        getInfo_3();
        getInfo_4();
        getInfo_5();
        getInfo_6();
        getInfo_7();
        getInfo_8();
        getInfo_9();
        getInfo_10();
        getInfo_11();
        getInfo_12();
        getInfo_13();
        getInfo_14();
        getInfo_15();
        getInfo_16();
        getInfo_17();
        getInfo_18();
        getInfo_19();
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

// Grave of the Fireflies
function getInfo_1() {
    let i = 1;
    document.querySelector(".titles1").innerHTML = titles[i];
    document.querySelector(".rd1").innerHTML = rd[i];
    document.querySelector(".director1").innerHTML = `Director: ${director[i]}`;
    document.querySelector(".description1").innerHTML = `Description: ${desc[i]}`;
    document.querySelector(".rt1").innerHTML = `Rating: ${rt[i]}`;
}

// My Neighbor Totoro
function getInfo_2() {
    let i = 2;
    document.querySelector(".titles2").innerHTML = titles[i];
    document.querySelector(".rd2").innerHTML = rd[i];
    document.querySelector(".director2").innerHTML = `Director: ${director[i]}`;
    document.querySelector(".description2").innerHTML = `Description: ${desc[i]}`;
    document.querySelector(".rt2").innerHTML = `Rating: ${rt[i]}`;
}

// Kiki's Delivery Service
function getInfo_3() {
    let i = 3;
    document.querySelector(".titles3").innerHTML = titles[i];
    document.querySelector(".rd3").innerHTML = rd[i];
    document.querySelector(".director3").innerHTML = `Director: ${director[i]}`;
    document.querySelector(".description3").innerHTML = `Description: ${desc[i]}`;
    document.querySelector(".rt3").innerHTML = `Rating: ${rt[i]}`;
}

// Only Yesterday
function getInfo_4() {
    let i = 4;
    document.querySelector(".titles4").innerHTML = titles[i];
    document.querySelector(".rd4").innerHTML = rd[i];
    document.querySelector(".director4").innerHTML = `Director: ${director[i]}`;
    document.querySelector(".description4").innerHTML = `Description: ${desc[i]}`;
    document.querySelector(".rt4").innerHTML = `Rating: ${rt[i]}`;
}

// Porco Rosso
function getInfo_5() {
    let i = 5;
    document.querySelector(".titles5").innerHTML = titles[i];
    document.querySelector(".rd5").innerHTML = rd[i];
    document.querySelector(".director5").innerHTML = `Director: ${director[i]}`;
    document.querySelector(".description5").innerHTML = `Description: ${desc[i]}`;
    document.querySelector(".rt5").innerHTML = `Rating: ${rt[i]}`;
}

// Pom Poko
function getInfo_6() {
    let i = 6;
    document.querySelector(".titles6").innerHTML = titles[i];
    document.querySelector(".rd6").innerHTML = rd[i];
    document.querySelector(".director6").innerHTML = `Director: ${director[i]}`;
    document.querySelector(".description6").innerHTML = `Description: ${desc[i]}`;
    document.querySelector(".rt6").innerHTML = `Rating: ${rt[i]}`;
}

// Whisper of the Heart
function getInfo_7() {
    let i = 7;
    document.querySelector(".titles7").innerHTML = titles[i];
    document.querySelector(".rd7").innerHTML = rd[i];
    document.querySelector(".director7").innerHTML = `Director: ${director[i]}`;
    document.querySelector(".description7").innerHTML = `Description: ${desc[i]}`;
    document.querySelector(".rt7").innerHTML = `Rating: ${rt[i]}`;
}

// Princess Mononoke
function getInfo_8() {
    let i = 8;
    document.querySelector(".titles8").innerHTML = titles[i];
    document.querySelector(".rd8").innerHTML = rd[i];
    document.querySelector(".director8").innerHTML = `Director: ${director[i]}`;
    document.querySelector(".description8").innerHTML = `Description: ${desc[i]}`;
    document.querySelector(".rt8").innerHTML = `Rating: ${rt[i]}`;
}

// My Neighbors the Yamadas
function getInfo_9() {
    let i = 9;
    document.querySelector(".titles9").innerHTML = titles[i];
    document.querySelector(".rd9").innerHTML = rd[i];
    document.querySelector(".director9").innerHTML = `Director: ${director[i]}`;
    document.querySelector(".description9").innerHTML = `Description: ${desc[i]}`;
    document.querySelector(".rt9").innerHTML = `Rating: ${rt[i]}`;
}

// Spirited Away
function getInfo_10() {
    let i = 10;
    document.querySelector(".titles10").innerHTML = titles[i];
    document.querySelector(".rd10").innerHTML = rd[i];
    document.querySelector(".director10").innerHTML = `Director: ${director[i]}`;
    document.querySelector(".description10").innerHTML = `Description: ${desc[i]}`;
    document.querySelector(".rt10").innerHTML = `Rating: ${rt[i]}`;
}

// The Cat Returns
function getInfo_11() {
    let i = 11;
    document.querySelector(".titles11").innerHTML = titles[i];
    document.querySelector(".rd11").innerHTML = rd[i];
    document.querySelector(".director11").innerHTML = `Director: ${director[i]}`;
    document.querySelector(".description11").innerHTML = `Description: ${desc[i]}`;
    document.querySelector(".rt11").innerHTML = `Rating: ${rt[i]}`;
}

// Howl's Moving Castle
function getInfo_12() {
    let i = 12;
    document.querySelector(".titles12").innerHTML = titles[i];
    document.querySelector(".rd12").innerHTML = rd[i];
    document.querySelector(".director12").innerHTML = `Director: ${director[i]}`;
    document.querySelector(".description12").innerHTML = `Description: ${desc[i]}`;
    document.querySelector(".rt12").innerHTML = `Rating: ${rt[i]}`;
}

// Tales from Earthsea
function getInfo_13() {
    let i = 13;
    document.querySelector(".titles13").innerHTML = titles[i];
    document.querySelector(".rd13").innerHTML = rd[i];
    document.querySelector(".director13").innerHTML = `Director: ${director[i]}`;
    document.querySelector(".description13").innerHTML = `Description: ${desc[i]}`;
    document.querySelector(".rt13").innerHTML = `Rating: ${rt[i]}`;
}

// Ponyo
function getInfo_14() {
    let i = 14;
    document.querySelector(".titles14").innerHTML = titles[i];
    document.querySelector(".rd14").innerHTML = rd[i];
    document.querySelector(".director14").innerHTML = `Director: ${director[i]}`;
    document.querySelector(".description14").innerHTML = `Description: ${desc[i]}`;
    document.querySelector(".rt14").innerHTML = `Rating: ${rt[i]}`;
}

// Arrietty
function getInfo_15() {
    let i = 15;
    document.querySelector(".titles15").innerHTML = titles[i];
    document.querySelector(".rd15").innerHTML = rd[i];
    document.querySelector(".director15").innerHTML = `Director: ${director[i]}`;
    document.querySelector(".description15").innerHTML = `Description: ${desc[i]}`;
    document.querySelector(".rt15").innerHTML = `Rating: ${rt[i]}`;
}

// From Up on Poppy Hill
function getInfo_16() {
    let i = 16;
    document.querySelector(".titles16").innerHTML = titles[i];
    document.querySelector(".rd16").innerHTML = rd[i];
    document.querySelector(".director16").innerHTML = `Director: ${director[i]}`;
    document.querySelector(".description16").innerHTML = `Description: ${desc[i]}`;
    document.querySelector(".rt16").innerHTML = `Rating: ${rt[i]}`;
}

// The Wind Rises
function getInfo_17() {
    let i = 17;
    document.querySelector(".titles17").innerHTML = titles[i];
    document.querySelector(".rd17").innerHTML = rd[i];
    document.querySelector(".director17").innerHTML = `Director: ${director[i]}`;
    document.querySelector(".description17").innerHTML = `Description: ${desc[i]}`;
    document.querySelector(".rt17").innerHTML = `Rating: ${rt[i]}`;
}

// The Tales of the Princess Kaguya
function getInfo_18() {
    let i = 18;
    document.querySelector(".titles18").innerHTML = titles[i];
    document.querySelector(".rd18").innerHTML = rd[i];
    document.querySelector(".director18").innerHTML = `Director: ${director[i]}`;
    document.querySelector(".description18").innerHTML = `Description: ${desc[i]}`;
    document.querySelector(".rt18").innerHTML = `Rating: ${rt[i]}`;
}

// When Marnie Was There
function getInfo_19() {
    let i = 19;
    document.querySelector(".titles19").innerHTML = titles[i];
    document.querySelector(".rd19").innerHTML = rd[i];
    document.querySelector(".director19").innerHTML = `Director: ${director[i]}`;
    document.querySelector(".description19").innerHTML = `Description: ${desc[i]}`;
    document.querySelector(".rt19").innerHTML = `Rating: ${rt[i]}`;
}

// Button Close Cards (btn-custom)
document.querySelector(".btn-custom0").addEventListener("click", function(){
    $('.card0').remove()
});

document.querySelector(".btn-custom1").addEventListener("click", function(){
    $('.card1').remove()
});

document.querySelector(".btn-custom2").addEventListener("click", function(){
    $('.card2').remove()
});

document.querySelector(".btn-custom3").addEventListener("click", function(){
    $('.card3').remove()
});

document.querySelector(".btn-custom4").addEventListener("click", function(){
    $('.card4').remove()
});

document.querySelector(".btn-custom5").addEventListener("click", function(){
    $('.card5').remove()
});

document.querySelector(".btn-custom6").addEventListener("click", function(){
    $('.card6').remove()
});

document.querySelector(".btn-custom7").addEventListener("click", function(){
    $('.card7').remove()
});

document.querySelector(".btn-custom8").addEventListener("click", function(){
    $('.card8').remove()
});

document.querySelector(".btn-custom9").addEventListener("click", function(){
    $('.card9').remove()
});

document.querySelector(".btn-custom10").addEventListener("click", function(){
    $('.card10').remove()
});

document.querySelector(".btn-custom11").addEventListener("click", function(){
    $('.card11').remove()
});

document.querySelector(".btn-custom12").addEventListener("click", function(){
    $('.card12').remove()
});

document.querySelector(".btn-custom13").addEventListener("click", function(){
    $('.card13').remove()
});

document.querySelector(".btn-custom14").addEventListener("click", function(){
    $('.card14').remove()
});

document.querySelector(".btn-custom15").addEventListener("click", function(){
    $('.card15').remove()
});

document.querySelector(".btn-custom16").addEventListener("click", function(){
    $('.card16').remove()
});

document.querySelector(".btn-custom17").addEventListener("click", function(){
    $('.card17').remove()
});

document.querySelector(".btn-custom18").addEventListener("click", function(){
    $('.card18').remove()
});

document.querySelector(".btn-custom19").addEventListener("click", function(){
    $('.card19').remove()
});
