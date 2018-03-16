DROP FUNCTION insert_user(VARCHAR, VARCHAR, VARCHAR);

CREATE OR REPLACE FUNCTION insert_user(
  e VARCHAR,
  d VARCHAR,
  p VARCHAR) 
RETURNS TABLE (j JSON) AS $$
BEGIN
  INSERT INTO users (email, display_name, password)
  SELECT $1, $2, $3
    WHERE NOT EXISTS (
      SELECT * FROM users WHERE email = $1
    );
	
	IF FOUND THEN
		RETURN QUERY SELECT row_to_json(a) FROM (SELECT id, email, password, display_name FROM users WHERE email = $1) a;
	ELSE
		RETURN QUERY SELECT to_json(NULL::RECORD);
	END IF;
END; $$
LANGUAGE plpgsql;

-- Sample usage.
 
SELECT insert_user('test', 'test', 'test');