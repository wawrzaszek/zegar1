const zegar = document.querySelector('zegar');

setInterval(() => {
    const data = new Date();
    const godzina = String(data.getHours()).padStart(2, '0');
    const minuta = String(data.getMinutes()).padStart(2, '0');
    const sekunda = String(data.getSeconds()).padStart(2, '0');
    zegar.textContent = `${godzina}:${minuta}:${sekunda}`;
}, 500);


const dataElement = document.querySelector('data');

setInterval(() => {
    const data = new Date();
    const rok = String(data.getFullYear()).padStart(4, '0');
    const miesiac = String(data.getMonth() + 1).padStart(2, '0');
    const dzien = String(data.getDate()).padStart(2, '0');
    dataElement.textContent = `${rok}-${miesiac}-${dzien}`;
}, 1000);