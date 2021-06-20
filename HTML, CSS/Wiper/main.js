// alert("test")

'use strict'

class Game {
    constructor(width, height){
        this.width = width;
        this.height = height;

        this.cvs = document.getElementById("cvs");
        this.cvs.setAttribute("width", width);
        this.cvs.setAttribute("height", height);
    }

    start(){

    }

    init(){

    }

    run(){

    }
}

window.onload = () => {
    new Game(800,600).start();
}