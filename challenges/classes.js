// 1. Copy and paste your prototype in here and refactor into class syntax.

// Original Prototype 
// function CuboidMaker(params) {
//     this.length = params.length;
//     this.width = params.width;
//     this.height = params.height;
//   }
  
//   CuboidMaker.prototype.volume = function() {
//     return `The volume of a cuboid is ${this.length} * ${this.width} * $${this.height}.`;
//   }
  
//   CuboidMaker.prototype.surfaceArea = function() {
//     return `The surface area of a cuboid is 2 * ${this.length} * ${this.width} + ${this.length} * ${this.height} + ${this.width} * ${this.height}.`;
//   }
  
  
//   const cuboid = new CuboidMaker({
//     length: 4,
//     width: 5,
//     height: 5,
//   });

// Refactored Prototype
class CuboidMaker {
    constructor(params) {
    this.length = params.length;
    this.width = params.width;
    this.height = params.height;
    }

    volume() {
        return `The volume of a cuboid is ${this.length} * ${this.width} * $${this.height}.`;
    }

    surfaceArea() {
        return `The surface area of a cuboid is 2 * ${this.length} * ${this.width} + ${this.length} * ${this.height} + ${this.width} * ${this.height}.`;
    }
}

// Cuboid Object
const cuboid = new CuboidMaker({
    length: 4,
    width: 5,
    height: 5,
  });


// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130





// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.