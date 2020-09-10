BEGIN;
DROP TABLE IF EXISTS admins,
products,
clients,
orders,
details CASCADE;
CREATE TABLE admins (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL UNIQUE,
  password TEXT NOT NULL,
  rules TEXT NOT NULL
);
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL UNIQUE,
  unit TEXT NOT NULL,
  price FLOAT NOT NULL,
  image TEXT NOT NULL,
  discount_value INTEGER DEFAULT 0,
  available Boolean DEFAULT true,
  category TEXT [] NOT NULL
);
CREATE TABLE clients (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  mobile_number TEXT NOT NULL,
  facebook_profile TEXT,
  password TEXT NOT NULL,
  avatar TEXT Not NUll,
  location TEXT,
  address TEXT,
  favorite TEXT []
);
CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  client_id INTEGER NOT NULL REFERENCES clients(id),
  date TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  total INTEGER NOT NULL,
  order_price INTEGER NOT NULL,
  status VARCHAR(255) NOT NULL DEFAULT 'pending',
  address TEXT NOT NULL,
  mobile_number TEXT NOT NULL,
  dilivery_price FLOAT NOT NULL
);
CREATE TABLE details (
  id SERIAL PRIMARY KEY,
  product_id INTEGER NOT NULL REFERENCES products(id),
  quantity INTEGER NOT NULL,
  price FLOAT NOT NULL,
  Total_price FLOAT NOT NULL,
  order_id INTEGER NOT NULL REFERENCES orders(id)
);
COMMIT;