import Dexie, { type EntityTable } from 'dexie';

interface Product {
  id?: number;
  name: string;
  price: number;
}

const db = new Dexie('SalesDB') as Dexie & {
  products: EntityTable<Product, 'id'>;
};

db.version(1).stores({
  products: '++id, name, price'
});

export type { Product };
export { db };
