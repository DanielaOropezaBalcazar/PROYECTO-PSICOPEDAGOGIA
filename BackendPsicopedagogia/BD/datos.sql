
-- insertar Persona (para admin)
INSERT INTO `psicopedagogia`.`persona` (`id_persona`, `nombre`, `apellido`, `telefono`) VALUES ('1', 'Juan', 'Perez', '12345678');

-- Insertar Autoridad (para admin)
INSERT INTO `psicopedagogia`.`autoridades` (`id_autoridad`, `autoridad`, `rol`, `columna_foto`, `persona_id_persona`) VALUES ('1', 'Gerente', 'Administrados', 'NON', '1');

-- insertar Usuario (para admin)
INSERT INTO `psicopedagogia`.`usuario` (`id_usuario`, `contrasenia`, `correo`, `columna_foto`, `autoridades_id_autoridad`) VALUES ('1', '1234', 'juan@ucb.edu.bo', 'NON', '1');
