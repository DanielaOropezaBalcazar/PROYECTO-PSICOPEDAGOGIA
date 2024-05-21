-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2024-04-30 13:38:26.94

-- Crear base de datos psicopedagogia
create database psicopedagogia;
use psicopedagogia;


-- tables
-- Table: Programas
CREATE TABLE Programas (
    id_programa int  NOT NULL AUTO_INCREMENT,
    nombre varchar(250)  NOT NULL,
    descripcion varchar(250)  NOT NULL,
    fecha date  NOT NULL,
    columna_foto Longtext  NOT NULL,
    Usuario_id_usuario int  NOT NULL,
    tipo_programa_id_tipo_programa int  NOT NULL,
    CONSTRAINT Programas_pk PRIMARY KEY (id_programa)
);

-- Table: Usuario
CREATE TABLE Usuario (
    id_usuario int  NOT NULL AUTO_INCREMENT,
    contrasenia varchar(250)  NOT NULL,
    correo varchar(250)  NOT NULL,
    columna_foto Longtext  NOT NULL,
    autoridades_id_autoridad int  NOT NULL,
    CONSTRAINT Usuario_pk PRIMARY KEY (id_usuario)
);

-- Table: actividades_universidad
CREATE TABLE actividades_universidad (
    id_actividad int  NOT NULL AUTO_INCREMENT,
    nombre_actividad varchar(250)  NOT NULL,
    columna_foto Longtext  NOT NULL,
    descripcion varchar(250)  NOT NULL,
    fecha date  NOT NULL,
    Usuario_id_usuario int  NOT NULL,
    tipo_actividad_id_tipo_actividad int  NOT NULL,
    CONSTRAINT actividades_universidad_pk PRIMARY KEY (id_actividad)
);

-- Table: alianzas
CREATE TABLE alianzas (
    id_alianza int  NOT NULL AUTO_INCREMENT,
    Universidad varchar(75)  NOT NULL,
    direccion varchar(255)  NOT NULL,
    descripcion varchar(255)  NULL,
    ciudad_id_ciudad int  NOT NULL,
    column_6 int  NOT NULL,
    CONSTRAINT alianzas_pk PRIMARY KEY (id_alianza)
);

-- Table: autoridades
CREATE TABLE autoridades (
    id_autoridad int  NOT NULL AUTO_INCREMENT,
    autoridad varchar(255)  NOT NULL,
    rol varchar(255)  NOT NULL,
    columna_foto Longtext  NOT NULL,
    persona_id_persona int  NOT NULL,
    CONSTRAINT autoridades_pk PRIMARY KEY (id_autoridad)
);

-- Table: ciudad
CREATE TABLE ciudad (
    id_ciudad int  NOT NULL AUTO_INCREMENT,
    ciudad varchar(75)  NOT NULL,
    pais_id_pais int  NOT NULL,
    CONSTRAINT ciudad_pk PRIMARY KEY (id_ciudad)
);

-- Table: graduados
CREATE TABLE graduados (
    id_graduado int  NOT NULL AUTO_INCREMENT,
    anio int  NOT NULL,
    trabajo_grado varchar(255)  NOT NULL,
    testimonio varchar(255)  NOT NULL,
    columna_foto Longtext  NOT NULL,
    persona_id_persona int  NOT NULL,
    CONSTRAINT graduados_pk PRIMARY KEY (id_graduado)
);

-- Table: integrantes_inpsicopedia
CREATE TABLE integrantes_inpsicopedia (
    id_integrante int  NOT NULL AUTO_INCREMENT,
    fecha_ingreso date  NOT NULL,
    persona_id_persona int  NOT NULL,
    columna_foto Longtext  NOT NULL,
    CONSTRAINT integrantes_inpsicopedia_pk PRIMARY KEY (id_integrante)
);

-- Table: integrantes_zona_aprendizaje
CREATE TABLE integrantes_zona_aprendizaje (
    id_integrante int  NOT NULL AUTO_INCREMENT,
    fecha_ingreso date  NOT NULL,
    persona_id_persona int  NOT NULL,
    columna_foto Longtext  NOT NULL,
    CONSTRAINT integrantes_zona_aprendizaje_pk PRIMARY KEY (id_integrante)
);

-- Table: pais
CREATE TABLE pais (
    id_pais int  NOT NULL AUTO_INCREMENT,
    pais varchar(45)  NOT NULL,
    CONSTRAINT pais_pk PRIMARY KEY (id_pais)
);

-- Table: perfil_estudiante
CREATE TABLE perfil_estudiante (
    id_perfilEst int  NOT NULL AUTO_INCREMENT,
    fecha_inscripcion date  NOT NULL,
    matricula varchar(45)  NOT NULL,
    semestre varchar(45)  NOT NULL,
    testimonio varchar(255)  NOT NULL,
    persona_id_persona int  NOT NULL,
    columna_foto Longtext  NOT NULL,
    CONSTRAINT tipo_actividad_pk PRIMARY KEY (id_perfilEst)
);

