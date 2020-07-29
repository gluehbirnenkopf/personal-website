
// index.js
const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("http://localhost:3000/", {
    waitUntil: "networkidle2"
  });
  await page.setViewport({ width: 1680, height: 1050 });
  await page.pdf({
    path: "pdf/cv.pdf",
    format: "A4",
    landscape: false,
    printBackground: true,
    displayHeaderFooter: false,
    margin: {
      top: '38px',
      bottom: '38px',
    }
  });

  await browser.close();
})();
