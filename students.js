"use strict";

const classesList = document.querySelector(".classes-list");
const studentsContent = document.querySelector(".students-content");

const studentsInfo = document
  .querySelector(".students-content")
  .querySelectorAll(".student-info");

/***************************************************************************************/
// Function : to remove current class if any.
/***************************************************************************************/
const removeCurrent = function () {
  const current = document
    .querySelector(".classes-list")
    .querySelector(".current");
  if (current) {
    current.className = "";
  }
};

/***************************************************************************************/
// Event Listner for Class Filter
/***************************************************************************************/

classesList.querySelectorAll("ul").forEach((x) => {
  x.addEventListener("click", function () {
    removeCurrent();
    console.log("Button Clicked!");
    this.className = "current";
    let htmlString = "";
    const className = this.textContent.trim();

    studentsInfo.forEach((std, i) => {
      /**************** Class filter for student info **************************/
      if (className.toLowerCase() !== "all") {
        const detail = std.querySelector(
          ".student__info__details .student-class p"
        );
        const studentClass = detail.textContent.replace(/Class : /g, "");
        if (className == studentClass) {
          htmlString += std.outerHTML;
        }
      } else {
        htmlString += std.outerHTML;
      }
    });
    studentsContent.innerHTML = htmlString;
  });
});
