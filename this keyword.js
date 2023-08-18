// ********************************** this keyword scope *****************************************\
let globalVariable = 0;
const a = function () {
  console.log("Scope of this keyword inside a");
  console.log(this);
  aFunVariable = 10;
  const b = {
    bFunVariable: 20,
    func1: function () {
      let xyz = 90;
      console.log("Scope of this keyword inside func1");
      console.log(this);
      console.log(this.bFunVariable);
      console.log(this.xyz); // undefined
    },
  };

  const c = {
    cFunVariable: 30,
    func2: () => {
      console.log("Scope of this keyword inside func2");
      console.log(this);
    },
  };

  b.func1();
  c.func2();
};

a();
