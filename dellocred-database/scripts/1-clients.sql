
CREATE TABLE clients_client (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    national_id VARCHAR(11) UNIQUE NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(254) UNIQUE NOT NULL,
    profession VARCHAR(254) UNIQUE NOT NULL,
    phone_number VARCHAR(20) UNIQUE NOT NULL,
    birth_date DATE NOT NULL,
    postal_code VARCHAR(20) NOT NULL,
    state VARCHAR(2) NOT NULL,
    city VARCHAR(50) NOT NULL,
    address VARCHAR(50) NOT NULL,
    address_number VARCHAR(50) NOT NULL,
    address_complement VARCHAR(50) NOT NULL,
    created_at TIMESTAMPTZ NOT NULL,
    updated_at TIMESTAMPTZ
);

INSERT INTO clients_client (
    national_id, first_name, last_name, email, profession, phone_number, birth_date,
    postal_code, state, city, address, address_number, address_complement, created_at, updated_at
) VALUES
('12345678901', 'Alice', 'Silva', 'alice.silva@gmail.com', 'Engineer', '+5511999999999', '1990-05-10',
 '01001-000', 'SP', 'São Paulo', 'Av. Paulista', '1000', 'Apt 101', NOW(), NOW()),

('23456789012', 'Bruno', 'Souza', 'bruno.souza@yahoo.com', 'Designer', '+5511988888888', '1985-08-22',
 '20040-002', 'RJ', 'Rio de Janeiro', 'Rua das Laranjeiras', '200', 'Casa', NOW(), NOW()),

('34567890123', 'Carla', 'Oliveira', 'carla.oliveira@outlook.com', 'Doctor', '+5511977777777', '1978-12-15',
 '30130-010', 'MG', 'Belo Horizonte', 'Av. Afonso Pena', '3000', 'Sala 5', NOW(), NOW());