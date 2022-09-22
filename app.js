const iconMenu = document.querySelector(".menu__icon");
if (iconMenu) {
  const navBoddy = document.querySelector(".nav");
  iconMenu.addEventListener("click", function (e) {
    iconMenu.classList.toggle("_active");
    navBoddy.classList.toggle("_active");
  });
}

const start = document.getElementById("start");
if (start) {
  start.addEventListener("click", function (e) {
    start.classList.toggle("_start");
  });
}

// Modals
let mainBtn = document.querySelectorAll(".btn");
let wrapper = document.querySelector(".vwrapper");
let close = document.querySelectorAll(".close");
let signInbtn = document.querySelectorAll(".form-btn");
let addBtn = document.querySelectorAll(".adding-card__form-btn");

function re() {
  mainBtn.forEach((elem) => {
    elem.addEventListener("click", () => {
      let dataN = elem.dataset.btn;
      modl(dataN);
    });
  });
}
re();

function modl(dataN) {
  let vmodal = document.querySelector(
    '.js-modal[data-btn="' + `${dataN}` + '"]'
  );
  vmodal.classList.add("vmodal-window_active");
  wrapper.classList.add("vwrapper-active");
  closs(vmodal);
}

function closs(vmodal) {
  window.addEventListener("click", (e) => {
    if (e.target == wrapper) {
      vmodal.classList.remove("vmodal-window_active");
      wrapper.classList.remove("vwrapper-active");
    }
  });
  close.forEach((item) => {
    item.addEventListener("click", () => {
      vmodal.classList.remove("vmodal-window_active");
      wrapper.classList.remove("vwrapper-active");
    });
  });

  addBtn.forEach((item) => {
    item.addEventListener("click", () => {
      vmodal.classList.remove("vmodal-window_active");
      wrapper.classList.remove("vwrapper-active");
    });
  });

  signInbtn.forEach((item) => {
    item.addEventListener("click", () => {
      vmodal.classList.remove("vmodal-window_active");
      wrapper.classList.remove("vwrapper-active");
    });
  });

  document.getElementById("submit").onclick = myClick;

  function myClick() {
    let formEmail = document.querySelector(".form-email").value;
    console.log(formEmail);
    let formPassword = document.querySelector(".form-password").value;
    console.log(formPassword);
    let avatar = document.querySelector(".dropbtn");
    let btnSign = document.getElementById("btnSign");

    location.reload();

    avatar.style.display = "block";
    btnSign.style.display = "none";
    i1.value = "";
    i2.value = "";
  }
}
// vmodals

document.getElementById("add").onclick = cardName;

function cardName() {
  let cardName = document.querySelector(".adding-card__form-input").value;
  console.log(cardName);
  modalSign2.style.display = "none";
}

let exp = document.getElementById("exp");

exp.onclick = function () {
  console.log("click");
};

let getIt = document.getElementById("getIt");

getIt.onclick = function () {
  console.log("click");
};

let star = document.getElementById("btn");

// btn.onclick = function(){
//     console.log('click')
// };

document.getElementById("email").onclick = email;

function email() {
  let formInput = document.querySelector(".input").value;
  console.log(formInput);
}

// Drop Down Avatar
document.getElementById("dropbtn").onclick = myFunction;
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    let dropdowns = document.getElementsByClassName("dropdown-content__av");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
// Adding card
if (!localStorage.getItem("cards")) {
  localStorage.setItem("cards", JSON.stringify([]));
}

document
  .querySelector("button.adding-card__form-btn")
  .addEventListener("click", function (e) {
    let name = document.getElementById("cardName").value;
    let description = document.getElementById("cardDescription").value;
    let imageName = document.getElementById("cardImageName").value;
    if (name && description && imageName) {
      document.getElementById("cardName").value = "";
      document.getElementById("cardDescription").value = "";
      document.getElementById("cardImageName").value = "";

      const cards = JSON.parse(localStorage.getItem("cards"));
      cards.push({
        cardId: `card${cards.length}`,
        cardName: name,
        cardDescription: description,
        cardImage: imageName,
      });

      update_card();
      localStorage.setItem("cards", JSON.stringify(cards));
      location.reload();
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="">Why do I have this issue?</a>',
      });
    }
  });

update_card();

let table1 = document.getElementById("table1");

