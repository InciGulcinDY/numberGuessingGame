//DOM's
let resultSectionDOM = document.querySelector('#resultSection');
let imageDOM = document.querySelector('#thinker');

/*********** FUNCTIONS ***************/ 
//Game 
function game(){
    let playersPrediction = document.querySelector('#playerPrediction').value;     
    let randomNumber = Math.floor(Math.random() * 6);

    if(!(playersPrediction <=5 && playersPrediction >= 0)){  
        alert("Please attempt to predict a number within the range of 0 to 5!");
        clean();  
    }else{
        result(playersPrediction,randomNumber);
    }    
}
//Result Evaluation
function result(playersPrediction,randomNumber){
    if(playersPrediction == randomNumber){
        resultSectionDOM.innerHTML = 
        `
                <!--Result - Starts-->
                <div  class="text-center ">
                    <h1>Congratulations You Won!</h1>
                    <p class="fs-4">Would you mind trying again?</p>
                </div>
                <!--Result - Ends-->

                <!--Clean Button - Starts-->
                <div class="d-grid gap-2 col-sm-3 mx-auto " id="cleanButton">
                    <button class="btn btn-dark" type="button" onclick="clean()">Clean</button>
                </div>
                <!--Clean Button - Ends-->
        `
        imageDOM.setAttribute("src" , "assets/golden-cup.jpg");
        imageDOM.setAttribute("id" , "image");
    }else{
        resultSectionDOM.innerHTML = 
        `
                <!--Result - Starts-->
                <div  class="text-center ">
                    <h1>Unfortunately you did not win!</h1>
                    <p class="fs-4">Would you mind trying again?</p>
                </div>
                <!--Result - Ends-->

                <!--Clean Button - Starts-->
                <div class="d-grid gap-2 col-sm-3 mx-auto " id="cleanButton">
                    <button class="btn btn-dark" type="button" onclick="clean()">Clean</button>
                </div>
                <!--Clean Button - Ends-->
        `
        imageDOM.setAttribute("src" , "assets/lost.png");
        imageDOM.setAttribute("id" , "image");
    }
}

//Clean
function clean(){
    resultSectionDOM.innerHTML = ``;
    document.querySelector('#playerPrediction').value = ``;
    imageDOM.setAttribute("src" , "assets/thinker.jpg");
    imageDOM.setAttribute("id" , "thinker");
}