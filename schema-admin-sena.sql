-- ========================================================
-- Script SQL Integral para MySQL (XAMPP) - Base de datos 'laravel'
-- Instructor exclusivo: David Santacruz (davidalexanderchangosantacruz@gmail.com)
-- Aprendices: Mínimo 10 con el resto de correos institucionales
-- ========================================================

create database if not exists laravel;
use laravel;

-- Limpieza de tablas de negocio previas
drop table if exists aprendices;
drop table if exists instructores;
drop table if exists cursos;
drop table if exists areas;

-- 1. Tabla Area
create table areas (
  id int auto_increment primary key,
  nombre varchar(150) not null,
  descripcion text,
  created_at timestamp default current_timestamp
);

-- 2. Tabla Curso
create table cursos (
  id int auto_increment primary key,
  codigo varchar(50) not null unique,
  nombre varchar(150) not null,
  area_id int,
  created_at timestamp default current_timestamp,
  foreign key (area_id) references areas(id) on delete cascade
);

-- 3. Tabla Instructor (Únicamente David Santacruz)
create table instructores (
  id int auto_increment primary key,
  nombre varchar(150) not null,
  correo varchar(150) not null unique,
  especialidad varchar(150),
  created_at timestamp default current_timestamp
);

-- 4. Tabla Aprendiz (Mínimo 10 con el resto de correos)
create table aprendices (
  id int auto_increment primary key,
  nombre varchar(150) not null,
  correo varchar(150) not null unique,
  curso_id int,
  created_at timestamp default current_timestamp,
  foreign key (curso_id) references cursos(id) on delete set null
);

-- ========================================================
-- Inserción de Datos
-- ========================================================

-- Áreas (10 registros)
insert into areas (nombre, descripcion) values
('Análisis y Desarrollo de Software', 'Formación en programación y desarrollo de aplicaciones web y móviles.'),
('Redes y Seguridad Informática', 'Infraestructura de redes, telecomunicaciones y ciberseguridad.'),
('Multimedia y Producción de Contenidos', 'Diseño gráfico, animación 2D/3D y producción audiovisual.'),
('Gestión Empresarial y Talento Humano', 'Administración, recursos humanos y gestión de proyectos.'),
('Contabilidad y Finanzas', 'Gestión contable, financiera y auditoría de organizaciones.'),
('Mecatrónica y Automatización', 'Sistemas robóticos, automatización industrial y electrónica.'),
('Mantenimiento de Equipos de Cómputo', 'Soporte técnico, hardware y reparación de sistemas informáticos.'),
('Logística y Cadena de Suministro', 'Gestión de inventarios, transporte y distribución.'),
('Gastronomía y Cocina Nacional', 'Artes culinarias, repostería y gestión de servicios de alimentos.'),
('Energías Renovables', 'Sistemas solares fotovoltaicos, eólicos y eficiencia energética.');

-- Cursos (10 registros)
insert into cursos (codigo, nombre, area_id) values
('ADSO-2834101', 'Tecnólogo en Análisis y Desarrollo de Software - Ficha 1', 1),
('RED-2911201', 'Técnico en Instalación de Redes LAN y WAN', 2),
('MUL-3022301', 'Técnico en Animación y Producción 3D', 3),
('GES-3133401', 'Tecnólogo en Gestión Administrativa', 4),
('CON-3244501', 'Tecnólogo en Contabilidad y Finanzas', 5),
('MEC-3355601', 'Técnico en Automatización Industrial y Mecatrónica', 6),
('MAN-3466701', 'Técnico en Soporte y Mantenimiento de Hardware', 7),
('LOG-3577801', 'Tecnólogo en Gestión Logística Integral', 8),
('GAS-3811101', 'Técnico en Cocina y Servicios de Bar', 9),
('ENE-4144401', 'Tecnólogo en Instalación de Sistemas Solares', 10);

-- Instructores (EXCLUSIVAMENTE David Santacruz)
insert into instructores (nombre, correo, especialidad) values
('David Santacruz', 'davidalexanderchangosantacruz@gmail.com', 'Instructor Líder ADSO y Desarrollo Web');

-- Aprendices (Mínimo 10 con el resto de correos y nombres)
insert into aprendices (nombre, correo, curso_id) values
('Carlos Alberto Pérez', 'caperez@sena.edu.co', 1),
('María Fernanda Gómez', 'mfgomez@sena.edu.co', 1),
('Jorge Enrique Ramírez', 'jeramirez@sena.edu.co', 2),
('Ana Milena Torres', 'amtorres@sena.edu.co', 3),
('Luis Fernando Castro', 'lfcastro@sena.edu.co', 4),
('Claudia Patricia Ruiz', 'cpruiz@sena.edu.co', 5),
('Héctor Fabio Vargas', 'hfvargas@sena.edu.co', 6),
('Diana Marcela Herrera', 'dmherrera@sena.edu.co', 7),
('Esteban David Orozco', 'edorozco@sena.edu.co', 8),
('Valentina Morales Restrepo', 'v.morales@sena.edu.co', 9),
('Mateo Alejandro Silva', 'mateo.silva@misena.edu.co', 10);
