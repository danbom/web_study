// alert("test")



'use strict'

class Vector2{

    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    addS(s){
        return new Vector2(this.x + s, this.y + s);
    }

    subS(s){
        return new Vector2(this.x - s, this.y - s);
    }

    mulS(s){
        return new Vector2(this.x * s, this.y * s);
    }

    divS(s){
        return new Vector2(this.x / s, this.y / s);
    }

    addV(v){
        return new Vector2(this.x + v.x, this.y + v.y);
    }

    subV(v){
        return new Vector2(this.x - v.x, this.y - v.y);
    }

    mulV(v){
        return new Vector2(this.x * v.x, this.y * v.y);
    }

    divV(v){
        return new Vector2(this.x / v.x, this.y / v.y);
    }

    len(){
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    normalized(){
        const len = this.len();

        return new Vector2(this.x / len, this.y / len);
    }

    dot(v){
        return this.x * v.x + this.y * v.y;
    }
}

class Ball{
    constructor(pos, r){
        this.pos = pos;
        this.r = r;
    }

    update(){

    }

    render(ctx){
        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, this.r, 0, 2 * Math.PI);
        ctx.stroke();
    }
}

class Game {
    constructor(width, height){
        this.width = width;
        this.height = height;

        this.cvs = document.getElementById("cvs");
        this.cvs.setAttribute("width", width);
        this.cvs.setAttribute("height", height);
        this.ctx = this.cvs.getContext("2d");

        this.times = [];
    }

    start(){
        this.init();
        this.run();
    }

    init(){

        this.balls = [];

        for(let i = 0; i < 100; i++){
            let b = new Ball(new Vector2((Math.random() - 0.5) * this.width + this.width / 2.0, (Math.random() - 0.5) * this.height + this.height / 2.0), Math.random() * 10 + 15);
        }

        this.balls.push(b);
        
    }

    run(){
        // console.log(true);
        const now = performance.now();
        this.times.push(now);

        if (now - this.times[0] > 1000) {
            this.times.shift();
        }
        // console.log(this.times.length);

        this.update();
        this.render();

        requestAnimationFrame(this.run.bind(this));
    }

    update(){
        this.balls.forEach(b => {
            b.update();
        });
    }

    render(){
        this.ctx.clearRect(0, 0, this.width, this.height);

        this.ctx.fillStyle = "white"
        this.ctx.font = '22px Quicksand';
        this.ctx.fillText(this.times.length - 1 + "fps", 15, 35);

        this.balls.forEach(b => {
            b.render(this.ctx);
        });
    }
}

window.onload = () => {
    new Game(1600,900).start();
}