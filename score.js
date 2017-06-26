function Score() {
    this.points = 0;
    this.increase = 1;
    this.maxscore = 0;


    this.show = function () {
        textSize(28);
        textStyle(BOLD);
        fill(255,242,55);
        text(this.points,200,0,100,50);
        textSize(18);
        text('High-Score: ' +this.maxscore,0,595);
    }

    this.update = function() {
        if (frameCount >= 347) {
            if ((frameCount-347) % 60 == 0) {
                this.points += this.increase;
            }
        }
        if (this.maxscore < this.points) {
                this.maxscore = this.points;
        }
    }
}
