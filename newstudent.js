var loadFile = function (event) {
  var image = document.getElementById("output");
  image.src = URL.createObjectURL(event.target.files[0]);
};
const submitBtn = document.getElementById("submit");
const submitStatus = document.querySelector(".submit__status");
submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("Button Clicked!");
  submitStatus.style.display = "block";
});

const closeBtn = document.querySelector(".close-btn");
const popup = document.querySelector(".popup");
const overlay = document.querySelector(".overlay");
const studentType = document.querySelectorAll(".student__type-btn");
const pymtWindow = document.querySelector(".pymt-window");
const pymtWindowMsg = document.querySelector(".pymt-window-msg");
const feePymtPopup = document.getElementById("fee_pymt_popup");
const proceedBtn = document.getElementById("proceed_btn");

const displayElement = (elem) => {
  elem.style.opacity = "1";
  pymtWindowMsg.style.opacity = "0";
};
const hideElement = (elem) => {
  elem.style.opacity = "0.5";
  pymtWindowMsg.style.opacity = "1";
};

closeBtn.addEventListener("click", function () {
  popup.style.opacity = "0";
  popup.style.zIndex = "-1";

  overlay.style.opacity = "0";
  overlay.style.zIndex = "-1";
});

const submit = document.getElementById("submit");

submit.addEventListener("click", function () {
  popup.style.opacity = "1";
  popup.style.zIndex = "50";

  overlay.style.opacity = "0.6";
  overlay.style.zIndex = "10";
});

/************* Student type *****************/
studentType.forEach((s, i) => {
  console.log(i);
  s.addEventListener("click", function () {
    if (i === 0) {
      studentType[i].style.background = "var(--primary-color)";
      studentType[i + 1].style.background = "var(--dark-color)";
      displayElement(pymtWindow);
    } else {
      studentType[i - 1].style.background = "var(--dark-color)";
      studentType[i].style.background = "var(--primary-color)";
      hideElement(pymtWindow);
    }
  });
});

/************** [Proceed Payment] ***********************/
proceedBtn.addEventListener("click", function () {
  try {
    feePymtPopup.innerHTML = `<p><i class="fas fa-spinner"></i> Uploading Details...</p>`;
    setTimeout(function () {
      feePymtPopup.innerHTML = `<p class="msg"><i class="fas fa-check-circle"></i> Details Uploaded Successfully!</p>`;
    }, 3000);
  } catch (err) {
    feePymtPopup.innerHTML = `<p class="msg err"><i class="fas fa-exclamation-circle"></i> ${err}</p>`;
  }
});
