const puppeteer = require('puppeteer');

console.log('Bem vindo ao Conversor de Moedas');

async function robo() {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('');

    await browser.close();
}

robo();