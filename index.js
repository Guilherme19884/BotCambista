const puppeteer = require('puppeteer');

console.log('Bem vindo ao Conversor de Moedas');

async function robo() {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    const MoedaBase = 'dolar';
    const MoedaDestino = 'real';
    const urlConversao = `https://www.google.com/search?q=${MoedaBase}r+para+${MoedaDestino}l&sca_esv=558942685&sxsrf=AB5stBhPcOYGY3GmZQLGtsVRcjnz55vPNQ%3A1692668390136&source=hp&ei=5hHkZLapBenF5OUP9aezwAk&iflsig=AD69kcEAAAAAZOQf9mkPvhfBJu5wqT95flUYy1_-nzDu&ved=0ahUKEwi2tPSQke-AAxXpIrkGHfXTDJgQ4dUDCAk&uact=5&oq=${MoedaBase}r+para+${MoedaDestino}&gs_lp=Egdnd3Mtd2l6Ig9kb2xhciBwYXJhIHJlYWwyEBAAGIAEGLEDGIMBGEYYggIyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgARI5DxQ9w5YrTlwAngAkAEAmAGgAaAB2RKqAQQwLjE2uAEDyAEA-AEBqAIKwgIHECMY6gIYJ8ICBxAjGIoFGCfCAgsQABiABBixAxiDAcICERAuGIAEGLEDGIMBGMcBGNEDwgILEAAYigUYsQMYgwHCAgwQIxiKBRgTGIAEGCfCAhEQLhiKBRixAxiDARjHARjRA8ICCBAAGIAEGLEDwgINEAAYgAQYsQMYgwEYCsICDhAAGIAEGLEDGIMBGMkDwgIIEAAYgAQYkgPCAg4QLhiABBixAxjHARjRA8ICChAAGIAEGLEDGArCAgQQABgD&sclient=gws-wiz`;


    await page.goto(urlConversao);

    await browser.close();
}

robo();