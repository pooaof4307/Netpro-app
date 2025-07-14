document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("net-packages");
  const totalDisplay = document.getElementById("total-price");
  let total = 0;
  const data = JSON.parse(localStorage.getItem("packages")) || [];

  data.forEach((pkg, i) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <strong>${pkg.name}</strong> - ${pkg.price} บาท
      <button onclick="subscribe(${pkg.price})">สมัคร</button>
    `;
    container.appendChild(div);
  });

  window.subscribe = (price) => {
    total += Number(price) + 5;
    totalDisplay.textContent = "ยอดรวม: " + total + " บาท";
  };
});