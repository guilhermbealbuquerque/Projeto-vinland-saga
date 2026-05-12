-- BANCO DE DADOS

CREATE DATABASE vinland_saga;

USE vinland_saga;



-- TABELA: Usuario

-- Responsável por armazenar os dados dos usuários
CREATE TABLE Usuario (
    id_usuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(120),
    email VARCHAR(120),
    senha VARCHAR(120),
    personalidade VARCHAR(100),
    personagem VARCHAR(45)
);



-- TABELA: Quiz

-- Armazena os quizzes disponíveis no sistema
CREATE TABLE Quiz (
    id_quiz INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(45),
    descricao VARCHAR(250)
);


-- TABELA: resultado_quiz


CREATE TABLE resultado_quiz (

    id_resultado INT PRIMARY KEY AUTO_INCREMENT,
    fk_usuario INT,
    fk_quiz INT,
    personagem_resultado VARCHAR(50),
    personalidade VARCHAR(100),
    pontuacao_total INT,
    descricao_resultado VARCHAR(255),
    dt_realizacao DATETIME DEFAULT CURRENT_TIMESTAMP,
    
    -- Relaciona o resultado ao usuário
    CONSTRAINT fkResultadoUsuario
        FOREIGN KEY (fk_usuario)
        REFERENCES Usuario(id_usuario),

    -- Relaciona o resultado ao quiz
    CONSTRAINT fkResultadoQuiz
        FOREIGN KEY (fk_quiz)
        REFERENCES Quiz(id_quiz)
);

-- INSERTS

	INSERT INTO usuario (personagem) VALUES
	('Canute'),
	('bjorn'),
	('Thorkell'),
	('Askeladd'),
	('Thors'),
	('Thorgil'),
	('Olmar'),
	('Cobra'),
	('Arnheid'),
	('Einar');
    
INSERT INTO usuario (personalidade) VALUES
('“Você não tem inimigos.” — Filosofia de paz e empatia'),
('“Um verdadeiro guerreiro não precisa de espada.” — Honra e autocontrole'),
('“A vingança consome mais do que resolve.” — Reflexão e maturidade'),
('“Sobreviver também é uma forma de coragem.” — Resiliência'),
('“Nem toda batalha vale a pena.” — Sabedoria estratégica'),
('“O poder sem propósito leva à destruição.” — Ambição controlada'),
('“Quem protege os outros demonstra verdadeira força.” — Natureza protetora'),
('“A liberdade vale mais que ouro.” — Espírito livre'),
('“O medo pode controlar um homem ou fortalecê-lo.” — Superação pessoal'),
('“Liderar é carregar o peso das escolhas.” — Liderança e responsabilidade'),
('“Até os mais fortes carregam cicatrizes.” — Humanidade e dor emocional'),
('“A paz exige mais coragem que a guerra.” — Mentalidade pacífica');


-- ALTERANDO A COLUNA nivel_paz PARA personalidade

ALTER TABLE Usuario
RENAME COLUMN nivel_paz TO personalidade;

ALTER TABLE Usuario
MODIFY personalidade VARCHAR(100);


ALTER TABLE resultado_quiz
RENAME COLUMN nivel_paz TO personalidade;

ALTER TABLE resultado_quiz
MODIFY personalidade VARCHAR(100);