const modal = document.querySelector('#model');
const open = document.querySelector('open-button');
const close = document.querySelector('close-button');


open.addEventListener("click", () => {
  modal.showModal();
});
close.addEventListener("click", () => {
  modal.remove();
});  



var car = {
  name :"car",
  model:"toyato",
  price:202111,
  speed:50,
  safe :function(){
    console.log("if the car safety");
  },
  accerate : function(x){
    this.speed += x;
    console.log("nsjhsdhjd" + this.speed);
  }
 

};




