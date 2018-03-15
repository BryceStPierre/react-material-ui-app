DROP FUNCTION insert_user(VARCHAR, VARCHAR, VARCHAR);

CREATE OR REPLACE FUNCTION insert_user(
  e VARCHAR,
  d VARCHAR,
  p VARCHAR) 
RETURNS INT AS $$
BEGIN
  INSERT INTO users (email, display_name, password)
  SELECT $1, $2, $3
    WHERE NOT EXISTS (
      SELECT * FROM users WHERE email = $1
    );
	
	IF FOUND THEN
		RETURN (SELECT id FROM users WHERE email = $1);
	ELSE
		RETURN -1;
	END IF;
END; $$
LANGUAGE plpgsql;

-- Sample usage.
 
SELECT insert_user('test', 'test', 'test');
