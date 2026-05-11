const zegar = document.querySelector('zegar');

setInterval(() => {
    const data = new Date();
    const godzina = data.getHours();
    const minuta = data.getMinutes();
    const sekunda = data.getSeconds();
    zegar.textContent = `${godzina}:${minuta}:${sekunda}`;
}, 500);