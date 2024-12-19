let body = document.querySelector("body");
let container = body.querySelector("div");
let game = container.querySelector("div");
let boxes = game.querySelectorAll("button");
let resetButton = body.querySelector("#reset-btn");
let result = body.querySelector("#result")

let box_entry = 0;

let chance = true;
let x_box = [];
let o_box = [];


// initaialization
for(let i = 0; i<9 ; i++){
    x_box.push(false);
    o_box.push(false);
}


// functions to execute
function win(box_list){
    for(let i = 0; i<9 ;i+=3){
        if(box_list[i] == true && 
            box_list[i+1] == true && 
            box_list[i+2] == true){
                return true;
        }
    }

    for(let i = 0; i<3 ;i+=1){
        if(box_list[i] == true && 
            box_list[i+3] == true && 
            box_list[i+6] == true){
                return true;
        }
    }

    if(box_list[0] == true &&
        box_list[4] == true &&
        box_list[8] == true
    ){
        return true;
    }

    if(box_list[2] == true &&
        box_list[4] == true &&
        box_list[6] == true
    ){
        return true;
    }

    return false;
}

resetSystem  = () => {
    for(let i = 0; i<9 ; i++){
        x_box[i] = false
        o_box[i] = false;
        boxes[i].textContent = "";
    }

    for(let i =0 ;i<9 ;i++){
        boxes[i].disabled = false;
    }

    result.textContent = "";
    box_entry = 0;
    chance = true;
}

disableAllBoxButtons = () => {
    for(let i =0 ;i<9 ;i++){
        boxes[i].disabled = true;
    }
}






boxes.forEach((box, index) => {
    box.addEventListener('click', (event)=>{
        if(chance == true){
            box.textContent = "X";
            x_box[index] = true;
        } else {
            box.textContent = "O";
            o_box[index] = true;
        }

        box_entry += 1;

        // console.log(x_box);
        // console.log(o_box);

        if(chance == true){
            if(win(x_box)){
                console.log("Player 1 ( symbol X ) is the Winner.");
                result.textContent = "Player 1 ( symbol X ) is the Winner.";
                disableAllBoxButtons();
            } else if(box_entry == 9){
                console.log("Draw.");
                result.textContent = "Draw";
            }

        } else {
            if(win(o_box)){
                console.log("Player 2 ( symbol O ) is the Winner.");
                result.textContent = "Player 2 ( symbol O ) is the Winner.";
                disableAllBoxButtons();
            } else if(box_entry == 9){
                console.log("Draw.");
                result.textContent = "Draw";
            }
        }

        box.disabled = true;
        chance = !chance;
    })
});

resetButton.addEventListener('click', resetSystem)