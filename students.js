"use strict";
console.log("dag....");
const classesList = document.querySelector(".classes-list");
const studentsInfo = document
  .querySelector(".students-content")
  .querySelectorAll(".student-info");
/******************************************/
// Function : to remove current class if any.
/******************************************/
const removeCurrent = function () {
  const current = document
    .querySelector(".classes-list")
    .querySelector(".current");
  if (current) {
    current.className = "";
  }
};

classesList.querySelectorAll("ul").forEach((x) => {
  x.addEventListener("click", function () {
    removeCurrent();
    this.className = "current";
  });
});

studentsInfo.forEach((x) => {
  const details = x.querySelectorAll(".student__info__details div p");
  details.forEach((x) => {
    console.log(x.textContent);
  });
});
