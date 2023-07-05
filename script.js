'use strict';

function ladder(){
    this.step = 0;

    this.up = function(){
        this.step++;
        return this;
    }
    this.down = function(){
        this.step--;
        return this;
    }
    this.showStep = function(){
        alert(this.step);
    }
}

const createLadder = new ladder();

createLadder.up().up().down().showStep();

