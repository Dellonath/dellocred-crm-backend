CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE orders (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    client_id UUID NOT NULL,
    product_id UUID NOT NULL,
    order_date TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    status VARCHAR(50) NOT NULL,
    total NUMERIC(10, 2) NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT fk_client
        FOREIGN KEY(client_id)
        REFERENCES clients_client(id)
        ON DELETE CASCADE,
    CONSTRAINT fk_product
        FOREIGN KEY(product_id)
        REFERENCES products(id)
        ON DELETE CASCADE
);