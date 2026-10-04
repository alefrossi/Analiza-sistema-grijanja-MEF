# Analiza sistema radijatorskog grijanja

Web aplikacija za obradu i vizualizaciju podataka sistema energetskog menadžmenta
instaliranog na zgradi s radijatorskim grijanjem. Aplikacija obrađuje satna
mjerenja temperaturnih i protočnih veličina te na osnovu njih izvodi
termotehničku i statističku analizu rada sistema.

## Funkcionalnosti

Aplikacija omogućava:

- Učitavanje i konsolidaciju satnih mjerenja iz izvornih tabelarnih zapisa
  (temperatura razvoda, temperatura povrata, protok cirkulacione pumpe,
  vanjska temperatura, temperature karakterističnih prostorija).
- Agregaciju podataka na satnoj i dnevnoj rezoluciji.
- Filtriranje mjerenja prema fizikalno opravdanim kriterijima
  (radni dani, aktivan sistem, stacionarna stanja, uklanjanje tranzijenata i
  outliera po IQR pravilu).
- Interaktivni mjesečni pregled sa višestrukim selektorom veličina koje se
  istovremeno prikazuju na dijagramu.
- Detekciju i vizualno označavanje perioda rada i mirovanja sistema
  (ON/OFF overlay).
- Prikaz razlike temperature razvoda i povrata (ΔT_rp) kao dijagnostičkog
  pokazatelja hidrauličkog stanja sistema.
- Sumarnu statistiku za izabrani mjesec: raspon vanjske temperature,
  prosječni protok, prosječne temperature razvoda i povrata, srednje vrijeme
  rada sistema, raspodjela radnih sati u hladnim i toplim danima.
- Konstrukciju i prikaz teorijske krive grijanja prema jednačini s eksponentom
  radijatora n = 1,3 i poređenje sa mjerenim stacionarnim operativnim tačkama.
- Prikaz četiri linearne regresije potrošnje energije (satne i dnevne,
  u funkciji vanjske temperature odnosno temperaturne razlike) sa
  pripadajućim koeficijentima determinacije.

## Teorijska osnova

Analiza se oslanja na kvazi-stacionarni model gubitaka prostora prema
okolini, u kojem je karakteristika objekta K definisana kao:

    Φ_ok = K · (t_u − t_ok)

Teorijska kriva grijanja za sistem s konstantnim masenim protokom
izvedena je iz istovremenih bilansa po prostoru, kotlu i radijatoru:

    t_R = t_u + Δt_m^N · X^(1/n) + (ΔT_rp^N / 2) · X
    t_P = t_u + Δt_m^N · X^(1/n) − (ΔT_rp^N / 2) · X

gdje je X = (t_u − t_ok) / (t_u^N − t_ok^N) bezdimenzijska temperaturna razlika,
a n = 1,3 eksponent za standardne radijatore.

Linearna regresija dnevne potrošnje u funkciji vanjske temperature
predstavlja energetski potpis zgrade; nagib regresijske prave direktno je
proporcionalan karakteristici objekta K.

## Tehnologije

- React (Vite) za frontend
- Recharts za vizualizaciju
- Tailwind CSS za styling
- React Router za navigaciju
- PapaParse za obradu CSV ulaza
- Python (pandas) za pretprocesiranje izvornih mjerenja

## Struktura projekta

    .
    ├── public/data/           CSV ulazi (satne, dnevne i stacionarne vrijednosti)
    ├── scripts/               Python skripte za konverziju izvornih podataka
    ├── src/
    │   ├── pages/             Analiza i Regresije
    │   ├── components/        UI komponente (selektori, grafici, info panel)
    │   ├── hooks/             useData, useStatistics
    │   └── utils/             Filtriranje, agregacija, statistika, konstante
    └── docs/                  Tehnička dokumentacija

## Pokretanje

    git clone https://github.com/<username>/<repo>.git
    cd <repo>

    python scripts/convert_excel_to_csv.py
    npm install
    npm run dev

Development server pokreće se na http://localhost:5173.

## Autor

Belma Hodžić
Mašinski fakultet, Univerzitet u Sarajevu
Odsjek Energetika

## Licenca

Akademska upotreba. Izvorni mjerni podaci su vlasništvo institucije
koja je obezbijedila sistem energetskog menadžmenta.

slike (docs/images/slika 12.png)
