function createElementFactory(type, text, color) {
  // Private variables (can't be accessed directly from outside)
  const element = document.createElement(type);
  element.innerText = text;
  element.style.color = color;
  document.body.append(element);

  return {
    // Public property
    element,
    
    // Public method
    updateText(newText) {
      element.innerText = newText;
    },
    
    updateColor(newColor) {
      element.style.color = newColor;
    }
  };
}



let el2 = createElementFactory(
  "h1",
  "Hi, This is h1 from createElementFactory",
  "blue"
);

el2.updateText("Updated h1 text");
el2.updateColor("red"); 
// el2.color = "blue"; // Directly changing the color property
console.log(el2.style.color); 