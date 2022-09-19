class Gato {
  constructor(eye, color, live) {
    this.eyes = eye;
    this.color = color;
    this.lives = live;
    
    console.log(this.show());
  }

  maulla() {
    return `Miauuu`;
  }

  aruña(cat) {
      cat.lives= cat.lives-1;
    return "this cat have now "+cat.lives+" lives" ;
  }

  show() {

    return  "This cat is "+ this.color +" and have "+this.eyes+" eyes";
  }

}