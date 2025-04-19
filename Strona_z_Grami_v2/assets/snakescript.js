const canvas = document.getElementById("gamecanvas");
const ctx = canvas.getContext('2d');


const gridsize = 40;
const tilecount = canvas.width / gridsize
let snake = {};
let gamerunning =  false;
let dir_x = 0;
let dir_y = 0;
let food


function beginGame(){
    snake = {x:10, y:10};
    spawnFood()
    gameLoop = setInterval(heartbeat, 100);
}

function spawnFood(){
    food = {x: Math.floor(Math.random() * tilecount),
            y: Math.floor(Math.random() * tilecount)}
}

function heartbeat(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'green'
    ctx.fillRect(snake.x * gridsize, snake.y * gridsize, gridsize, gridsize);

    if (snake.x == food.x && snake.y == food.y){
        spawnFood()
    }

    snake.x += dir_x;
    snake.y += dir_y;
    ctx.fillStyle = 'red';
    ctx.fillRect(food.x * gridsize, food.y * gridsize, gridsize, gridsize );
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
    }
});

beginGame();
heartbeat();
console.log("aaa")