function update_card() {
  let table1 = document.getElementById("table1");
  let cardBody = document.querySelector(".cards__gen");
  let cards = JSON.parse(localStorage.getItem("cards"));
  cardBody.innerHTML = "";

  if (cards.length) {
    table1.hidden = false;

    for (let i = 0; i < cards.length; i++) {
          cardBody.insertAdjacentHTML("beforeend",
          `
            <li class="btn btn--headsets__item-set" >
              <img src="${cards[i].cardImage}" class="item-set__photo" alt="photo" data-btn="modas" data-id="${cards[i].cardId}"/>
              <div class="item-set__dscr">
                <h5 class="item-set__dscr-name">${cards[i].cardName}</h5>
                <p class="item-set__dscr-text">
                  ${cards[i].cardDescription}
                </p>
              </div>
          </li>
        `
      );

      
    }
  } else {
    table1.hidden = true;
  }
  const cardModal = $.modal({
    title: "Metaverse",
    closable: true,
    with: "max-content",
  });

  document.addEventListener("click", (event) => {
    console.log('opens')
    const btnType = event.target.dataset.btn;
    const id = event.target.dataset.id;

    if (btnType === "modas") {
      const card = cards.find((f) => f.cardId === id);

      cardModal.setContent(`
        <img class="item__page__photo" src="${card.cardImage}">
        <h3 class="item__page__title">${card.cardName}</h3>
        <p class="item__page__text">${card.cardDescription}</p>
      `);
      cardModal.open();
    }
  });
}

// Adding card

// Логіка актівності і не актівності

let addingBTN = document.querySelector("#addingBTN");
addingBTN.setAttribute("disabled", true);
addingBTN.style.background = "gray";
table1.style.display = "none"; // ця строка блокує відображення створених картинок поки юзер не зайде у профіль
let tooltipElem;

document.onmouseover = function (event) {
  let target = event.target;

  let tooltipHtml = target.dataset.tooltip;
  if (!tooltipHtml) return;

  tooltipElem = document.createElement("div");
  tooltipElem.className = "tooltip";
  tooltipElem.innerHTML = tooltipHtml;
  document.body.append(tooltipElem);

  let coords = target.getBoundingClientRect();

  let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
  if (left < 0) left = 0;

  let top = coords.top - tooltipElem.offsetHeight - 5;
  if (top < 0) {
    top = coords.top + target.offsetHeight + 5;
  }

  tooltipElem.style.left = left + "px";
  tooltipElem.style.top = top + "px";
};

document.onmouseout = function (e) {
  if (tooltipElem) {
    tooltipElem.remove();
    tooltipElem = null;
  }
};

// addingBTN.oninput = () => {
//   if (localStorage.getItem("User") !=null ||localStorage.getItem("Password")!=null){
//     addingBTN.removeAttribute('disabled');
//   } else {
//     addingBTN.setAttribute('disabled', true);
//   }
// }

// Логіка актівності і не актівності

//   Функція виходу з профіля

// logOut.onclick = function(){
//   dropbtn.style.display = "none";
//   btnSign.style.display = "block";
//   // addingBTN.setAttribute('disabled', true);

// }
const loginUser = () => {
  if (
    localStorage.getItem("User") != null ||
    localStorage.getItem("Password") != null
  ) {
    btnSign.style.display = "none";
    dropbtn.style.display = "block";
    addingBTN.removeAttribute("disabled");
    addingBTN.style.background =
      "linear-gradient(99.05deg, #BC3CD8 0.07%, #C54B8C 106.32%)";
    table1.style.display = "block"; // ця строка розблоковує відображених карток
  } else {
    // let logOut = document.getElementById('logOut');
    // logOut.onclick = function(){
    // console.log('click')
    // dropbtn.style.display = "none";
    // btnSign.style.display = "block";
    // addingBTN.setAttribute('disabled', true);
    // }
  }
};
loginUser();
let logOut = document.getElementById("logOut");
logOut.onclick = function () {
  console.log("click");
  localStorage.removeItem("User") || localStorage.removeItem("Password");
  location.reload();
  dropbtn.style.display = "none";
  btnSign.style.display = "block";
  wrapper.style.display = "none";
  // addingBTN.setAttribute('disabled', true);
};

document.addEventListener("DOMContentLoaded", (Event) => {
  const signInBtnClick = document.getElementById("submit");
  const signInForm = document.getElementById("signInForm");
  const userEmail = document.getElementById("i1");
  const userPassword = document.getElementById("i2");

  const handleSignIn = () => {
    localStorage.setItem("User", JSON.stringify(userEmail.value));
    localStorage.setItem("Password", JSON.stringify(userPassword.value));
  };
  signInBtnClick.addEventListener("click", handleSignIn);
  localStorage.setItem("User", JSON.stringify(signInForm));
});
