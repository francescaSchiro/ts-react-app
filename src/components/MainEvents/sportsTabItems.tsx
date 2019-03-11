interface MySportTabItems {
  label: string;
  active: boolean;
}

const sportTabItems: MySportTabItems[] = [
  { label: 'Calcio', active: true },
  { label: 'Tennis', active: false },
  { label: 'Basket', active: false },
  { label: 'Volley', active: false }
];

export default sportTabItems;