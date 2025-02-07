# React + Vite

# DIGITALT CV

Detta projekt är min examinationsuppgift där uppgiften var att skapa ett digitalt CV. Applikationen är byggd med React och använder Redux för att hantera applikationens tillstånd.

## Installation

1.  Klona mitt repository
    git clone https://github.com/moggisen/Digital-CV.git

2.  Installera
    npm install

3.  Kör applikationen ( Öppna via lokalhost länken)
    npm run dev

## Teknologier som jag använda

- React
- Redux
- React Router
- CSS
- JavaScript

## Projektstruktur

- Src Innehåller all React-komponentkod och funktionalitet
- assets Där alla bilder ligger, tex projekt bilder. Bilderna är också uppdelad i fler mappar för bättre struktur
- Components Här i ligger alla .jsx filer samt tillhörande CSS filer
  pages - Här ligger alla sidor som används i applikationen
  styles - Innehåller all styling för sidorna och komponenterna
- redux: Hanterar Redux-konfigurationen
  store - Hanterar sidan globala tillstånd
  reducer - Funktion som uppdaterar vilken action som ska skickas
  actions - Action för dom aktiva länkarna
- App.jsx -
  Huvudkomponenten som ansvarar för att sätta ihop applikationen.
- main.jsx
  Starta och konfigurera applikationen samt integrera Redux-storen för tillståndshantering på global nivå.

## Sidor & Funktionalitet

- Home: En välkomstsida men välkomsttext och en knapp som tar det till mina projekt

- Projekt: Här finns listan av mina projekt jag gjort, varje projekt är klcikarbart för att visa mer detaljer och länk till GitHub-reop och live-demo

- About: Sidan där du kan läsa om mig, dör jag också använder en popup för mina färdigheter.

- Contact: Sidan där du ser hur du kan kontkata mig antingen via mejl eller sociala medier finns också ett formulär där du kan skicka ett meddelande till mig

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
