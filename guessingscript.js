library = ["books","archive","authors","catalogs"]
police = ["policeman","fugitive","handcuffs","investigate"]
nasa = ["supercomputers","astronomical","constellations","interstellar"]
var main = document.getElementById("lvls");
var level1 = document.getElementById("level1tex");
var level2 = document.getElementById("level2tex");
var level3 = document.getElementById("level3tex");
const wordlvl1 = document.getElementById("word1");
const wordlvl2 = document.getElementById("word2");
const wordlvl3 = document.getElementById("word3");
const input = document.getElementById("input");
const input2 = document.getElementById("input2");
const input3 = document.getElementById("input3");
const returnb = document.getElementById("return");

var guess1 = library[Math.floor(Math.random() * 4)];
var guess2 = police[Math.floor(Math.random() * 4)];
var guess3 = nasa[Math.floor(Math.random() * 4)];

returnb.style.display = "none";

function playlvl1(){

    main.style.display = "none";
    level1.style.display = "block";
    returnb.style.display = "block";
    const rand = guess1.split("");
    rand.sort(()=> 0.5 - Math.random());
    const rand2 = rand.join("");
    document.getElementById('word1').innerHTML = rand2;


}
function playlvl2(){

    main.style.display = "none";
    level2.style.display = "block";
    returnb.style.display = "block";
    const rand = guess2.split("");
    rand.sort(()=> 0.5 - Math.random());
    const rand2 = rand.join("");
    document.getElementById('word2').innerHTML = rand2;


}
function playlvl3(){

    main.style.display = "none";
    level3.style.display = "block";
    returnb.style.display = "block";
    const rand = guess3.split("");
    rand.sort(()=> 0.5 - Math.random());
    const rand2 = rand.join("");
    document.getElementById('word3').innerHTML = rand2;
    

}

function answers1(){
    if (input.value === guess1){
        
        document.getElementById('ans').innerHTML = "Correct!";
    }
    else{
        document.getElementById('ans').innerHTML = 'Incorrect! Try again!';
    }
}

function answers2(){
    if (input2.value === guess2){
        
        document.getElementById('ans').innerHTML = "Correct!";
        
    }
    else{
        document.getElementById('ans').innerHTML = 'Incorrect! Try again!';
    }
}
function answers3(){
    if (input3.value === guess3){
        
        document.getElementById('ans').innerHTML = "Correct!";
    }
    else{
        document.getElementById('ans').innerHTML = 'Incorrect! Try again!';
    }
}
function returntomain(){
    level1.style.display = "none";
    level2.style.display = "none";
    level3.style.display = "none";
    main.style.display = "block";
    returnb.style.display = "none";
    document.getElementById('ans').innerHTML = ''
}