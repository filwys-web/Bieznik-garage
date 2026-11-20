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
    summary: 'Sezonowa wymiana opon lub całych kół, z kontrolą bieżnika i ciśnienia.',
    description: 'Jeśli przywozisz same opony, zdejmujemy poprzedni komplet z felg i montujemy nowy. Przy przekładce całych kół sprawdzamy stan kompletu przed założeniem.',
    image: 'montaz',
  },
  {
    id: 'wywazanie',
    title: 'Wyważanie kół',
    summary: 'Sprawdzamy koła na wyważarce i korygujemy rozkład masy.',
    description: 'Drgania kierownicy przy określonej prędkości mogą mieć związek z wyważeniem kół. Sprawdzamy każde koło na wyważarce i w razie potrzeby dobieramy ciężarki.',
    image: 'zaplecze',
  },
  {
    id: 'naprawa',
    title: 'Naprawa przebicia',
    summary: 'Oceniamy miejsce przebicia i stan opony przed podjęciem decyzji o naprawie.',
    description: 'Oponę oglądamy również od środka. O możliwości naprawy decydują między innymi miejsce i rozmiar uszkodzenia oraz stan ogumienia po jeździe ze zbyt niskim ciśnieniem.',
    image: 'kolo',
  },
  {
    id: 'felgi',
    title: 'Kontrola felg i opon',
    summary: 'Sprawdzamy widoczne uszkodzenia felg oraz stopień zużycia opon.',
    description: 'Oglądamy obręcz, powierzchnie styku i bieżnik. Jeśli widać ślady uderzenia, pęknięcie albo nierówne zużycie, omawiamy dalsze kroki.',
    image: 'felgi',
  },
];

export const photos = [
  { id: 'warsztat', title: 'Przy bramie warsztatu', alt: 'Mechanik pochylony nad oponą przy otwartej bramie warsztatu' },
  { id: 'kolo', title: 'Praca przy kole', alt: 'Mechanik pracujący przy kole samochodu zaparkowanego przed warsztatem' },
  { id: 'zaplecze', title: 'Wyważarka i opony', alt: 'Stos opon obok niebieskiej wyważarki w warsztacie' },
  { id: 'montaz', title: 'Montaż opony', alt: 'Mechanik w czerwonych rękawicach pracujący przy oponie' },
  { id: 'podnosnik', title: 'Auto bez koła', alt: 'Starszy srebrny samochód na podnośniku ze zdjętym kołem' },
  { id: 'felgi', title: 'Felgi i ogumienie', alt: 'Mechanik przy stosie opon i ścianie z felgami' },
  { id: 'opony', title: 'Opona do wymiany', alt: 'Mechanik trzymający oponę obok pomarańczowego samochodu' },
  { id: 'stanowisko', title: 'Stanowisko z podnośnikiem', alt: 'Jasny samochód uniesiony na podnośniku we wnętrzu warsztatu' },
];

export const questions = [
  { question: 'Co zabrać na sezonową wymianę?', answer: 'Przygotuj drugi komplet opon lub kół. Jeśli masz śruby zabezpieczające, zabierz do nich nasadkę. Rozmiar opony znajdziesz na jej boku, na przykład 205/55 R16.' },
  { question: 'Czy każde przebicie da się naprawić?', answer: 'Decyzję podejmujemy po obejrzeniu opony. Uszkodzenie boku, wybrzuszenie lub ślady po jeździe bez ciśnienia mogą oznaczać konieczność wymiany.' },
  { question: 'Kiedy sprawdzić wyważenie kół?', answer: 'Warto to zrobić po montażu opon oraz wtedy, gdy podczas jazdy pojawiają się drgania. Jeśli przyczyna leży poza kołami, samo wyważenie może ich nie usunąć.' },
];
