function addNet() {
  const name = document.getElementById("netName").value;
  const price = parseFloat(document.getElementById("netPrice").value);
  if (!name || isNaN(price)) return;

  const netList = JSON.parse(localStorage.getItem("nets") || "[]");
  netList.push({ name, price });
  localStorage.setItem("nets", JSON.stringify(netList));
  renderNetList();
}

function renderNetList() {
  const netList = JSON.parse(localStorage.getItem("nets") || "[]");
  const listEl = document.getElementById("netList");
  listEl.innerHTML = "";
  netList.forEach((net, index) => {
    const li = document.createElement("li");
    li.textContent = `${net.name} - ${net.price.toFixed(2)} บาท`;
    listEl.appendChild(li);
  });
}

window.onload = renderNetList;
