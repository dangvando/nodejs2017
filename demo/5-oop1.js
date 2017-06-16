var person = {
	ho : "Dang ",
	hodem : "Van",
	ten : "Do",
	chaomung : function (){
		console.log("Xin chao anh " + this.ho + " " + this.hodem + " " + this.ten);

	}	
}
person.chaomung();

console.log(person["ten"]);