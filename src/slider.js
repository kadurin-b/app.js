import cart from "./cart.js";

function slider() {

  
  function slideLeft() {
    return console.log("left click");
  }
  function slideRight() {
    return console.log("right click");
  }
  
  cart();
  slideLeft();
  slideRight();

  return console.log("i'm slider with buttons and cart");
}

export default slider;