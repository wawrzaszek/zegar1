# Zegar z pogodą i ciekawostką

Prosty projekt zegara przeglądarkowego prezentujący:
- aktualny czas
- aktualną datę
- aktualną pogodę dla Bielska-Białej (pobieraną z API Open-Meteo)
- losową ciekawostkę co 15 sekund

## Uruchomienie
1. Otwórz plik `index.html` w przeglądarce.
2. Zegar i data odświeżają się automatycznie.
3. Pogoda jest pobierana przy starcie oraz co 10 minut.
4. Ciekawostka zmienia się co 15 sekund.

## Pliki
- `index.html` - struktura strony
- `skrypt.js` - logika zegara, daty, pogody i ciekawostek
- `led/stylesheet.css` - style dla strony

## Uwagi
- Do poprawnego działania pogody potrzebne jest połączenie internetowe.
- API używane w projekcie: [Open-Meteo](https://open-meteo.com/)

## Autor
- Szymon Mosor
