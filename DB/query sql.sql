-- Tabla Imagens
CREATE TABLE IF NOT EXISTS Imagenes(
id_imagenes INTEGER AUTO_INCREMENT Primary Key NOT NULL,
Titulo VARCHAR(255) NOT NULL,
URL VARCHAR(255) NOT NULL,
Producto_id INTEGER NOT NULL
);
-- Tabla Imagenes 1
INSERT INTO `Imagenes` ( id_imagenes, Titulo, URL, Productos_id) values (1, "Cabaña Vacacional", "https://media.staticontent.com/media/pictures/d09c4c81-97f6-4f9a-a08f-64183e8371bf/300x299?op=NONE&enlarge=false&gravity=ce_0_0&quality=80&dpr=1.5" , 1);
INSERT INTO `Imagenes` ( id_imagenes, Titulo, URL, Productos_id) values (2, "Piscina", "https://nautilusbr.com/dev/wp-content/uploads/2092-scaled.jpg" , 1);
INSERT INTO `Imagenes` ( id_imagenes, Titulo, URL, Productos_id) values (3, "Desayuno", "https://scontent-bog1-1.xx.fbcdn.net/v/t1.6435-9/44699238_1021034708068822_7238772257596637184_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=laoqkVRUZTkAX83s7cB&_nc_ht=scontent-bog1-1.xx&oh=00_AfDIAvMHc5VgfJFX8jo0xou95OohJYJizfHkjKx07WtSLQ&oe=64035CAE" , 1);
INSERT INTO `Imagenes` ( id_imagenes, Titulo, URL, Productos_id) values (4, "Baño", "https://www.elmueble.com/medio/2022/10/19/mueble-de-bano-en-madera-de-gran-capacidad-00551675_c430a0c6_900x900.jpg" , 1);
INSERT INTO `Imagenes` ( id_imagenes, Titulo, URL, Productos_id) values (5, "Dormitorio", "https://www.elmueble.com/medio/2022/06/21/00528807-dormitorio-blanco-con-butaca-de-fibra_2bfe3521_1200x630.jpg" , 1);

-- Tabla Imagenes 2
INSERT INTO `Imagenes` ( id_imagenes, Titulo, URL, Productos_id) values (6, "Luxé by The Charleel", "https://cf.bstatic.com/xdata/images/hotel/max1280x900/137849379.jpg?k=8a525b49bdc462c1e9a3b5cddc61dd151960e9c59275fd9ba537c3b18a082bea&o=&hp=1" , 2);
INSERT INTO `Imagenes` ( id_imagenes, Titulo, URL, Productos_id) values (7, "Jacuzzi", "https://cf.bstatic.com/xdata/images/hotel/max1280x900/362732017.jpg?k=291bc645842a14ce7e1e6fac0608b8c4e5b8e7fe5c0531543eee5ba311aac18d&o=&hp=1" , 2);
INSERT INTO `Imagenes` ( id_imagenes, Titulo, URL, Productos_id) values (8, "Cocina", "https://cf.bstatic.com/xdata/images/hotel/max1280x900/387304670.jpg?k=7d24259219dbd9a601592e177e016858fdbfb007e7376151be47cca18087792f&o=&hp=1" , 2);
INSERT INTO `Imagenes` ( id_imagenes, Titulo, URL, Productos_id) values (9, "Baño", "https://cf.bstatic.com/xdata/images/hotel/max1024x768/395595331.jpg?k=c44458a43ab3390a79f9b173140ec96bedc9c05bf3acbf8a379b8f1a60be9ea3&o=&hp=1" , 2);
INSERT INTO `Imagenes` ( id_imagenes, Titulo, URL, Productos_id) values (10, "Dormitorio", "https://cf.bstatic.com/xdata/images/hotel/max1280x900/395595329.jpg?k=d8da55584964fc4c3dedfead5ee39f1540df4bfeb2b9be9846f7b95d7d8d85ed&o=&hp=1" , 2);
INSERT INTO `Imagenes` ( id_imagenes, Titulo, URL, Productos_id) values (11, "Living", "https://cf.bstatic.com/xdata/images/hotel/max1280x900/394196909.jpg?k=ebd4d11777cdca3f5407ae0d03ab15f121981cd71ae88490ad2651d35fb8dee4&o=&hp=1" , 2);

