function addNet() {
  const name = document.getElementById("netName").value;
  const price = parseFloat(document.getElementById("netPrice").value);
  console.log("ชื่อโปร:", name, "ราคา:", price);
  if (!name || isNaN(price)) {
    alert("กรุณากรอกชื่อโปรเน็ตและราคาที่ถูกต้อง");
    return;
  }

  const netList = JSON.parse(localStorage.getItem("nets") || "[]");
  netList.push({ name, price });
  localStorage.setItem("nets", JSON.stringify(netList));
  renderNetList();
}
