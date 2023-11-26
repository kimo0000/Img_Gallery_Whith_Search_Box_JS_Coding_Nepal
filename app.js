const input = document.querySelector(".inpt"),
  content = document.querySelector(".content"),
  imgs = [...document.querySelectorAll(".content img")];

input.addEventListener("keyup", (e) => {
  e.preventDefault();

  let valueInpt = input.value.toLowerCase();
  imgs.filter((img) => {
    if (img.dataset.name === valueInpt) {
      return (img.style.display = "block");
    }

    img.style.display = "none";
  });
});
