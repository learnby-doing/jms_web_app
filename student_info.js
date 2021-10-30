const endDetails = document.getElementById("edit_details");
const popup = document.querySelector(".popup");
const studentDetails = document.querySelectorAll(".student-details div");
const paymentDetails = document.querySelector("#payment_details");
const OPACITY = "0.97";

const closeBtn = document.querySelector(".close-btn");

const docBtn = document.getElementById("doc_btn");

const allDocs = [
  "anil_sir.pdf",
  "default.jpeg",
  "Photo.jpg",
  "santosh Fee Receipt.pdf",
];
// console.log("cLOSE bUTTION", closeBtn);
const popupDocsHtml = `
<div class="close-btn">&times;</div>
<h2>Student Document Details</h2>
<div class="doc">
  <p>Marksheet</p>
  <button class="btn"><i class="fas fa-eye"></i> view</button>
</div>
<div class="doc">
  <p>Aadhaar Card</p>
  <button class="btn"><i class="fas fa-eye"></i> view</button>
</div>
<div class="doc">
  <p>Photo</p>
  <button class="btn"><i class="fas fa-eye"></i> view</button>
</div>
<div class="doc">
  <p>Receipt</p>
  <button class="btn"><i class="fas fa-eye"></i> view</button>
</div>
`;

const popupEditDetailsHtml = `
<div class="close-btn">&times;</div>
        <h2>Edit Student Detail</h2>
        <div class="row">
          <div>
            <label for="">Student Id</label>
            <input type="text" />
          </div>
          <div>
            <label for="">First Name</label>
            <input type="text" />
          </div>
        </div>
        <div class="row">
          <div>
            <label for="">Last Name</label>
            <input type="text" />
          </div>
          <div>
            <label for="">DOB</label>
            <input type="text" />
          </div>
        </div>
        <div class="row">
          <div>
            <label for="">Gender</label>
            <input type="text" />
          </div>
          <div>
            <label for="">Category</label>
            <input type="text" />
          </div>
        </div>
        <div class="row">
          <div>
            <label for="">Father's Name</label>
            <input type="text" />
          </div>
          <div>
            <label for="">Mother's Name</label>
            <input type="text" />
          </div>
        </div>
        <div class="row">
          <div>
            <label for="">Contact</label>
            <input type="text" />
          </div>
          <div>
            <label for="">Class</label>
            <input type="text" />
          </div>
        </div>
        <div class="row">
          <div>
            <label for="">Village</label>
            <input type="text" />
          </div>
          <div>
            <label for="">Address</label>
            <input type="text" />
          </div>
        </div>
        <div>
          <button class="btn">Submit <i class="fas fa-arrow-right"></i></button>
        </div>
`;

const popupPaymentDetailsHtml = `
<div class="close-btn">&times;</div>
<h2>Payment Details</h2>
<div class="new__payment">
<div>
<label>Deposit Amount </label> <input type="text"/>
</div>
<div>
<label>Paid By <i class="fas fa-user"></i></label> <input type="text"/>
</div>
<div>
<button class="btn">Pay Amount <i class="fas fa-arrow-right"></i></button>
</div>

<p>Remaining Deposit 1000 /-</p>
</div>
<div id="pymt_details_popup">
<div><h2 class="secondary-txt-color">Total Amount 12000 /- <i class="far fa-check-circle primary-color"></i></h2>
</div>
  <div class="pending">
    <div>
      <p class="bg">Paid Amount</p>
      <p class="bg">12000 Rs /-</p>
    </div>
    <div>
      <p class="primary-txt-color">Paid By</p>
      <p class="primary-txt-color">Ashish</p>
    </div>
    <div>
      <p class="secondary-txt-color">Paid Date</p>
      <p class="secondary-txt-color">20th Sept 2021</p>
    </div>
  </div>
  <div class="pending">
    <div>
      <p class="bg">Paid Amount</p>
      <p class="bg">12000 Rs /-</p>
    </div>
    <div>
      <p class="primary-txt-color">Paid By</p>
      <p class="primary-txt-color">Ashish</p>
    </div>
    <div>
      <p class="secondary-txt-color">Paid Date</p>
      <p class="secondary-txt-color">20th Sept 2021</p>
    </div>
  </div>
  <div class="done">
    <div>
      <p class="bg">Paid Amount</p>
      <p class="bg">12000 Rs /-</p>
    </div>
    <div>
      <p class="primary-txt-color">Paid By</p>
      <p class="primary-txt-color">Ashish</p>
    </div>
    <div>
      <p class="secondary-txt-color">Paid Date</p>
      <p class="secondary-txt-color">20th Sept 2021</p>
    </div>
  </div>
  
</div>
`;

function closeBtnRefresh() {
  const closeBtn = document.querySelector(".popup .close-btn");
  closeBtn.addEventListener("click", function () {
    console.log("Close button clicked !");
    popup.style.opacity = "0";
    popup.style.zIndex = "-10";
  });
}

docBtn.addEventListener("click", function () {
  popup.innerHTML = popupDocsHtml;

  closeBtnRefresh();
  popup.style.opacity = OPACITY;
  popup.style.zIndex = "100";

  const docs = document.querySelectorAll(".popup .doc .btn");
  docs.forEach((doc, i) => {
    doc.addEventListener("click", function () {
      const docType = allDocs[i].split(".")[1].toLowerCase();
      console.log(docType);
      const dimension =
        docType == "pdf" ? `width="750px" height="400px"` : `height="300px"`;
      const html = `<div class="popup" id="view_doc_popup"><div class="close-btn" id="view_doc_btn">&times;</div><div class="docs__embed">
          <h2>${allDocs[i]}</h2>
          <embed src="${allDocs[i]}" ${dimension}></div></div>`;
      document.querySelector("body").insertAdjacentHTML("afterend", html);
      const viewDocPopup = document.getElementById("view_doc_popup");
      viewDocPopup.style.opacity = "1";
      viewDocPopup.style.zIndex = "100";
      const viewDocBtn = document.getElementById("view_doc_btn");
      viewDocBtn.addEventListener("click", function () {
        viewDocPopup.style.opacity = "0";
        viewDocPopup.style.zIndex = "-10";
      });
    });
  });
});

function renderEditDetails() {
  const data = {};
  const popupRow = document.querySelectorAll(".popup .row");

  studentDetails.forEach((x) => {
    let label = x.querySelector("label").textContent.replace(/:| /g, "");
    let input = x.querySelector("p").textContent;
    data[label] = input;
  });

  popupRow.forEach((x) => {
    const lables = x.querySelectorAll("label");
    const inputs = x.querySelectorAll("input");
    lables.forEach((x, i) => {
      const key = x.textContent.replace(/:| /g, "");
      inputs[i].value = data[key];
      console.log(key, data[key]);
    });
  });
}

endDetails.addEventListener("click", function () {
  popup.innerHTML = popupEditDetailsHtml;

  popup.style.opacity = OPACITY;
  // popup.style.animation = "popupdisply 1s";
  popup.style.zIndex = "10";
  popup.classList.add("popup__animation");

  closeBtnRefresh();
  renderEditDetails();
});

paymentDetails.addEventListener("click", function () {
  popup.innerHTML = popupPaymentDetailsHtml;
  popup.style.opacity = OPACITY;
  popup.style.zIndex = "10";
  closeBtnRefresh();
});
