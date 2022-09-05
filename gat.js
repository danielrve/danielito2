class Gato {
    constructor (clr_eye,clr_skin,lifes) {
        this.color_ojos = clr_eye;
        this.color_pelaje = clr_skin;
        this.vidas = lifes;
        return this; 
    }

    // Método
    maulla () {
        console.log("Miaauu");
    }

    
    aruña (gato) {

    gato.vida = gato.vida-1;
    
    }  
  }