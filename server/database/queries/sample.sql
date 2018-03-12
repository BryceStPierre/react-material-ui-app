SELECT
 first_name,
 last_name,
 email
FROM
 customer;


CREATE TABLE link (
 ID serial PRIMARY KEY,
 url VARCHAR (255) NOT NULL,
 name VARCHAR (255) NOT NULL,
 description VARCHAR (255),
 rel VARCHAR (50)
);


INSERT INTO link (url, name)
VALUES
 ('http://www.postgresqltutorial.com','PostgreSQL Tutorial');


DELETE FROM table
WHERE table.id = (SELECT id FROM another_table);


SELECT
 first_name,
 last_name
FROM
 customer
ORDER BY
 first_name ASC;


UPDATE table
SET column1 = value1,
    column2 = value2
WHERE
 condition;


SELECT last_name, first_name
FROM customer
WHERE first_name = 'Jamie' AND
 last_name = 'Rice';


SELECT customer_id,
 amount,
 payment_date
FROM payment
WHERE amount <= 1 OR amount >= 8;


SELECT
 film_id,
 title,
 release_year
FROM
 film
ORDER BY
 film_id
LIMIT 4 OFFSET 3;


SELECT
 first_name,
        last_name
FROM
 customer
WHERE
 first_name LIKE '%er%'


SELECT
 A.pka,
 A.c1,
 B.pkb,
 B.c2
FROM
 A
INNER JOIN B ON A .pka = B.fka;


SELECT
 customer_id,
 SUM (amount)
FROM
 payment
GROUP BY
 customer_id;

 
SELECT *
FROM
 sales2007q1
UNION
SELECT *
FROM
 sales2007q2;

SELECT
 film_id,
 title,
 rental_rate
FROM
 film
WHERE
 rental_rate > (
 SELECT
 AVG (rental_rate)
 FROM
 film
);