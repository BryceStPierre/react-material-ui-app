DROP TABLE users;
DROP TABLE skeams;
DROP TABLE templates;
DROP TABLE categories;

CREATE TABLE users (
	id SERIAL PRIMARY KEY NOT NULL,
	email VARCHAR(50) NOT NULL,
	password VARCHAR(50) NOT NULL,
	provider VARCHAR(15) DEFAULT 'email',
	display_name VARCHAR(50),
	actual_name JSON,
	created TIMESTAMP DEFAULT clock_timestamp()
);

CREATE TABLE categories (
	id SERIAL PRIMARY KEY NOT NULL,
	category VARCHAR(30) NOT NULL
);

CREATE TABLE templates (
	id SERIAL PRIMARY KEY NOT NULL,
	category INTEGER REFERENCES categories(id) NOT NULL,
	description VARCHAR(250) NOT NULL,
	structure JSON,
	edited TIMESTAMP DEFAULT clock_timestamp(),
	created TIMESTAMP DEFAULT clock_timestamp()
);

CREATE TABLE skeams (
	id SERIAL PRIMARY KEY NOT NULL,
	category INTEGER REFERENCES categories(id) NOT NULL,
	template INTEGER REFERENCES templates(id),
	description VARCHAR(250) NOT NULL,
	access BOOLEAN NOT NULL,
	data JSON,
	edited TIMESTAMP DEFAULT clock_timestamp(),
	created TIMESTAMP DEFAULT clock_timestamp()
);

INSERT INTO users (email, password, display_name)
  VALUES ('test','test','test');

INSERT INTO categories (category)
	VALUES 
		('Recipes'),
		('Tutorials'),
		('Ideas');

INSERT INTO skeams (category, description, access)
	VALUES 
		(1, 'Sample description 1.', true),
		(2, 'Sample description 2.', false),
		(3, 'Sample description 3.', false);

SELECT * FROM skeams
	INNER JOIN categories ON skeams.category = categories.id;

UPDATE skeams SET edited = clock_timestamp() WHERE id = 2;
SELECT * FROM skeams;
