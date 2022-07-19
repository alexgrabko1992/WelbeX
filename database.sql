DROP TABLE IF EXISTS info;

create TABLE info(
    id SERIAL PRIMARY KEY,
    date VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    number INTEGER NOT NULL,
    distant INTEGER NOT NULL
);

INSERT INTO info (date,name,number,distant)
VALUES
  ('Sep 30, 2022','Ivy Nelson',54,605),
  ('Aug 25, 2022','Akeem Bolton',15,108),
  ('May 21, 2022','Amal Kaufman',60,608),
  ('Jul 6, 2022','Ferdinand Casey',76,902),
  ('Dec 22, 2021','Palmer Richmond',64,111),
  ('May 6, 2022','Lilah Casey',15,165),
  ('Oct 27, 2022','Bianca Good',21,619),
  ('Nov 24, 2022','Alice Atkins',23,347),
  ('Dec 6, 2021','Craig Yates',71,267),
  ('Dec 23, 2022','Martena Lawson',17,518);
INSERT INTO info (date,name,number,distant)
VALUES
  ('Mar 12, 2023','Shad Francis',10,607),
  ('Dec 18, 2022','Conan Hutchinson',43,853),
  ('Dec 20, 2022','Hector Houston',10,530),
  ('Jun 29, 2022','Prescott Hayden',41,696),
  ('Sep 6, 2021','Rogan Hammond',6,120),
  ('Jan 18, 2022','Erica Holden',31,685),
  ('Sep 7, 2021','Logan Le',93,341),
  ('Jul 3, 2022','Leila Hines',89,700),
  ('Aug 10, 2022','Ifeoma Lancaster',32,133),
  ('Apr 20, 2022','Upton Mcgowan',45,817);
INSERT INTO info (date,name,number,distant)
VALUES
  ('Nov 19, 2022','Silas Valdez',71,417),
  ('Dec 24, 2021','Marcia Cole',87,811),
  ('Jun 14, 2022','Jakeem Vang',36,240),
  ('Feb 27, 2023','Carl Gillespie',38,690),
  ('Jan 16, 2022','Mohammad Curry',9,129),
  ('Sep 29, 2021','Lyle Bird',60,487),
  ('Oct 18, 2021','Baker Nolan',80,999),
  ('Mar 1, 2023','Lee Callahan',82,584),
  ('Jan 19, 2022','Carter Mendoza',36,219),
  ('Nov 25, 2022','Brynn Payne',36,703);
INSERT INTO info (date,name,number,distant)
VALUES
  ('Jun 14, 2023','Helen Holder',45,806),
  ('Apr 12, 2023','Daryl Murphy',51,326),
  ('Jun 16, 2022','Stuart Austin',59,840),
  ('Feb 25, 2023','Shelley Rivera',7,280),
  ('Jul 8, 2022','Faith Holder',64,345),
  ('Sep 3, 2022','Kamal Blevins',32,528),
  ('Jan 11, 2022','Addison Benson',81,727),
  ('Sep 13, 2021','Shafira Atkinson',26,485),
  ('Jan 23, 2022','Ursa Mcneil',1,522),
  ('Jan 4, 2022','Scott Mccoy',37,597);
INSERT INTO info (date,name,number,distant)
VALUES
  ('Jul 3, 2023','Lucius Humphrey',99,548),
  ('Mar 15, 2022','Axel Pugh',6,971),
  ('Jun 2, 2023','James Sears',66,105),
  ('Aug 16, 2021','Gay Reed',95,690),
  ('Dec 14, 2021','Nerea Lee',5,419),
  ('Apr 5, 2023','Adam Bailey',51,401),
  ('Jul 16, 2023','Giselle Fernandez',84,837),
  ('Feb 15, 2022','Tad Woods',3,898),
  ('Sep 12, 2021','Camille Travis',16,763),
  ('Sep 26, 2022','Kerry Waters',44,590);
INSERT INTO info (date,name,number,distant)
VALUES
  ('Jul 3, 2023','Carly Cobb',96,47),
  ('Jun 29, 2022','Ashton Ayala',16,132),
  ('Jun 13, 2022','Jermaine Rosa',95,813),
  ('Apr 27, 2022','Illana Wilder',86,508),
  ('Nov 25, 2021','Burke Nixon',35,819),
  ('Sep 20, 2021','Elton Rocha',94,206),
  ('Jun 2, 2023','Plato Kerr',65,951),
  ('Aug 4, 2022','Constance Turner',75,702),
  ('Sep 5, 2022','Forrest Glass',22,846),
  ('Dec 16, 2022','Sybill Charles',22,347);
INSERT INTO info (date,name,number,distant)
VALUES
  ('Mar 23, 2023','Marny Holder',6,566),
  ('Nov 8, 2022','Shellie Barker',3,0),
  ('Sep 4, 2021','Vielka Heath',89,465),
  ('Mar 21, 2023','Maris Turner',54,740),
  ('Jul 13, 2022','Stacey Connor',35,934),
  ('Jan 6, 2023','Bianca Shields',61,187),
  ('Apr 17, 2023','Reuben Schwartz',27,485),
  ('Sep 5, 2022','Knox Chavez',56,748),
  ('Dec 17, 2021','Yael Wall',50,331),
  ('Jun 25, 2022','Dylan Gibbs',40,262);
INSERT INTO info (date,name,number,distant)
VALUES
  ('Aug 6, 2022','Robin Evans',2,875),
  ('Nov 24, 2021','Wallace Jennings',67,864),
  ('Nov 6, 2022','Maisie Acosta',97,966),
  ('Dec 18, 2021','Isaac Thornton',32,131),
  ('Apr 5, 2023','Octavius Bradley',13,536),
  ('Nov 12, 2022','Hannah Cross',10,667),
  ('Sep 1, 2021','Demetrius Finch',35,529),
  ('Dec 13, 2022','Isabella Raymond',93,900),
  ('Sep 17, 2022','Grant Clements',67,871),
  ('Jul 17, 2023','Quemby Fitzgerald',15,585);
INSERT INTO info (date,name,number,distant)
VALUES
  ('Aug 21, 2022','Mark Decker',33,553),
  ('Mar 19, 2022','Meghan Bennett',20,143),
  ('May 19, 2023','Olympia Hansen',3,675),
  ('Oct 27, 2021','Nissim Hudson',28,817),
  ('Feb 23, 2023','Lee Flowers',25,292),
  ('Nov 26, 2021','Amanda Vega',18,338),
  ('Sep 14, 2022','Ivor Bean',5,618),
  ('Dec 25, 2021','Jerry Velasquez',25,911),
  ('Mar 16, 2023','Julian Spence',57,810),
  ('Dec 16, 2022','Tate Hinton',55,277);
INSERT INTO info (date,name,number,distant)
VALUES
  ('Apr 25, 2022','Charles Maddox',52,845),
  ('Dec 4, 2022','Demetrius Mclaughlin',19,642),
  ('Feb 22, 2022','Darryl Valdez',85,820),
  ('Feb 18, 2023','Isaiah Shields',84,559),
  ('May 12, 2022','Mannix Richard',13,844),
  ('Jul 17, 2023','Mechelle Howard',33,910),
  ('Jun 29, 2023','Lamar Wood',8,560),
  ('Apr 29, 2023','Rosalyn Stout',89,344),
  ('Mar 1, 2023','Jakeem Carr',48,959),
  ('May 28, 2023','Roth Mercado',30,500);