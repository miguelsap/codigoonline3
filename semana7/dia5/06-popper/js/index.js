const nombre = document.querySelector("#nombre");
const password = document.querySelector("#password");
const tooltip = document.querySelector("#tooltip");
const tooltip2 = document.querySelector("#tooltip2");

let popperInstance = null;
let popperInstance2 = null;

function create() {
  popperInstance = Popper.createPopper(nombre, tooltip, {
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, 8],
        },
      },
    ],
    placement: "right",
  });
}

function destroy() {
  if (popperInstance) {
    popperInstance.destroy();
    popperInstance = null;
  }
}

function show() {
  tooltip.setAttribute("data-show", "");
  create();
}

function hide() {
  tooltip.removeAttribute("data-show");
  destroy();
}

const showEvents = ["mouseenter", "focus"];
const hideEvents = ["mouseleave", "blur"];

showEvents.forEach((event) => {
  nombre.addEventListener(event, show);
});

hideEvents.forEach((event) => {
  nombre.addEventListener(event, hide);
});

function create2() {
  popperInstance2 = Popper.createPopper(password, tooltip2, {
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, 8],
        },
      },
    ],
    placement: "right",
  });
}

function destroy2() {
  if (popperInstance2) {
    popperInstance2.destroy();
    popperInstance2 = null;
  }
}

function show2() {
  tooltip2.setAttribute("data-show", "");
  create2();
}

function hide2() {
  tooltip2.removeAttribute("data-show");
  destroy2();
}

const showEvents2 = ["mouseenter", "focus"];
const hideEvents2 = ["mouseleave", "blur"];

showEvents2.forEach((event) => {
  password.addEventListener(event, show2);
});

hideEvents2.forEach((event) => {
  password.addEventListener(event, hide2);
});
