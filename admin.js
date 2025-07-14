document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "login.html";
  }

  const listDiv = document.getElementById("admin-packages");
  const updateList = () => {
    listDiv.innerHTML = "";
    const data = JSON.parse(localStorage.getItem("packages")) || [];
    data.forEach((pkg, index) => {
      const div = document.createElement("div");
      div.innerHTML = \`
        \${pkg.name} - \${pkg.price} บาท
        <button onclick="removePackage(\${index})">ลบ</button>
      \`;
      listDiv.appendChild(div);
    });
  };

  window.addPackage = () => {
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const data = JSON.parse(localStorage.getItem("packages")) || [];
    data.push({ name, price });
    localStorage.setItem("packages", JSON.stringify(data));
    updateList();
  };

  window.removePackage = (index) => {
    const data = JSON.parse(localStorage.getItem("packages")) || [];
    data.splice(index, 1);
    localStorage.setItem("packages", JSON.stringify(data));
    updateList();
  };

  window.logout = () => {
    localStorage.removeItem("loggedIn");
    window.location.href = "login.html";
  };

  updateList();
});