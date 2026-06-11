function randomColor(){
  return "#" + Math.floor(Math.random()*16777215).toString(16);
}

/* 🎨 COLORS */
function generateColors(){
  const palette = document.getElementById("palette");
  palette.innerHTML = "";

  for(let i = 0; i < 6; i++){
    const color = randomColor();

    const box = document.createElement("div");
    box.className = "color-box";
    box.style.background = color;
    box.innerText = color;

    box.onclick = () => {
      navigator.clipboard.writeText(color);
      alert("Copied: " + color);
    };

    palette.appendChild(box);
  }
}

/* 📏 SPACING */
function generateSpacing(){
  const spacing = document.getElementById("spacing");
  spacing.innerHTML = "";

  const sizes = [4,8,12,16,24,32,48,64];

  sizes.forEach(size => {
    const div = document.createElement("div");
    div.className = "spacing-item";
    div.style.width = size * 4 + "px";
    div.innerText = size + "px";

    div.onclick = () => {
      navigator.clipboard.writeText(size + "px");
      alert("Copied: " + size + "px");
    };

    spacing.appendChild(div);
  });
}

/* INIT */
generateColors();
generateSpacing();