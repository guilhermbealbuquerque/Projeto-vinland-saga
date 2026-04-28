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

CREATE TABLE pergunta (
    id_pergunta INT PRIMARY KEY AUTO_INCREMENT,
    texto VARCHAR(255) NOT NULL,
    fk_quiz INT,
    
    CONSTRAINT cFkQuiz
    FOREIGN KEY (fk_quiz) 
		REFERENCES quiz(id_quiz)
);

CREATE TABLE alternativa (
    id_alternativa INT PRIMARY KEY AUTO_INCREMENT,
    texto VARCHAR(255) NOT NULL,
    correta BOOLEAN NOT NULL,
    fk_pergunta INT,
    
    CONSTRAINT	cFk_pergunta
    FOREIGN KEY (fk_pergunta) 
		REFERENCES pergunta(id_pergunta)
);

CREATE TABLE resultado_quiz (
    id_resultado INT PRIMARY KEY AUTO_INCREMENT,
    pontuacao INT,
    dt_realizacao DATETIME DEFAULT CURRENT_TIMESTAMP,
    fk_usuario INT,
    fk_quiz INT,
    
    CONSTRAINT cFkUsuario
    FOREIGN KEY (fk_usuario) 
		REFERENCES usuario(id_usuario),
        
	CONSTRAINT cFkQuiz2
    FOREIGN KEY (fk_quiz) 
		REFERENCES quiz(id_quiz)
);

CREATE TABLE resposta_usuario (
    id_resposta INT PRIMARY KEY AUTO_INCREMENT,
    fk_usuario INT,
    fk_pergunta INT,
    fk_alternativa INT,
    
    CONSTRAINT cFkUsuario2
    FOREIGN KEY (fk_usuario) 
		REFERENCES usuario(id_usuario),
        
	CONSTRAINT cFkPergunta
    FOREIGN KEY (fk_pergunta) 
		REFERENCES pergunta(id_pergunta),
        
	CONSTRAINT cFkAlternativa
    FOREIGN KEY (fk_alternativa) 
		REFERENCES alternativa(id_alternativa)
);

insert into empresa (razao_social, codigo_ativacao) values ('Empresa 1', 'ED145B');
insert into empresa (razao_social, codigo_ativacao) values ('Empresa 2', 'A1B2C3');
insert into aquario (descricao, fk_empresa) values ('Aquário de Estrela-do-mar', 1);
insert into aquario (descricao, fk_empresa) values ('Aquário de Peixe-dourado', 2);