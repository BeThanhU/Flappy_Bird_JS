class Pipe{
	constructor(isTop, height){
		this.width = 80;
		this.height = height;
		this.x = canvas.width + this.width;
		this.isTop = isTop;

		if(isTop){
			this.topY = 0;
			this.bottomY = this.height;
		}else{
			this.topY = canvas.height - this.height;
			this.bottomY = canvas.height;
		}
	}

	show(){
		if(this.isTop){
      		image(topPipeSprite, this.x, this.topY + this.height - 800);
	    }else{
	      	image(bottomPipeSprite, this.x, this.topY);
	    }
	}

	update(){
		if(!player.dead && !player.isOnGround){
			this.x -= panSpeed;
		}
	}

	colided(p){
		if(p.x+p.size/2 >= this.x && p.x-p.size/2 <= this.x+this.width){
			if(!this.isTop && p.y+p.size/2 >= this.topY){
				return true;
			}
			if(this.isTop && p.y+p.size/2 <= this.bottomY+p.size){
				return true;
			}
		}
		return false;
	}
}