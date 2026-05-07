CREATE DATABASE vinland_quiz;

USE vinland_quiz;

CREATE TABLE usuario (
    id_usuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(120) NOT NULL,
    email VARCHAR(120) NOT NULL UNIQUE,
    senha VARCHAR(120) NOT NULL,
    nivel_paz INT DEFAULT 0
);

CREATE TABLE quiz (
    id_quiz INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(100) NOT NULL,
    descricao VARCHAR(255)
);

CREATE TABLE resultado_quiz (
    id_resultado INT PRIMARY KEY AUTO_INCREMENT,
    pontuacao INT,
    dt_realizacao DATETIME DEFAULT CURRENT_TIMESTAMP,
    fk_usuario INT,
    fk_quiz INT,
    
    CONSTRAINT cFkUsuario
    FOREIGN KEY (fk_usuario) 
		REFERENCES usuario(id_usuario)
);


