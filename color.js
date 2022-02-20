"use strict";

window.addEventListener("load", setup);

// let colorObject = {
//   harmony,
//   color,
// };

function setup() {
  console.log("setup");

  document.querySelector("#color_selector").addEventListener("input", checkDropdownOption);

  convertColors();
}

// Handles the conversions
function convertColors() {
  // RGB
  let rgbVal = getRgb();

  // HEX
  convertRgbToHex(rgbVal);

  // HSL
  convertRgbToHSL(rgbVal);
}

// Checks which option has been chosen from dropdown menu
function checkDropdownOption() {
  const dropdownInput = document.querySelector("#harmonies").value;

  console.log(dropdownInput);

  return dropdownInput;
}

// ......       Show colors

function showAnalogous() {}

function showMonochromatic() {}

function showMonochromatic() {}

function showComplementary() {}

function showTriad() {}

function showCompound() {}

function showShades() {}

// ......       Display colors

function displayColors() {}

// Generate and return random rgb values
function getRgb() {
  let rgb = {
    r: Math.floor(Math.random() * 255),
    g: Math.floor(Math.random() * 255),
    b: Math.floor(Math.random() * 255),
  };

  console.log(`${rgb.r}, ${rgb.g}, ${rgb.b}`);

  return rgb;
}

/// Convert from rgb to hex
function convertRgbToHex(rgbVal) {
  let r = rgbVal.r.toString(16);
  let g = rgbVal.g.toString(16);
  let b = rgbVal.b.toString(16);

  let hexCode = "#" + r + g + b;

  console.log(hexCode);

  return hexCode;
}

// Convert from rgb to hsl
function convertRgbToHSL(rgb) {
  let R = rgb.r;
  let G = rgb.g;
  let B = rgb.b;

  R /= 255;
  G /= 255;
  B /= 255;

  let h, s, l;

  const min = Math.min(R, G, B);
  const max = Math.max(R, G, B);

  if (max === min) {
    h = 0;
  } else if (max === R) {
    h = 60 * (0 + (G - B) / (max - min));
  } else if (max === G) {
    h = 60 * (2 + (B - R) / (max - min));
  } else if (max === B) {
    h = 60 * (4 + (R - G) / (max - min));
  }

  if (h < 0) {
    h = h + 360;
  }

  l = (min + max) / 2;

  if (max === 0 || min === 1) {
    s = 0;
  } else {
    s = (max - l) / Math.min(l, 1 - l);
  }
  // multiply s and l by 100 to get the value in percent, rather than [0,1]
  s *= 100;
  l *= 100;

  h = h.toFixed(0);
  s = s.toFixed(0);
  l = l.toFixed(0);

  console.log(h + "%, " + s + "%, " + l + "%");

  return {
    h,
    s,
    l,
  };
}
