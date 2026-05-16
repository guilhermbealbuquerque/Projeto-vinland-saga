-- BANCO DE DADOS

CREATE DATABASE vinland_saga;

USE vinland_saga;

-- TABELA: Usuario

-- Responsável por armazenar os dados dos usuários
CREATE TABLE usuario (
    id_usuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(120),
    email VARCHAR(120),
    senha VARCHAR(120),
    fk_personalidade INT DEFAULT null,
    fk_personagem INT DEFAULT null,

    CONSTRAINT cFkPersonalidade
        FOREIGN KEY (fk_personalidade)
            REFERENCES personalidade (id_personalidade),
    CONSTRAINT cFkPersonagem
        FOREIGN KEY (fk_personagem)
            REFERENCES personagem (id_personagem)
);



-- TABELA: Quiz

-- Armazena os quizzes disponíveis no sistema
CREATE TABLE quiz (
    id_quiz INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(45),
    descricao VARCHAR(250)
);


-- TABELA: personalidade

CREATE TABLE personalidade(
    id_personalidade INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100),
    descricao VARCHAR(250)
);

CREATE TABLE personagem (
    id_personagem INT PRIMARY KEY AUTO_INCREMENT, 
    nome VARCHAR(45)
);

-- INSERTS

	INSERT INTO personagem (nome) VALUES
	('Canute'), -- id 1
	('bjorn'), -- id 2
	('Thorkell'), -- id 3
	('Askeladd'), -- id 4
	('Thors'),-- id 5
	('Thorgil'),-- id 6
	('Olmar'),-- id 7
	('Cobra'),-- id 8
	('Arnheid'),-- id 9
	('Einar');-- id 10
    
INSERT INTO personalidade (nome, descricao) VALUES
('Filosofia de paz e empatia' , '“Você não tem inimigos.”  '),-- id 1
('Honra e autocontrole' , '“Um verdadeiro guerreiro não precisa de espada.”  '),-- id 2
('Reflexão e maturidade' , 'Honra e autocontrole' , '“A vingança consome mais do que resolve.”  '),-- id 3
('Resiliência' , '“Sobreviver também é uma forma de coragem.”  '),-- id 4
('Sabedoria estratégica' , '“Nem toda batalha vale a pena.”  '),--  id 5
('Ambição controlada' , '“O poder sem propósito leva à destruição.”  '),-- id 6
('Natureza protetora' '“Quem protege os outros demonstra verdadeira força.” '),-- id 7
('Espírito livre' '“A liberdade vale mais que ouro.” '),-- id 8
('Superação pessoal' , '“O medo pode controlar um homem ou fortalecê-lo.”  '),-- id 9
('Liderança e responsabilidade' '“Liderar é carregar o peso das escolhas.”  '),-- id 10
('Humanidade e dor emocional' , '“Até os mais fortes carregam cicatrizes.”  '),-- id 11
('Mentalidade pacífica' , '“A paz exige mais coragem que a guerra.”  ');-- id 12


-- ALTERANDO A COLUNA nivel_paz PARA personalidade

ALTER TABLE Usuario
RENAME COLUMN nivel_paz TO personalidade;

ALTER TABLE Usuario
MODIFY personalidade VARCHAR(100);


ALTER TABLE resultado_quiz
RENAME COLUMN nivel_paz TO personalidade;

ALTER TABLE resultado_quiz
MODIFY personalidade VARCHAR(100);


select * from usuario;

