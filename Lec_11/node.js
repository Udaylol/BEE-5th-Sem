let obj = {
  a: 10,
  b: 20,

  f1: function () {
    console.log(this.a);
    console.log(this.b);

    let f3 = ()=>{
        console.log(this.a);
        console.log(this.b);
    }
    f3();
  },

  f2: () => {
      console.log(this.a);
      console.log(this.b);
  }
};


obj.f1();
obj.f2();
