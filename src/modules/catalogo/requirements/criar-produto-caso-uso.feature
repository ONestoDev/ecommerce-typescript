Feature: Criar Produto
    Como um <Administrador>
    Eu quero <Criar um produto>
    De modo que <Os produtos possam ser comercializados eletronicamente>

Scenario: Produto válido (Padrão)
    Dado (Given) [Produto válido]
    Quando (When) [Criar um Produto]
    Então (Then) [O produto deve ser criado corretamente]

Scenario: Produto inválido - Nome do Produto não atende o tamanho mínimo (3) (Exeção)
    Dado (Given) [Um produto com o nome que não atende ao tamanho mínimo]
    Quando (When) [Solicitar a Criação de um produto]
    Então (Then) [Um erro informando que o nome do produto não possui um tamanho mínimo válido deve ser apresentado]

Scenario: Produto inválido - Nome do Produto não atende o tamanho máximo (50) (Exeção)
    Dado (Given) [Um produto com o nome que não atende ao tamanho máximo]
    Quando (When) [Solicitar a Criação de um produto]
    Então (Then) [Um erro informando que o nome do produto não possui um tamanho máximo válido deve ser apresentado]

Scenario: Produto inválido - Descrição do Produto não atende o tamanho mínimo (20) (Exeção)
    Dado (Given) [Um produto com descrição que não atende ao tamanho mínimo]
    Quando (When) [Solicitar a Criação de um produto]
    Então (Then) [Um erro informando que a descrição do produto não possui um tamanho mínimo válido deve ser apresentado]

Scenario: Produto inválido - Descrição do Produto não atende o tamanho máximo (250) (Exeção)
    Dado (Given) [Um produto com descrição que não atende ao tamanho máximo]
    Quando (When) [Solicitar a Criação de um produto]
    Então (Then) [Um erro informando que a descrição do produto não possui um tamanho máximo válido deve ser apresentado]

Scenario: Produto inválido - Valor do Produto não atende ao valor mínimo (0) (Exeção)
    Dado (Given) [Um produto com o valor que não atende ao valor mínimo]
    Quando (When) [Solicitar a Criação de uma produto]
    Então (Then) [Um erro informando que o valor do produto não possui um valor mínimo válido deve ser apresentado]

Scenario: Produto inválido - Produto não tem um número mínimo válido de categorias (1) (Exeção)
    Dado (Given) [Um produto com um número mínimo inválido de categorias]
    Quando (When) [Solicitar a Criação de um produto]
    Então (Then) [Um erro informando que o produto não possui um número mínimo válido de categorias deve ser apresentado]

Scenario: Produto inválido - Produto não tem um número máximo válido de categorias (3) (Exeção)
    Dado (Given) [Um produto com um número máximo inválido de categorias]
    Quando (When) [Solicitar a Criação de um produto]
    Então (Then) [Um erro informando que o produto não possui um número máximo válido de categorias deve ser apresentado]