-- Tabla Imagenes 3
INSERT INTO `Imagenes` ( id_imagenes, Titulo, URL, Productos_id) values (12, "Four Points by Sheraton", "https://cf.bstatic.com/xdata/images/hotel/max1024x768/327299710.jpg?k=72b71087a1c2485e6e01d8a13e475b26ffaa21876f21399da20317ce3f914b0a&o=&hp=1" , 3);
INSERT INTO `Imagenes` ( id_imagenes, Titulo, URL, Productos_id) values (13, "Piscina", "https://cf.bstatic.com/xdata/images/hotel/max1024x768/282604784.jpg?k=0d10e5cf919b911f3203d0acb6b07d437712ba6026111d6af3e85036386c280b&o=&hp=1" , 3);
INSERT INTO `Imagenes` ( id_imagenes, Titulo, URL, Productos_id) values (14, "Restaurante", "https://cf.bstatic.com/xdata/images/hotel/max1024x768/227923843.jpg?k=6224b731394cffdafdfc18f1682ed67e94fb4cd700c36bda0adb66614263a1ad&o=&hp=1" , 3);
INSERT INTO `Imagenes` ( id_imagenes, Titulo, URL, Productos_id) values (15, "Baño", "https://cf.bstatic.com/xdata/images/hotel/max1024x768/97961427.jpg?k=df10230311fffb38d3a42027fb64d7307c83e88893e793cd9ce6df960e4a08e5&o=&hp=1" , 3);
INSERT INTO `Imagenes` ( id_imagenes, Titulo, URL, Productos_id) values (16, "Dormitorio", "https://cf.bstatic.com/xdata/images/hotel/max1024x768/97960409.jpg?k=1ceae544b6c0e36ed7e8b6ff07abbd541e8a6f05e91d27d56e3916bedab94330&o=&hp=1" , 3);
INSERT INTO `Imagenes` ( id_imagenes, Titulo, URL, Productos_id) values (17, "Spa", "https://cf.bstatic.com/xdata/images/hotel/max1024x768/98748005.jpg?k=3b1594a5ced5bf6f0926fffac88036b9fb87d9dac19409ac1915ff65c8ed72fa&o=&hp=1" , 3);

-- Tabla Imagenes 4
INSERT INTO `Imagenes` ( id_imagenes, Titulo, URL, Productos_id) values (18, "Park 10", "https://cf.bstatic.com/xdata/images/hotel/max1024x768/202202150.jpg?k=707786f5c6cfd494ac6b15e379ee110771750a098ed4bdb4742ff0e500c5c8d6&o=&hp=1" , 4);
INSERT INTO `Imagenes` ( id_imagenes, Titulo, URL, Productos_id) values (20, "Restaurante", "https://upload.wikimedia.org/wikipedia/commons/6/62/Barbieri_-_ViaSophia25668.jpg" , 4);
INSERT INTO `Imagenes` ( id_imagenes, Titulo, URL, Productos_id) values (21, "Baño", "https://cf.bstatic.com/xdata/images/hotel/max1024x768/372419298.jpg?k=fce480b3fc4b2c6fef31f60acab44db82db3c53c3f934d116e9d51f5b45e0d33&o=&hp=1" , 4);
INSERT INTO `Imagenes` ( id_imagenes, Titulo, URL, Productos_id) values (22, "Dormitorio", "https://cf.bstatic.com/xdata/images/hotel/max1024x768/422330625.jpg?k=e23675e1d0fe5703fd8e168c60ac57b0a72a0d86cfaab3517abb89344a2bcfae&o=&hp=1" , 4);
INSERT INTO `Imagenes` ( id_imagenes, Titulo, URL, Productos_id) values (23, "Spa", "https://cf.bstatic.com/xdata/images/hotel/max1024x768/422332866.jpg?k=53c979851c916a7403d6663b1a3c44780a2842ff9f4dd8f4c3ea2934dd8bbf43&o=&hp=1" , 4);


