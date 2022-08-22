1)

class SmallestIntegerFinder {
  findSmallestInt(args) {
   args.sort((a, b) => a - b)
   return args[0];
}
  }


2)

function circleCircumference(circle) {
 return (circle.radius * 2 * Math.PI );

}


3)

function giveMeFive(obj){
  var f = [];
  for (var key in obj) {
    if (key.length === 5) f.push(key);
    if (obj[key].length === 5) f.push(obj[key]);
  }
  return f;
}
  
4)

function buildFun(n){
  let bF = [];
  for (let i = 0; i< n; i++){
    bF.push(() => i);
  }
  return bF;
}


5)

class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, 0, "shark", status);
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, "cat", status);
  }
  introduce() {
    return super.introduce() + "  Meow meow!";
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, "dog", status);
    this.master = master;
  }
  greetMaster() {
    return `Hello ${this.master}`;
  }
}
