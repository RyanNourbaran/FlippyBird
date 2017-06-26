function Bird() {
    this.y = 0;
    this.x = 0;

    this.gravity = .5;
    this.velocity = 0;

    this.angle = 0;

    this.show = function () {
        fill(255,242,55);
        translate(200,300);
        rotate(radians(this.angle));
        stroke(0,0,0);
        strokeWeight(3);
        ellipse(this.x, this.y, 40, 30);//body
        ellipseMode(CENTER);

        fill(247, 237, 96);
        ellipse(this.x-15, this.y-5, 22, 15);//wing
        fill(255);
        ellipse(this.x+11, this.y-6, 20, 15);//eye
        point(this.x+14, this.y-7); //inside eye
        fill(247, 91, 66);
        ellipse(this.x+12, this.y+6, 22,12);
        line(this.x+8, this.y+6, this.x+20,this.y+6);


    }


    this.update = function() {
        if (frameCount > 100) {
                    this.velocity += this.gravity;
                    this.y += this.velocity;
                    this.angle = this.velocity;
                }

        if (this.y>height) {
            var again = confirm("GAME OVER \n" + "Do You Want To Play Again?")
            if (again == true) {
                location.reload();
            } else {
                exit()
            }
        }

        if (this.y < 0) {
            this.y=0;
            var again = confirm("GAME OVER \n" + "Do You Want To Play Again?")
            if (again == true) {
                location.reload();
            } else {
                exit()
            }
        }
    this.rotates = function() {
        rotate(radians(this.angle-200));
    }

    }
    this.up = function() {
        this.velocity = -8;
        this.rotates();
    }
}