-- Tabla Imagenes 5
INSERT INTO `Imagenes` ( id_imagenes, Titulo, URL, Productos_id) values (24, "Apartament Molinos", "https://www.constructoracapital.com/web_datas/1640035085_dji_0001.jpg" , 5);
INSERT INTO `Imagenes` ( id_imagenes, Titulo, URL, Productos_id) values (25, "Cocina", "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/226559219.jpg?k=c1f1cbacef1a52d8deeefa73d943bc5ecca4cd8c77737cf5034ffe88e50261fe&o=" , 5);
INSERT INTO `Imagenes` ( id_imagenes, Titulo, URL, Productos_id) values (26, "Baño", "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/195237111.jpg?k=af36dabd64edf2a4d3ce338398991317dcc51a552e5f72ed2bd6357dac29c7a6&o=" , 5);
INSERT INTO `Imagenes` ( id_imagenes, Titulo, URL, Productos_id) values (27, "Dormitorio", "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/227693870.jpg?k=b42a7e904c28f0c4ecacb0f527ac9c4da19ff5d5c7abbeb3bbbc52a4e3f3082f&o=" , 5);
INSERT INTO `Imagenes` ( id_imagenes, Titulo, URL, Productos_id) values (28, "Living", "https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_627,q_auto,w_1200/itemimages/13/69/13692740.jpeg" , 5);


-- Tabla Imagenes 6
INSERT INTO `Imagenes` ( id_imagenes, Titulo, URL, Productos_id) values (29, "Loft Medellín", "https://q-xx.bstatic.com/xdata/images/hotel/840x460/247795261.jpg?k=638267a558a251a8292e4284c26790305e51be3f17b13cb8b002ae87aa443fd6&o=" , 6);
INSERT INTO `Imagenes` ( id_imagenes, Titulo, URL, Productos_id) values (30, "Jacuzzi", "https://q-xx.bstatic.com/xdata/images/hotel/840x460/247795296.jpg?k=50eb8e16d27c6c743924cb39d34177b1ef8682dc46d39219c3b5458c72c64fc2&o=" , 6);
INSERT INTO `Imagenes` ( id_imagenes, Titulo, URL, Productos_id) values (31, "Cocina", "https://q-xx.bstatic.com/xdata/images/hotel/840x460/247795305.jpg?k=96f36eea0d95e76fbcdef4b3ad0f51031f98faebb50d5598106b79d6a7e4b5fa&o=" , 6);
INSERT INTO `Imagenes` ( id_imagenes, Titulo, URL, Productos_id) values (32, "Baño", "https://q-xx.bstatic.com/xdata/images/hotel/840x460/247795271.jpg?k=e0e55fab422b4a73c41b7722f84681c7fc25fed037da8ccb3d661a96d28eb1c4&o=" , 6);
INSERT INTO `Imagenes` ( id_imagenes, Titulo, URL, Productos_id) values (33, "Dormitorio", "https://q-xx.bstatic.com/xdata/images/hotel/840x460/92267450.jpg?k=4c3b83d694ba41bc4a1151579da411d91b07e6dcb9998d0d6283e0a3f54f1ae4&o=" , 6);
INSERT INTO `Imagenes` ( id_imagenes, Titulo, URL, Productos_id) values (34, "Living", "https://q-xx.bstatic.com/xdata/images/hotel/840x460/247795155.jpg?k=2e9b932f61b32f079ee559fd5368f7cdda2089df04b1db55303746d259057a4b&o=" , 6);

-- Tabla Imagenes 7
INSERT INTO `Imagenes` ( id_imagenes, Titulo, URL, Productos_id) values (35, "Star Hostal", "https://q-xx.bstatic.com/xdata/images/hotel/840x460/94780757.jpg?k=a1473eb09cd63e2ace236adff5f6d8d46e80ba29c01cc371ce7e0c28f79daf24&o=" , 7);
INSERT INTO `Imagenes` ( id_imagenes, Titulo, URL, Productos_id) values (36, "Cafeteria", "https://q-xx.bstatic.com/xdata/images/hotel/840x460/131208624.jpg?k=b57cef6fcdba1a534f48b02ae37413234563e8316c1b9a43ed3e53908d16c2d7&o=" , 7);
INSERT INTO `Imagenes` ( id_imagenes, Titulo, URL, Productos_id) values (37, "Baño", "https://q-xx.bstatic.com/xdata/images/hotel/840x460/383696862.jpg?k=9f74b019aa0874937b15b7fff0b1ef277755a77d24d5b77b13c51cd48a3c5867&o=" , 7);
INSERT INTO `Imagenes` ( id_imagenes, Titulo, URL, Productos_id) values (38, "Dormitorio", "https://q-xx.bstatic.com/xdata/images/hotel/840x460/95198472.jpg?k=706fbcfee1ace0c5ffba9dfd3bc19b5ba0009d8168bbe45f1ec93290db54d028&o=" , 7);
INSERT INTO `Imagenes` ( id_imagenes, Titulo, URL, Productos_id) values (39, "https://q-xx.bstatic.com/xdata/images/hotel/840x460/253572767.jpg?k=0fe0553e87ea9c62c71dfdc5f439fd1fcda93208bde7295898d718d3b62dbab0&o=" , 7);

