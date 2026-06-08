# MEF Sistem Grijanja — Web Aplikacija

**Autor:** Belma Hodžić  
**Predmet:** Energijski menadžment — projektni zadatak  
**Institucija:** Mašinski fakultet Sarajevo  
**Period analize:** 15.10.2016. – 15.12.2016.

---

## Opis

Interaktivna web aplikacija za analizu sistema grijanja MEF-a sa dvije stranice:

- **`/analiza`** — interaktivni dijagrami s filterima po mjesecu, rezoluciji i veličinama
- **`/regresije`** — četiri regresijske krive s tačkama raspršenja i formulama

---

## Pokretanje

### Korak 1 — Konverzija Excel → CSV

> Potrebno jednom prije pokretanja aplikacije.

```bash
cd mef-grijanje-app
python scripts/convert_excel_to_csv.py
```

Skripta čita `../Projektni-claude-prva-verzija KRAJNJA.xlsx` i generiše:
- `public/data/satna.csv` — 1487 satnih mjerenja
- `public/data/dnevna.csv` — 62 dnevne agregacije
- `public/data/stacionarna.csv` — 113 stacionarnih tačaka

### Korak 2 — Instalacija zavisnosti

```bash
npm install
```

### Korak 3 — Pokretanje u razvoju

```bash
npm run dev
```

Otvorite `http://localhost:5173` u pregledaču.

### Build za produkciju

```bash
npm run build
npm run preview
```

---

## Tehnički stack

| Tehnologija | Verzija | Uloga |
|---|---|---|
| React | 18 | UI framework |
| Vite | 8 | Build tool |
| Recharts | 2 | Dijagrami |
| React Router | 6 | Routing |
| PapaParse | 5 | CSV parsing |
| Tailwind CSS | 3 | Stilizovanje |

---

## Struktura projekta

```
mef-grijanje-app/
├── public/
│   └── data/
│       ├── satna.csv          ← satna mjerenja (1487 redova)
│       ├── dnevna.csv         ← dnevne agregacije (62 dana)
│       └── stacionarna.csv   ← stacionarna stanja (113 tačaka)
├── scripts/
│   └── convert_excel_to_csv.py
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── pages/
│   │   ├── Analiza.jsx
│   │   └── Regresije.jsx
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── NavBar.jsx
│   │   ├── MonthSelector.jsx
│   │   ├── ResolutionSelector.jsx
│   │   ├── VariableMultiSelect.jsx
│   │   ├── InteractiveChart.jsx
│   │   ├── InfoPanel.jsx
│   │   ├── StatCard.jsx
│   │   └── RegressionCard.jsx
│   ├── hooks/
│   │   ├── useData.js
│   │   └── useStatistics.js
│   ├── utils/
│   │   ├── constants.js
│   │   ├── dataFiltering.js
│   │   ├── statistics.js
│   │   └── workHours.js
│   └── styles/
│       └── index.css
└── README.md
```

---

## Regresijske formule

| # | Formula | R² | N |
|---|---|---|---|
| 1 | ΔE = −0,00806·T_ok + 0,2120 [MWh/h] | 0,711 | ~335 |
| 2 | ΔE = 0,0110·ΔT + 0,0149 [MWh/h] | 0,727 | ~91 |
| 3 ⭐ | **ΔE_dnevna = −0,0795·T_ok + 2,094 [MWh/dan]** | **0,900** | 44 |
| 4 | ΔE_dnevna = −0,0890·ΔT + 0,3394 [MWh/dan] | 0,812 | 44 |
