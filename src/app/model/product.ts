import {
  Tags
} from "./tags"
import {
  Image
} from "./images"

export class Products {
  id: number;
  name: string;
  slug: string;
  type: "simple" | "variable" = "simple";
  description: string;
  short_description: string;
  sku: string;
  regular_price: string;
  sale_price: string;
  tax_status = "none";
  tax_class = "zero-rate";
  manage_stock: boolean = false;
  stock_quantity = null;
  stock_status = "instock";
  backorders = "no";
  weight: string = "1";
  permalink: string;
  upsell_ids: number[] = [];
  cross_sell_ids: [];
  categories: Tags[] = [];
  tags: Tags[] = [];
  images: Image[] = [];
  attributes: [] = [];
  default_attributes: [] = [];
  variations: [] = [];

}


export class ProductVar{
    id: number;
    name: string;
    slug: string;
    description: string;
    short_description: string;
    sku: string;
    regular_price: string;
    sale_price: string;
    tax_status = "none";
    tax_class = "zero-rate";
    manage_stock: boolean = false;
    stock_quantity = null;
    stock_status = "instock";
    backorders = "no";
    weight: string = "1";
    image: Image;
    attributes: [] = [];
}