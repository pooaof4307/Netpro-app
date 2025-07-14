
const sheetURL = "https://script.google.com/macros/s/AKfycbyIVmvxLxNDqevnwYmjRkNNhSQNewWB6KxN3gDf43cOB3avHMmMBO2x5H2HFPIlVPrm9Q/exec";

function loadData() {
  fetch(sheetURL)
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById("pro-list");
      container.innerHTML = "";
      data.forEach(item => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
          <h2>\${item.network}</h2>
          <p><strong>ราคา:</strong> \${item.price}</p>
          <p><strong>ความเร็ว:</strong> \${item.speed}</p>
          <p><strong>ระยะเวลา:</strong> \${item.duration}</p>
          <a href="\${item.link}" target="_blank">สมัครเลย</a>
        `;
        container.appendChild(card);
      });
    })
    .catch(() => {
      document.getElementById("pro-list").textContent = "ไม่สามารถโหลดข้อมูลได้";
    });
}

window.onload = loadData;
