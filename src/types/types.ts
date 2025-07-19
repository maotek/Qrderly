export interface Restaurant {
  name: string;
  logo_url?: string | null;
}

export interface Table {
  table_number: number;
  restaurant: Restaurant;
}