-- Table: persona
CREATE TABLE persona (
    id_persona int  NOT NULL AUTO_INCREMENT,
    nombre varchar(255)  NOT NULL,
    apellido varchar(255)  NOT NULL,
    telefono varchar(255)  NOT NULL,
    CONSTRAINT persona_pk PRIMARY KEY (id_persona)
);

-- Table: plantel_docente
CREATE TABLE plantel_docente (
    id_docente int  NOT NULL AUTO_INCREMENT,
    area varchar(255)  NOT NULL,
    profesion varchar(255)  NOT NULL,
    columna_foto Longtext  NOT NULL,
    persona_id_persona int  NOT NULL,
    CONSTRAINT plantel_docente_pk PRIMARY KEY (id_docente)
);

-- Table: publicacion_inpsicopedia
CREATE TABLE publicacion_inpsicopedia (
    id_publicacion int  NOT NULL AUTO_INCREMENT,
    fecha date  NOT NULL,
    imagen Longtext  NOT NULL,
    descripcion varchar(250)  NOT NULL,
    integrantes_inpsicopedia_id_integrante int  NOT NULL,
    CONSTRAINT publicacion_inpsicopedia_pk PRIMARY KEY (id_publicacion)
);

-- Table: publicacion_zona_aprendizaje
CREATE TABLE publicacion_zona_aprendizaje (
    id_publicacion int  NOT NULL AUTO_INCREMENT,
    fecha date  NOT NULL,
    imagen Longtext  NOT NULL,
    descripcion varchar(250)  NOT NULL,
    integrantes_zona_aprendizaje_id_integrante int  NOT NULL,
    CONSTRAINT publicacion_zona_aprendizaje_pk PRIMARY KEY (id_publicacion)
);

-- Table: tipo_actividad
CREATE TABLE tipo_actividad (
    id_tipo_actividad int  NOT NULL,
    clasificacion varchar(250)  NOT NULL,
    CONSTRAINT tipo_actividad_pk PRIMARY KEY (id_tipo_actividad)
);

-- Table: tipo_programa
CREATE TABLE tipo_programa (
    id_tipo_programa int  NOT NULL AUTO_INCREMENT,
    clasificacion varchar(250)  NOT NULL,
    CONSTRAINT tipo_programa_pk PRIMARY KEY (id_tipo_programa)
);

-- Table: tipo_trayectoria
CREATE TABLE tipo_trayectoria (
    id_tipo_trayectoria int  NOT NULL AUTO_INCREMENT,
    clasificacion varchar(250)  NOT NULL,
    CONSTRAINT tipo_trayectoria_pk PRIMARY KEY (id_tipo_trayectoria)
);

-- Table: trabajo_realizado
CREATE TABLE trabajo_realizado (
    id_trabajo int  NOT NULL AUTO_INCREMENT,
    titulo varchar(255)  NOT NULL,
    area varchar(255)  NOT NULL,
    publicacion date  NOT NULL,
    columna_foto Longtext  NOT NULL,
    persona_id_persona int  NOT NULL,
    documento blob  NOT NULL,
    CONSTRAINT trabajo_realizado_pk PRIMARY KEY (id_trabajo)
);

-- Table: trayectoria_informacion
CREATE TABLE trayectoria_informacion (
    id_trayectoria int  NOT NULL AUTO_INCREMENT,
    nombre varchar(250)  NOT NULL,
    columna_foto Longtext  NOT NULL,
    descripcion varchar(250)  NOT NULL,
    fecha date  NOT NULL,
    Usuario_id_usuario int  NOT NULL,
    tipo_trayectoria_id_tipo_trayectoria int  NOT NULL,
    CONSTRAINT trayectoria_informacion_pk PRIMARY KEY (id_trayectoria)
);

-- foreign keys
-- Reference: Autoridades_persona (table: autoridades)
ALTER TABLE autoridades ADD CONSTRAINT Autoridades_persona FOREIGN KEY Autoridades_persona (persona_id_persona)
    REFERENCES persona (id_persona);

-- Reference: Graduados_persona (table: graduados)
ALTER TABLE graduados ADD CONSTRAINT Graduados_persona FOREIGN KEY Graduados_persona (persona_id_persona)
    REFERENCES persona (id_persona);

-- Reference: Programas_Usuario (table: Programas)
ALTER TABLE Programas ADD CONSTRAINT Programas_Usuario FOREIGN KEY Programas_Usuario (Usuario_id_usuario)
    REFERENCES Usuario (id_usuario);

-- Reference: Programas_tipo_programa (table: Programas)
ALTER TABLE Programas ADD CONSTRAINT Programas_tipo_programa FOREIGN KEY Programas_tipo_programa (tipo_programa_id_tipo_programa)
    REFERENCES tipo_programa (id_tipo_programa);

