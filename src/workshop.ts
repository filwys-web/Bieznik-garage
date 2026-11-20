export const workshop = {
  name: 'Bieżnik Garage',
  phone: '',
  email: '',
  address: '',
  hours: '',
};

export const hasContact = Boolean(
  workshop.phone || workshop.email || workshop.address || workshop.hours
);
export const phoneLink = workshop.phone
  ? `tel:${workshop.phone.replace(/[^+\d]/g, '')}`
  : undefined;

export const services = [
  {
    id: 'wymiana',
    title: 'Wymiana opon',
    summary: 'Zakładamy opony na felgi albo przekładamy gotowy komplet kół.',
    description: 'Jeśli przywozisz same opony, zdejmujemy stary komplet z felg, zakładamy nowy i wyważamy koła. Przy przekładce całych kół sprawdzamy stan opon i ustawiamy ciśnienie.',
  },
  {
    id: 'wywazanie',
    title: 'Wyważanie kół',
    summary: 'Przy zmianie opon lub gdy kierownica drży podczas jazdy.',
    description: 'Jeśli kierownica zaczyna drżeć przy wyższej prędkości, warto zacząć od sprawdzenia kół. Na wyważarce sprawdzamy, czy trzeba dołożyć lub wymienić ciężarki.',
  },
  {
    id: 'naprawa',
    title: 'Naprawa przebitej opony',
    summary: 'Szukamy miejsca, w którym ucieka powietrze.',
    description: 'Sprawdzamy oponę, zawór i miejsce styku z felgą. Przy przebiciu zdejmujemy oponę i oglądamy ją od środka. Po sprawdzeniu powiemy, czy nadaje się do naprawy.',
  },
  {
    id: 'felgi',
    title: 'Kontrola felg i opon',
    summary: 'Sprawdzamy felgi po uderzeniu i opony, które ścierają się nierówno.',
    description: 'Po uderzeniu w dziurę lub krawężnik oglądamy obręcz pod kątem wgnieceń i pęknięć. Sprawdzamy też, czy bieżnik zużywa się równo i czy opona nie ma wybrzuszeń.',
  },
];

export const photos = [
  { id: 'montaz', alt: 'Mechanik w czerwonych rękawicach pracuje przy montażownicy' },
  { id: 'warsztat', alt: 'Mechanik pochylony nad oponą w otwartej bramie garażu' },
  { id: 'kolo', alt: 'Mechanik pracuje przy przednim kole samochodu' },
  { id: 'zaplecze', alt: 'Opony ułożone obok niebieskiej wyważarki' },
  { id: 'podnosnik', alt: 'Starszy srebrny samochód na podnośniku ze zdjętym kołem' },
  { id: 'opony', alt: 'Mechanik trzyma oponę obok samochodu' },
  { id: 'felgi', alt: 'Felgi na ścianie i stos opon na podłodze' },
  { id: 'stanowisko', alt: 'Samochód podniesiony na stanowisku serwisowym' },
];

export const questions = [
  {
    question: 'Co zabrać na wymianę opon?',
    answer: 'Drugi komplet opon lub kół i nasadkę do śrub zabezpieczających, jeśli masz je w aucie.',
  },
  {
    question: 'Czym różni się wymiana opon od wymiany kół?',
    answer: 'Przy wymianie opon zdejmujemy gumę z felg, zakładamy drugi komplet opon i wyważamy koła. Przy wymianie kół przekładamy gotowy komplet z felgami.',
  },
  {
    question: 'Gdzie sprawdzić rozmiar opony?',
    answer: 'Na jej boku. Szukaj zapisu podobnego do 205/55 R16. Jeśli kupujesz opony, sprawdź też rozmiary dopuszczone dla Twojego auta w instrukcji.',
  },
  {
    question: 'Kiedy warto wyważyć koła?',
    answer: 'Po założeniu opon na felgi. Warto też sprawdzić wyważenie, jeśli podczas jazdy drży kierownica lub nadwozie. Drgania mogą też mieć inną przyczynę, na przykład skrzywioną felgę.',
  },
  {
    question: 'Czy przebitą oponę da się naprawić?',
    answer: 'To zależy od miejsca przebicia i stanu opony. Uszkodzony bok albo ślady jazdy bez powietrza mogą oznaczać, że opona nadaje się tylko do wymiany.',
  },
  {
    question: 'Jakie ciśnienie powinno być w oponach?',
    answer: 'Sprawdź zalecenia producenta auta. Zwykle znajdziesz je na naklejce przy drzwiach kierowcy, pod klapką wlewu paliwa albo w instrukcji. Mierz ciśnienie na zimnych oponach i uwzględnij obciążenie auta.',
  },
  {
    question: 'Co zrobić, gdy zapali się kontrolka ciśnienia?',
    answer: 'Zatrzymaj się w bezpiecznym miejscu i obejrzyj koła. Jeśli opona wygląda na przebitą albo straciła dużo powietrza, przerwij jazdę. Gdy koła wyglądają normalnie, zmierz ciśnienie i porównaj je z zaleceniami producenta auta.',
  },
  {
    question: 'Co sprawdzić po wjechaniu w dziurę?',
    answer: 'Obejrzyj felgę i bok opony. Wybrzuszenie, pęknięcie lub szybka utrata ciśnienia to powód, żeby przerwać jazdę. Jeśli po uderzeniu pojawiły się drgania, warto sprawdzić koło w warsztacie.',
  },
  {
    question: 'Jak przechowywać drugi komplet opon?',
    answer: 'W suchym, zacienionym miejscu, z dala od źródeł ciepła i chemikaliów. Same opony ustaw pionowo. Całe koła z felgami możesz ułożyć płasko jedno na drugim.',
  },
];
