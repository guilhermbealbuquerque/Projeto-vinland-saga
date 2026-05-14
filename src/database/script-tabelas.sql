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
    fk_personalidade INT,
    fk_personagem INT,

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
    
INSERT INTO personalidade (descricao) VALUES
('“Você não tem inimigos.” — Filosofia de paz e empatia'),-- id 1
('“Um verdadeiro guerreiro não precisa de espada.” — Honra e autocontrole'),-- id 2
('“A vingança consome mais do que resolve.” — Reflexão e maturidade'),-- id 3
('“Sobreviver também é uma forma de coragem.” — Resiliência'),-- id 4
('“Nem toda batalha vale a pena.” — Sabedoria estratégica'),--  id 5
('“O poder sem propósito leva à destruição.” — Ambição controlada'),-- id 6
('“Quem protege os outros demonstra verdadeira força.” — Natureza protetora'),-- id 7
('“A liberdade vale mais que ouro.” — Espírito livre'),-- id 8
('“O medo pode controlar um homem ou fortalecê-lo.” — Superação pessoal'),-- id 9
('“Liderar é carregar o peso das escolhas.” — Liderança e responsabilidade'),-- id 10
('“Até os mais fortes carregam cicatrizes.” — Humanidade e dor emocional'),-- id 11
('“A paz exige mais coragem que a guerra.” — Mentalidade pacífica');-- id 12


-- ALTERANDO A COLUNA nivel_paz PARA personalidade

ALTER TABLE Usuario
RENAME COLUMN nivel_paz TO personalidade;

ALTER TABLE Usuario
MODIFY personalidade VARCHAR(100);


ALTER TABLE resultado_quiz
RENAME COLUMN nivel_paz TO personalidade;

ALTER TABLE resultado_quiz
MODIFY personalidade VARCHAR(100);


