class Gato(){

var color_ojos;
var color_pelaje;
var vidas;

  function main(clr_eye,clr_skin,lifes){

	this.color_ojos = clr_eye;

	this.color_pelaje = clr_skin;

	this.vidas = lifes; 

  }


  function maulla(){

	console.log("Miaauu");

  }

  function aruña(){


	this.vida = this.vida-1;


  }


}

