const zegar = document.querySelector('zegar');

setInterval(() => {
    const data = new Date();
    const godzina = String(data.getHours()).padStart(2, '0');
    const minuta = String(data.getMinutes()).padStart(2, '0');
    const sekunda = String(data.getSeconds()).padStart(2, '0');
    zegar.textContent = `${godzina}:${minuta}:${sekunda}`;
}, 500);