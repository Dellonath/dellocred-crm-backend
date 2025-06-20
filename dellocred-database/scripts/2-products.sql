CREATE TABLE products (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(100) NOT NULL,
    description TEXT,
    price NUMERIC(10, 2) NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Insert sample products
INSERT INTO products (name, description, price, created_at, updated_at) VALUES
  ('Laptop', 'High performance laptop', 3500.00, NOW(), NOW()),
  ('Smartphone', 'Latest model smartphone', 1800.00, NOW(), NOW()),
  ('Headphones', 'Noise-cancelling headphones', 500.00, NOW(), NOW());

