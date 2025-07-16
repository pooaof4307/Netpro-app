// config.js

// 🔗 URL ของ Google Apps Script ที่ใช้เชื่อมต่อกับ Google Sheets
// คุณต้องใช้ URL ที่ได้จากการ Deploy > Web App ใน Google Apps Script
const API_BASE_URL = "https://script.google.com/macros/s/AKfycbym-g1ENvZbr5n11nKUo27ZX1R7tk1l9PZrC01WJx3VBF594n93iw_I_brCu6RW2Bahtw/exec";

// 🧠 ฟังก์ชันรวม (optional): ใช้เรียก API GET
async function fetchData(action) {
  try {
    const response = await fetch(`${API_BASE_URL}?action=${action}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("เกิดข้อผิดพลาดในการดึงข้อมูล:", error);
    return null;
  }
}

// 📤 ฟังก์ชันรวม (optional): ใช้เรียก API POST
async function postData(payload) {
  try {
    const response = await fetch(API_BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("เกิดข้อผิดพลาดในการส่งข้อมูล:", error);
    return { success: false, message: "ส่งข้อมูลไม่สำเร็จ" };
  }
}
