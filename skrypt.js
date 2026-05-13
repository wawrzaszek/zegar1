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

async function getPogoda() {
    try {
        const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=49.8225&longitude=19.0444&current_weather=true');
        const data = await response.json();
        const temp = data.current_weather.temperature;
        document.getElementById('weather').textContent = `Bielsko-Biala: ${temp}°C`;
    } catch (error) {
        document.getElementById('weather').textContent = 'Blad pogody';
    }
}

getPogoda();
setInterval(getPogoda, 600000); // 10 minut

const ciekawostki = [
    "Ciekawostka: JavaScript został stworzony w zaledwie 10 dni przez Brendana Eicha w 1995 r.",
    "Ciekawostka: Słowo 'bug' wzięło się od prawdziwej ćmy, która zablokowała przekaźnik w komputerze Mark II w 1947 r.",
    "Ciekawostka: Pierwszą programistką na świecie była Ada Lovelace, pracująca z maszyną analityczną w 1843 r.",
    "Ciekawostka: Pierwsza mysz komputerowa z 1964 r. była wykonana z drewna.",
    "Ciekawostka: Margaret Hamilton ręcznie napisała kluczowy kod dla misji Apollo 11, który uratował lądowanie na Księżycu."
];

function losujCiekawostke() {
    const losowyIndex = Math.floor(Math.random() * ciekawostki.length);
    document.getElementById('fact').textContent = ciekawostki[losowyIndex];
}

losujCiekawostke();
setInterval(losujCiekawostke, 15000); // co 15 sekund