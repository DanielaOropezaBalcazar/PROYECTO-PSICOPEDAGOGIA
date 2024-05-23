
-- insertar Persona (para admin)
INSERT INTO `psicopedagogia`.`persona` (`id_persona`, `nombre`, `apellido`, `telefono`) VALUES ('1', 'Juan', 'Perez', '12345678');

-- Insertar Autoridad (para admin)
INSERT INTO `psicopedagogia`.`autoridades` (`id_autoridad`, `autoridad`, `rol`, `columna_foto`, `persona_id_persona`) VALUES ('1', 'Gerente', 'Administrados', 'NON', '1');

-- insertar Usuario (para admin)
INSERT INTO `psicopedagogia`.`usuario` (`id_usuario`, `contrasenia`, `correo`, `columna_foto`, `autoridades_id_autoridad`) VALUES ('1', '1234', 'juan@ucb.edu.bo', 'NON', '1');

--
INSERT INTO `psicopedagogia`.`pais` (`id_pais`, `pais`) VALUES ('1', 'Bolivia');
INSERT INTO `psicopedagogia`.`pais` (`id_pais`, `pais`) VALUES ('2', 'Argentina');
INSERT INTO `psicopedagogia`.`pais` (`id_pais`, `pais`) VALUES ('3', 'Brasil');
INSERT INTO `psicopedagogia`.`pais` (`id_pais`, `pais`) VALUES ('4', 'España');

--
INSERT INTO `psicopedagogia`.`ciudad` (`id_ciudad`, `ciudad`, `pais_id_pais`) VALUES ('1', 'La Paz', '1');
INSERT INTO `psicopedagogia`.`ciudad` (`id_ciudad`, `ciudad`, `pais_id_pais`) VALUES ('2', 'Santa Cruz', '1');
INSERT INTO `psicopedagogia`.`ciudad` (`id_ciudad`, `ciudad`, `pais_id_pais`) VALUES ('3', 'Cochabamba', '1');
INSERT INTO `psicopedagogia`.`ciudad` (`id_ciudad`, `ciudad`, `pais_id_pais`) VALUES ('4', 'Tarija', '1');

--
INSERT INTO `psicopedagogia`.`alianzas` (`id_alianza`, `Universidad`, `direccion`, `descripcion`, `ciudad_id_ciudad`, `columna_foto`) VALUES ('1', 'Alcala', 'av. ASD', 'Universidad', '4', 'NON');

-- Tipo para actividades curriculares
INSERT INTO `psicopedagogia`.`tipo_actividad` (`id_tipo_actividad`, `clasificacion`) VALUES ('1', 'Curricular');
