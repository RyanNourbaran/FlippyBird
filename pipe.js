function Pipe() {
    this.top = random(120,height-120);
    this.x = width;
    this.w = 40;

    this.speed = 3;

    this.show = function() {
        fill(100, 177, 1);
        rect(this.x, -1, this.w, this.top);
        rect(this.x, this.top +100, this.w, height);
    }

    this.update = function() {
        this.x -= this.speed;
    }

    this.offscreen = function() {
        if (this.x < -this.w){
            return true;
        } else {
            return false;
        }
    }

    this.hit = function(birdObject) {
        if (birdObject.y -13 < this.top || birdObject.y > this.top + 88) {
            if (birdObject.x +18 > this.x && birdObject.x - 17 < this.x + this.w) {
                return true;
            }
        }
    }
}
