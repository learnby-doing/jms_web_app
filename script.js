const boxex = document.querySelectorAll(".box");

boxex.forEach((box) =>
  box.addEventListener("click", function () {
    const htmlFileName = box.textContent.trim().toLowerCase().replace(" ", "");
    console.log(htmlFileName);
    location.href = `${htmlFileName}.html`;
  })
);
