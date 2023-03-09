let total = 0;
const totalParagraph = document.querySelector(".total-paragraph");
const cola = document.querySelector(".cola");
const peanuts = document.querySelector(".peanuts");
const chocolate = document.querySelector(".chocolate");
const gummies = document.querySelector(".gummies");
const form = document.querySelector("form");
const coinContainer = document.querySelector(".coin-container");
const bulb = document.querySelector(".bulb");
const onBtn = document.querySelector(".onBtn");
const offBtn = document.querySelector(".offBtn");
const toggleBtn = document.querySelector(".toggleBtn");
const endBtn = document.querySelector(".endBtn");
const one = document.querySelector(".one");

// cola.addEventListener("click", () => {
//   total += 2;
//   totalParagraph.textContent = `Total: $${total}.00`;
// });
// peanuts.addEventListener("click", () => {
//   total += 3;
//   totalParagraph.textContent = `Total: $${total}.00`;
// });
// chocolate.addEventListener("click", () => {
//   total += 4;
//   totalParagraph.textContent = `Total: $${total}.00`;
// });
// gummies.addEventListener("click", () => {
//   total += 6;
//   totalParagraph.textContent = `Total: $${total}.00`;
// });

// e.target is the element(none) that initiatred the event

one.addEventListener("click", (e) => {
  if (e.target.localName === "button") {
    const amount = parseInt(e.target.getAttribute("data-amount"));
    total += amount;
    totalParagraph.textContent = `Total $${total}.00`;
  }
  //   console.dir(e); to find the target name
});

// Mini challenge #2

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const amount = document.querySelector("#amount");
  const type = document.querySelector("#type");
  for (let i = 0; i < amount.value; i++) {
    const newLi = document.createElement("li");
    newLi.classList.add("coin", type.value);
    newLi.textContent = type.value;
    newLi.addEventListener("click", () => {
      newLi.remove();
    });
    coinContainer.append(newLi);
  }
});

// Part Three
onBtn.addEventListener("click", () => {
  bulb.classList.add("on");
});

offBtn.addEventListener("click", () => {
  bulb.classList.remove("on");
});

toggleBtn.addEventListener("click", () => {
  bulb.classList.toggle("on");
});

endBtn.addEventListener("click", () => {
  bulb.remove();
  const buttons = document.querySelectorAll(".three button");
  buttons.forEach((item) => {
    item.disabled = true;
  });
});
