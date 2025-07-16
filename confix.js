// config.js

// 🔗 URL ของ Google Apps Script ที่ใช้เชื่อมต่อกับ Google Sheets
// คุณต้องใช้ URL ที่ได้จากการ Deploy > Web App ใน Google Apps Script
const API_BASE_URL = "https://script.google.com/macros/s/AKfycbw5SrBrgBHYsgujlcDieqrD4yemWZMqjthJDjqjc0fuQmUcePuKSdCxBOoI6Je5L7IIlg/exec";

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
const API_URL = "https://script.google.com/macros/s/AKfycbwG6_MYZueOUg6g8Sak-dxg_F-U3zqywZ6rIaC--E1ofSy1Yafv-ucUzUuyuk_GhZW9_g/exec";  // แก้เป็น URL Web App ของคุณที่ได้จาก Google Apps Script

