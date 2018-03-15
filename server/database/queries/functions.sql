CREATE OR REPLACE FUNCTION insert_user(
  e VARCHAR,
  d VARCHAR,
  p VARCHAR) 
RETURNS BOOL AS $$
BEGIN
  INSERT INTO users (email, display_name, password)
  SELECT $1, $2, $3
    WHERE NOT EXISTS (
      SELECT * FROM users WHERE email = $1
    );
  RETURN FOUND;
END; $$
LANGUAGE plpgsql;

-- Sample usage.
 
SELECT insert_user('test', 'test', 'test');
