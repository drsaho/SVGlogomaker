//creating parent class shape to set color value
class Shape {

    constructor() {
      this.color = ''; //default value
    }
    //setcolor function
      setColor(colorVar) {
        this.color = colorVar;
    }
}

//triangle class using shapes as parent
class Triangle extends Shape {    
    // Returns triangle with color 
        render() {
            return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
        }

}

//Circle class using shapes as parent

class Circle extends Shape {   
    
// Returns circle with color input
    render() {
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}">`
    }

}

//Square class using shapes as parent
class Square extends Shape {    
    // Returns square with color input
    render() {
        return `<rect x="73" y="40" width="160" height="160" fill="${this.color}" />`;
    }

}

//Export Classes
 
module.exports={Square,Circle,Triangle};

  
