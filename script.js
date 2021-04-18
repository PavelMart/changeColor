'use strict';

const body = document.querySelector( 'body' ),
    h1 = document.querySelector( 'h1' ),
    p = document.querySelector( 'p' );

const changeBgColor = {
    red: 0,
    green: 0,
    blue: 0,
    oppositeRed: 0,
    oppositeGreen: 0,
    oppositeBlue: 0,
    newColor: 0,
    oppositeColor: 0,
    getRandomNumbers: function() {
        this.red = Math.ceil( Math.random() * 255 );
        this.green = Math.ceil( Math.random() * 255 );
        this.blue = Math.ceil( Math.random() * 255 );
    },
    changeDecToHex: function() {
        if (this.red < 16) {
            this.red = '0' + this.red.toString(16); 
        } else {
            this.red = this.red.toString(16); 
        }

        if (this.green < 16) {
            this.green = '0' + this.green.toString(16);
        } else {
            this.green = this.green.toString(16);
        }

        if (this.blue < 16) {
            this.blue = '0' + this.blue.toString(16); 
        } else {
            this.blue = this.blue.toString(16); 
        }

        if (this.oppositeRed < 16) {
            this.oppositeRed = '0' + this.oppositeRed.toString(16); 
        } else {
            this.oppositeRed = this.oppositeRed.toString(16); 
        }

        if (this.oppositeGreen < 16) {
            this.oppositeGreen = '0' + this.oppositeGreen.toString(16); 
        } else {
            this.oppositeGreen = this.oppositeGreen.toString(16); 
        }

        if (this.oppositeBlue < 16) {
            this.oppositeBlue = '0' + this.oppositeBlue.toString(16); 
        } else {
            this.oppositeBlue = this.oppositeBlue.toString(16); 
        }
    },
    createNewColor: function() {
        this.newColor = '#' + [this.red, this.green, this.blue].join('');
    },
    createOppositeColor: function() {
        this.oppositeColor = '#' + [this.oppositeRed, this.oppositeGreen, this.oppositeBlue].join('');
    },
    start: function() {
        this.getRandomNumbers();
        this.getOppositeNumber();

        this.changeDecToHex();

        this.createNewColor();
        this.createOppositeColor();

        h1.textContent = this.newColor.toUpperCase();
        h1.style.color = this.oppositeColor;
        p.style.color = this.oppositeColor;
        body.style.backgroundColor = this.newColor;
    },
    getOppositeNumber: function() {

        if (this.red < 128 ) {
            this.oppositeRed = this.red + 128;
        } else {
            this.oppositeRed = this.red - 128;
        }

        if (this.green < 128 ) {
            this.oppositeGreen = this.green + 128;
        } else {
            this.oppositeGreen = this.green - 128;
        }

        if (this.blue < 128 ) {
            this.oppositeBlue = this.blue + 128;
        } else {
            this.oppositeBlue = this.blue - 128;
        }
    },
};

body.addEventListener('dblclick', changeBgColor.start.bind(changeBgColor));