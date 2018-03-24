DROP TABLE users;

CREATE TABLE users (
	id SERIAL PRIMARY KEY NOT NULL,
	email VARCHAR(50) NOT NULL,
	password VARCHAR(50) NOT NULL,
	provider VARCHAR(15) DEFAULT 'email',
	display_name VARCHAR(50),
	actual_name JSON,
	created TIMESTAMP DEFAULT current_timestamp
);

CREATE TABLE skeams (
	id SERIAL PRIMARY KEY NOT NULL,
	category INTEGER REFERENCES categories(id) NOT NULL,
	template INTEGER REFERENCES templates(id),
	description VARCHAR(250) NOT NULL,
	access BOOLEAN NOT NULL,
	structure JSON,
	edited TIMESTAMP DEFAULT current_timestamp,
	created TIMESTAMP DEFAULT current_timestamp
);

CREATE TABLE templates (
	id SERIAL PRIMARY KEY NOT NULL,
	category INTEGER REFERENCES categories(id) NOT NULL,
	edited TIMESTAMP DEFAULT current_timestamp,
	created TIMESTAMP DEFAULT current_timestamp
);

CREATE TABLE categories (
	id SERIAL PRIMARY KEY NOT NULL,
	label VARCHAR(50) NOT NULL
);

INSERT INTO users (email, password, display_name)
  VALUES ('test','test','test');
