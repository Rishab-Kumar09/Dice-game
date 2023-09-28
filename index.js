function game(){


    var random1 = (Math.random()*6)+1; // form 1 to 6

    random1 = Math.floor(random1);

    randomimage1= "./images/dice"+random1+".png";


    var random2 = (Math.random()*6)+1; // form 1 to 6

    random2 = Math.floor(random2);

    randomimage2 = "./images/dice"+random2+".png";

    document.querySelector(".img1").setAttribute("src",randomimage1);

    document.querySelector(".img2").setAttribute("src",randomimage2);

    if(random1>random2){
        document.querySelector("h1").textContent="Player 1 wins🚩";
    }
    else if(random2>random1){
        document.querySelector("h1").textContent="Player 2 wins🚩";
    }
    else{
        document.querySelector("h1").textContent="It is a draw.😁";
    }

}