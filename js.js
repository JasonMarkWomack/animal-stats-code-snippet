var dog = {
	hungry: 90,
	tired: 90,
	playful: 90,
	play: function(){
		this.playful -= 30;
		this.hungry += 20;
		this.tired += 10;
		if(this.playful < 0) {
			this.playful = 0;
		}
	},
	eat: function(){
		this.hungry -= 30;
		this.tired += 20;
		if(this.hungry < 0) {
			this.hungry = 0;
		}
	},
	sleep: function(){
		this.tired -= 30;
		this.playful += 20;
		if(this.tired < 0) {
			this.tired = 0;
		}
	},
	log: function(){
		console.log("dog stats: ", this.hungry, this.tired, this.playful)
	},
	next: function(){
		if(this.tired > 100){
			this.sleep();
		}
	}
}

dog.eat();
dog.play();
dog.play();
dog.play();
dog.eat();
dog.sleep();
dog.log();
