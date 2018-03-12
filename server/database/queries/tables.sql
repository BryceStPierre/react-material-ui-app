DROP TABLE users;
CREATE TABLE users (
	id SERIAL PRIMARY KEY NOT NULL,
	email VARCHAR(50) NOT NULL,
	password VARCHAR(50) NOT NULL,
	provider VARCHAR(15) DEFAULT 'email',
	display_name VARCHAR(50),
	actual_name JSON,
	joined TIMESTAMP DEFAULT current_timestamp
);
INSERT INTO users (email, password)
VALUES
 ('test','test');