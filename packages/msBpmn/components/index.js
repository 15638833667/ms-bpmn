// custom/index.js
import CustomPalette from "./customPalette/index";
import CustomRenderer from "./customRenderer/index";
import CustomContextPad from "./customContextPad/index";

export default {
  __init__: ["customPalette", "customRenderer", 'customContextPad'],
  customPalette: ["type", CustomPalette],
  customRenderer: ["type", CustomRenderer],
  customContextPad: ["type", CustomContextPad]
};
