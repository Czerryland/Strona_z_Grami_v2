const canvas = document.getElementById("gamecanvas");
const ctx = canvas.getContext('2d');
const displayscore = document.getElementById("score");
const gameoverscreen = document.getElementById("game-over-screen");
const playAgainButton = document.getElementById("play-again");
const id_score = document.getElementById("id_score");


const gridsize = 40;
const tilecount = canvas.width / gridsize;
let snake = [];
let gamerunning =  false;
let dir_x = 0;
let dir_y = 0;
let food;
let ate = false;
let score = 0;

function beginGame(){
    gameoverscreen.style.display = "none"
    score = 0;
    displayscore.innerHTML = score;
    ate = false;
    dir_x = 0;
    dir_y = 0;
    snake = [{x:10, y:10}];
    spawnFood()
    gameLoop = setInterval(heartbeat, 100);
}

function spawnFood(){
    food = {x: Math.floor(Math.random() * tilecount),
            y: Math.floor(Math.random() * tilecount)}
}

function updateScore(increment){
    score+= increment;
    displayscore.innerHTML = score;
}

function heartbeat(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //moving the snake and checking for the collision with food
    const head = { x: snake[0].x + dir_x, y: snake[0].y + dir_y };
    if (head.x == food.x && head.y == food.y){
        ate = true;
        updateScore(500);
        spawnFood();
    }
    snake.unshift(head)
    if (!ate){snake.pop();}
    ate = false;


    //drawin the snake
    ctx.fillStyle = 'green'
    snake.forEach((segment, index)=>{
        ctx.fillRect(segment.x * gridsize, segment.y * gridsize, gridsize, gridsize);
    });
    
    //drawing food
    ctx.fillStyle = 'red';
    ctx.fillRect(food.x * gridsize, food.y * gridsize, gridsize, gridsize );

    //checking for collisions
    //with the body
    snake.forEach((segment, index)=>{
        if (head.x == segment.x && head.y == segment.y && index >= 4){
            gameover();
            //console.log("gameover");
        }
    });
    //with the wall
    if (head.x < 0 || head.x >= tilecount || head.y < 0 || head.y >= tilecount){
        gameover();
    }
    //console.log("x: "+head.x+" y: "+head.y);

}

function gameover(){
    gameoverscreen.style.display = "flex"
    clearInterval(gameLoop);
    id_score.value = score;
}

document.addEventListener('keydown', (event)=>{
    switch (event.key){
        case 'ArrowUp':
            if (dir_y != 1) {dir_x = 0; dir_y = -1; }
            break;
        case 'ArrowDown':
            if (dir_y != -1) {dir_x = 0; dir_y = 1; }
            break;
        case 'ArrowLeft':
            if (dir_x != 1) {dir_x = -1; dir_y =0; }
            break;
        case 'ArrowRight':
            if (dir_x != -1) {dir_x = 1; dir_y =0; }
            break;
        case 'r':
            console.log(snake)
    }
});

beginGame();

playAgainButton.addEventListener("click", beginGame);