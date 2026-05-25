-- =====================================
-- CRIAÇÃO DO BANCO
-- =====================================
CREATE DATABASE sistema_tarefas;
USE sistema_tarefas;

-- =====================================
-- TABELA: usuario
-- =====================================
CREATE TABLE usuario (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =====================================
-- TABELA: tarefas
-- =====================================
CREATE TABLE tarefas (
    id_tarefa INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(150) NOT NULL,
    descricao TEXT,
    status ENUM('pendente', 'em_andamento', 'concluida') DEFAULT 'pendente',
    prioridade ENUM('baixa', 'media', 'alta') DEFAULT 'media',
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    data_entrega DATE
);

-- =====================================
-- TABELA: devs
-- =====================================
CREATE TABLE devs (
    id_dev INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    especialidade VARCHAR(100),
    email VARCHAR(150) UNIQUE,
    data_entrada DATE
);

-- =====================================
-- TABELA: usuario_tarefas
-- RELAÇÃO N:N
-- =====================================
CREATE TABLE usuario_tarefas (
    id_usuario INT NOT NULL,
    id_tarefa INT NOT NULL,

    PRIMARY KEY (id_usuario, id_tarefa),

    CONSTRAINT fk_usuario
        FOREIGN KEY (id_usuario)
        REFERENCES usuario(id_usuario)
        ON DELETE CASCADE
        ON UPDATE CASCADE,

    CONSTRAINT fk_tarefa
        FOREIGN KEY (id_tarefa)
        REFERENCES tarefas(id_tarefa)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

-- =====================================
-- TABELA: dev_tarefas
-- RELAÇÃO N:N
-- =====================================
CREATE TABLE dev_tarefas (
    id_dev INT NOT NULL,
    id_tarefa INT NOT NULL,

    PRIMARY KEY (id_dev, id_tarefa),

    CONSTRAINT fk_dev
        FOREIGN KEY (id_dev)
        REFERENCES devs(id_dev)
        ON DELETE CASCADE
        ON UPDATE CASCADE,

    CONSTRAINT fk_dev_tarefa
        FOREIGN KEY (id_tarefa)
        REFERENCES tarefas(id_tarefa)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);