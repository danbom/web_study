// alert("test")

'use strict'

class Game {
    constructor(width, height){
        this.width = width;
        this.height = height;

        this.cvs = document.getElementById("cvs");
        this.cvs.setAttribute("width", width);
        this.cvs.setAttribute("height", height);

        this.times = [];
    }

    start(){
        this.init();
        this.run();
    }

    init(){

    }

    run(){
        // console.log(true);
        const now = performance.now();
        this.times.push(now);

        if (now - this.times[0] > 1000) {
            this.times.shift();
        }
        console.log(this.times.length);

        requestAnimationFrame(this.run.bind(this));
    }

    update(){
        
    }

    render(){

    }
}

window.onload = () => {
    new Game(800,600).start();
}