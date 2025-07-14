
if (!localStorage.getItem("loggedIn")) {
  window.location.href = "login.html";
}

const nameInput = document.getElementById("name");
const priceInput = document.getElementById("price");
const planList = document.getElementById("planList");

let plans = JSON.parse(localStorage.getItem("plans") || "[]");

function renderPlans() {
  planList.innerHTML = "";
  plans.forEach((plan, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${plan.name} - ${plan.price} บาท 
      <button onclick="deletePlan(${index})">ลบ</button>
    `;
    planList.appendChild(li);
  });
}

function addPlan() {
  const name = nameInput.value;
  const price = Number(priceInput.value);
  if (name && price) {
    plans.push({ name, price });
    localStorage.setItem("plans", JSON.stringify(plans));
    nameInput.value = "";
    priceInput.value = "";
    renderPlans();
  }
}

function deletePlan(index) {
  plans.splice(index, 1);
  localStorage.setItem("plans", JSON.stringify(plans));
  renderPlans();
}

function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "login.html";
}

renderPlans();