-- Reference: Usuario_Autoridades (table: Usuario)
ALTER TABLE Usuario ADD CONSTRAINT Usuario_Autoridades FOREIGN KEY Usuario_Autoridades (autoridades_id_autoridad)
    REFERENCES autoridades (id_autoridad);

-- Reference: actividades_universidad_Usuario (table: actividades_universidad)
ALTER TABLE actividades_universidad ADD CONSTRAINT actividades_universidad_Usuario FOREIGN KEY actividades_universidad_Usuario (Usuario_id_usuario)
    REFERENCES Usuario (id_usuario);

-- Reference: actividades_universidad_tipo_actividad (table: actividades_universidad)
ALTER TABLE actividades_universidad ADD CONSTRAINT actividades_universidad_tipo_actividad FOREIGN KEY actividades_universidad_tipo_actividad (tipo_actividad_id_tipo_actividad)
    REFERENCES tipo_actividad (id_tipo_actividad);

-- Reference: alianzas_ciudad (table: alianzas)
ALTER TABLE alianzas ADD CONSTRAINT alianzas_ciudad FOREIGN KEY alianzas_ciudad (ciudad_id_ciudad)
    REFERENCES ciudad (id_ciudad);

-- Reference: ciudad_pais (table: ciudad)
ALTER TABLE ciudad ADD CONSTRAINT ciudad_pais FOREIGN KEY ciudad_pais (pais_id_pais)
    REFERENCES pais (id_pais);

-- Reference: integrantes_inpsicopedia_persona (table: integrantes_inpsicopedia)
ALTER TABLE integrantes_inpsicopedia ADD CONSTRAINT integrantes_inpsicopedia_persona FOREIGN KEY integrantes_inpsicopedia_persona (persona_id_persona)
    REFERENCES persona (id_persona);

-- Reference: integrantes_zona_aprendizaje_persona (table: integrantes_zona_aprendizaje)
ALTER TABLE integrantes_zona_aprendizaje ADD CONSTRAINT integrantes_zona_aprendizaje_persona FOREIGN KEY integrantes_zona_aprendizaje_persona (persona_id_persona)
    REFERENCES persona (id_persona);

-- Reference: perfil_estudiante_persona (table: perfil_estudiante)
ALTER TABLE perfil_estudiante ADD CONSTRAINT perfil_estudiante_persona FOREIGN KEY perfil_estudiante_persona (persona_id_persona)
    REFERENCES persona (id_persona);

-- Reference: plantel_docente_persona (table: plantel_docente)
ALTER TABLE plantel_docente ADD CONSTRAINT plantel_docente_persona FOREIGN KEY plantel_docente_persona (persona_id_persona)
    REFERENCES persona (id_persona);

-- Reference: publicacion_inpsicopedia_integrantes_inpsicopedia (table: publicacion_inpsicopedia)
ALTER TABLE publicacion_inpsicopedia ADD CONSTRAINT publicacion_inpsicopedia_integrantes_inpsicopedia FOREIGN KEY publicacion_inpsicopedia_integrantes_inpsicopedia (integrantes_inpsicopedia_id_integrante)
    REFERENCES integrantes_inpsicopedia (id_integrante);

-- Reference: publicacion_zona_aprendizaje_integrantes_zona_aprendizaje (table: publicacion_zona_aprendizaje)
ALTER TABLE publicacion_zona_aprendizaje ADD CONSTRAINT publicacion_zona_aprendizaje_integrantes_zona_aprendizaje FOREIGN KEY publicacion_zona_aprendizaje_integrantes_zona_aprendizaje (integrantes_zona_aprendizaje_id_integrante)
    REFERENCES integrantes_zona_aprendizaje (id_integrante);

-- Reference: trabajo_realizado_persona (table: trabajo_realizado)
ALTER TABLE trabajo_realizado ADD CONSTRAINT trabajo_realizado_persona FOREIGN KEY trabajo_realizado_persona (persona_id_persona)
    REFERENCES persona (id_persona);

-- Reference: trayectoria_informacion_Usuario (table: trayectoria_informacion)
ALTER TABLE trayectoria_informacion ADD CONSTRAINT trayectoria_informacion_Usuario FOREIGN KEY trayectoria_informacion_Usuario (Usuario_id_usuario)
    REFERENCES Usuario (id_usuario);

-- Reference: trayectoria_informacion_entity_1 (table: trayectoria_informacion)
ALTER TABLE trayectoria_informacion ADD CONSTRAINT trayectoria_informacion_entity_1 FOREIGN KEY trayectoria_informacion_entity_1 (tipo_trayectoria_id_tipo_trayectoria)
    REFERENCES tipo_trayectoria (id_tipo_trayectoria);

-- End of file.