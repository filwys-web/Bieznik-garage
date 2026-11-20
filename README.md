# Bieżnik Garage

Polskojęzyczna strona serwisu opon z ofertą, poradami przed wizytą i galerią. Astro buduje trzy statyczne podstrony i zachowuje adresy `/uslugi.html` oraz `/galeria.html`.

## Uruchomienie

Wymagany jest Node.js 22.12 lub nowszy.

```sh
npm ci
npm run dev
npm run build
```

Do hostingu statycznego służy katalog `dist/`. Na Vercel użyj presetu Astro, polecenia `npm run build` i katalogu wyjściowego `dist`.

## Dane warsztatu

Numer telefonu, e-mail, adres i godziny otwarcia ustaw w `src/workshop.ts`. Strona pokazuje tylko uzupełnione pola.

## Fotografie

Pliki WebP w `public/images/` pochodzą z poniższych źródeł. Galerie przedstawiają przykładowe stanowiska i czynności serwisowe.

- `warsztat` — [Unsplash](https://unsplash.com/photos/mechanic-fixing-a-car-tire-inside-a-garage-Pw31nry006Y)
- `kolo` — [Pexels](https://www.pexels.com/photo/mechanic-changing-car-wheel-17600886/)
- `zaplecze` — [Unsplash](https://unsplash.com/photos/tires-and-balancing-machine-in-workshop--ApM9rASMbA)
- `montaz` — [Unsplash](https://unsplash.com/photos/person-mounting-car-tire-in-workshop-45oilnNreRE)
- `podnosnik` — [Unsplash](https://unsplash.com/photos/a-car-is-on-a-lift-in-a-garage-0OPC0-DfEbM)
- `felgi` — [Unsplash](https://unsplash.com/photos/person-stacking-tires-in-auto-shop-zabS4vKbCuM)
- `opony` — [Pexels](https://www.pexels.com/photo/man-in-blue-long-sleeve-suit-holding-black-tire-6870325/)
- `stanowisko` — [Pexels](https://www.pexels.com/photo/car-on-lift-at-auto-the-repair-shop-8985667/)

[Licencja Unsplash](https://unsplash.com/license) · [Licencja Pexels](https://www.pexels.com/license/)
