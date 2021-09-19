const boxex = document.querySelectorAll(".box");

boxex.forEach((box) =>
  box.addEventListener("click", function () {
    console.log(box.textContent.trim().toLowerCase());
    location.href = "newstudent.html";
  })
);
