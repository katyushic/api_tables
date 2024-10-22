create TABLE client(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255),
    surname VARCHAR(255)
);

create TABLE ticket(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    content VARCHAR(255),
    client_id INTEGER,
    FOREIGN KEY (client_id) REFERENCES client (id)
);