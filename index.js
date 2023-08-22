const puppeteer = require('puppeteer');
const readlineSync = require('readline-sync');


console.log('Bem vindo ao Conversor de Moedas');

async function robo() {
    const browser = await puppeteer.launch({ headless: 'new'});
    const page = await browser.newPage();
    const MoedaBase = readlineSync.question('informe uma moeda base: ') || 'dolar';
    const MoedaDestino = readlineSync.question('Informe uma moeda destino: ') || 'real';
    
    const urlConversao = `https://www.google.com/search?q=${MoedaBase}r+para+${MoedaDestino}l&sca_esv=558942685&sxsrf=AB5stBhPcOYGY3GmZQLGtsVRcjnz55vPNQ%3A1692668390136&source=hp&ei=5hHkZLapBenF5OUP9aezwAk&iflsig=AD69kcEAAAAAZOQf9mkPvhfBJu5wqT95flUYy1_-nzDu&ved=0ahUKEwi2tPSQke-AAxXpIrkGHfXTDJgQ4dUDCAk&uact=5&oq=${MoedaBase}r+para+${MoedaDestino}&gs_lp=Egdnd3Mtd2l6Ig9kb2xhciBwYXJhIHJlYWwyEBAAGIAEGLEDGIMBGEYYggIyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgARI5DxQ9w5YrTlwAngAkAEAmAGgAaAB2RKqAQQwLjE2uAEDyAEA-AEBqAIKwgIHECMY6gIYJ8ICBxAjGIoFGCfCAgsQABiABBixAxiDAcICERAuGIAEGLEDGIMBGMcBGNEDwgILEAAYigUYsQMYgwHCAgwQIxiKBRgTGIAEGCfCAhEQLhiKBRixAxiDARjHARjRA8ICCBAAGIAEGLEDwgINEAAYgAQYsQMYgwEYCsICDhAAGIAEGLEDGIMBGMkDwgIIEAAYgAQYkgPCAg4QLhiABBixAxjHARjRA8ICChAAGIAEGLEDGArCAgQQABgD&sclient=gws-wiz`;
    await page.goto(urlConversao);

    const resultado = await page.evaluate(() => {
        return document.querySelector('.lWzCpb.a61j6').value;
        
    })

    console.log(`O resultado da ${MoedaBase} para ${MoedaDestino} é: ${resultado}`);
    await browser.close();
}

robo();