-- Tabla Imagenes 8
INSERT INTO `Imagenes` ( id_imagenes, Titulo, URL, Productos_id) values (40, "Casa Encuentro", "https://cf.bstatic.com/xdata/images/hotel/max1024x768/282967791.jpg?k=077d80caa26928c7fdee134f74c05475326b3e0e202ab251e2548d2f4e208359&o=&hp=1" , 8);
INSERT INTO `Imagenes` ( id_imagenes, Titulo, URL, Productos_id) values (41, "Terraza", "https://cf.bstatic.com/xdata/images/hotel/max1024x768/385582993.jpg?k=af1df9a209351e1beda2cc2a8b3d9c7ddd305e4a075b27bda680f05a6a996fee&o=&hp=1" , 8);
INSERT INTO `Imagenes` ( id_imagenes, Titulo, URL, Productos_id) values (42, "Vista", "https://cf.bstatic.com/xdata/images/hotel/max1024x768/346202680.jpg?k=b68fd37c9c1f0e40842561704b3f99bb4103cedae59728b86d5f76628f878c62&o=&hp=1" , 8);
INSERT INTO `Imagenes` ( id_imagenes, Titulo, URL, Productos_id) values (43, "Baño", "https://cf.bstatic.com/xdata/images/hotel/max1024x768/332955610.jpg?k=f00ac7d83782d567dba24d0127350c23fc53b19612062111a34175eb23e7fc21&o=&hp=1" , 8);
INSERT INTO `Imagenes` ( id_imagenes, Titulo, URL, Productos_id) values (44, "Dormitorio", "https://cf.bstatic.com/xdata/images/hotel/max1024x768/282872885.jpg?k=3207843466566f2da8f2a766944da6ad147314f74152a96a0139bdb866762256&o=&hp=1" , 8);
INSERT INTO `Imagenes` ( id_imagenes, Titulo, URL, Productos_id) values (45, "Living", "https://cf.bstatic.com/xdata/images/hotel/max1024x768/282967793.jpg?k=841ce994f072a275d37d401385035cf3238d3b15740a1cfd69e733a48316a2bc&o=&hp=1" , 8);

-- TABLA CIUDADES

CREATE TABLE IF NOT EXISTS Ciudades(
id_ciudad INTEGER Primary Key,
Nombre VARCHAR(255) NOT NULL,
Pais VARCHAR(255) NOT NULL
);

INSERT INTO `ciudades` (nombre, pais) values ( 'Medellin','Colombia');
INSERT INTO `ciudades` (nombre, pais) values ( 'Rio negro','Colombia');
INSERT INTO `ciudades` (nombre, pais) values ( 'Guatape','Colombia');

-- TABLA CARACTERISTICAS

CREATE TABLE IF NOT EXISTS Caracteristicas(
id_caracteristicas INTEGER Primary Key,
Nombre BOOLEAN NOT NULL
);

INSERT INTO `caracteristicas` (id_caracteristicas,nombre) values ( 1,'Wifi');
INSERT INTO `caracteristicas` (id_caracteristicas,nombre) values ( 2,'Restaurante');
INSERT INTO `caracteristicas` (id_caracteristicas,nombre) values ( 3,'Piscina');
INSERT INTO `caracteristicas` (id_caracteristicas,nombre) values ( 4,'Libre de humo');
INSERT INTO `caracteristicas` (id_caracteristicas,nombre) values ( 5,'Parqueadero');
INSERT INTO `caracteristicas` (id_caracteristicas,nombre) values ( 6,'Lavanderia');
INSERT INTO `caracteristicas` (id_caracteristicas,nombre) values ( 7,'Spa');
INSERT INTO `caracteristicas` (id_caracteristicas,nombre) values ( 8,'Jacuzzi');
INSERT INTO `caracteristicas` (id_caracteristicas,nombre) values ( 9,'Recepción 24 horas');
INSERT INTO `caracteristicas` (id_caracteristicas,nombre) values ( 10,'Gimnasio');



-- TABLA CATEGORIAS

  CREATE TABLE IF NOT EXISTS Categorias(
  id_categoria INTEGER PRIMARY KEY NOT NULL,
  Titulo VARCHAR(255),
  Descripcion VARCHAR(255) NOT NULL,
  url_imagen VARCHAR(200)  NOT NULL
  );


