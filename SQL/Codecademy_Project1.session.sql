--@block insert new data
INSERT INTO friends
VALUES (3, 'Theppitak Maneepong', "May 31st, 1992", "theppitak@codecademy.com")

--@block search all
SELECT * from friends

--@block update data
UPDATE friends
SET id = 4
WHERE name = 'Theppitak Maneepong'