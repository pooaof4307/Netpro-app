
const plans = JSON.parse(localStorage.getItem("plans") || "[]");
const plansDiv = document.getElementById("plans");
const totalPriceEl = document.getElementById("totalPrice");
let total = 0;

plans.forEach((plan, index) => {
  const div = document.createElement("div");
  div.className = "plan-card";
  div.innerHTML = `
    <strong>${plan.name}</strong><br>
    ราคา: ${plan.price} บาท<br>
    <button onclick="subscribe(${index})">สมัคร</button>
  `;
  plansDiv.appendChild(div);
});

function subscribe(index) {
  const fee = 5;
  total += plans[index].price + fee;
  totalPriceEl.textContent = total;
}
