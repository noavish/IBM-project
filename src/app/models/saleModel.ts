export class Sale {
  sale_id: number;
  date: string;
  time: string;
  country: string;
  country_code: string;
  state: string;
  city: string;
  weather: number;
  product_id_fk: number;
  item_id_fk: number;
  sales_count: number;
  user_id_fk: number;
}
