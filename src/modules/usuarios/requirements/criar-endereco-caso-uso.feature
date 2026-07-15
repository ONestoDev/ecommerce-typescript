Feature: Criar Endereço
    Como um <Usuario>
    Eu quero <Criar um endereço>
    De modo que <Os pedidos realizados sejam entregues neste endereço corretamente>

Scenario: Endereço válido (Padrão)
    Dado (Given) [Endereço válido]
    Quando (When) [Criar um Endereço]
    Então (Then) [O Endereço deve ser criado corretamente]

Scenario: Endereço inválido - CEP é Nulo ou indefinido (Exeção)
    Dado (Given) [Um endereço com CEP nulo ou indefinido]
    Quando (When) [Solicitar a Criação de um endereço]
    Então (Then) [Um erro informando que o CEP do endereço é nulo ou indefinido deve ser apresentado]

Scenario: Endereço inválido - CEP não possui o formato correto (Exeção)
    Dado (Given) [Um endereço com o CEP no formato incorreto - Obs.: Formato correto do CEP é composto por oito números - cinco dígitos principais e um sufixo de três dígitos (00000-000).   Obs.: Usar expressão regular para validar o formato correto]
    Quando (When) [Solicitar a Criação de um Endereço]
    Então (Then) [Um erro informando que o CEP do endereço está no formato incorreto deve ser apresentado]

Scenario: Endereço inválido - Rua é nula ou indefinida (Exeção)
    Dado (Given) [Um endereço com rua nula ou indefinida]
    Quando (When) [Solicitar a Criação de um Endereço]
    Então (Then) [Um erro informando que a Rua do endereço é nula ou indefinida deve ser apresentado]

Scenario: Endereço inválido - Rua do endereço não atende ao tamanho mínimo (5) (Exeção)
    Dado (Given) [Um endereço com rua que não atende ao tamanho mínimo]
    Quando (When) [Solicitar a Criação de um Endereço]
    Então (Then) [Um erro informando que a Rua do endereço não possui um tamanho mínimo válido deve ser apresentado]

Scenario: Endereço inválido - Rua do endereço não atende ao tamanho máximo (150) (Exeção)
    Dado (Given) [Um endereço com rua que não atende ao tamanho máximo]
    Quando (When) [Solicitar a Criação de um Endereço]
    Então (Then) [Um erro informando que a Rua do endereço não possui um tamanho máximo válido deve ser apresentado]

Scenario: Endereço inválido - Bairro é nulo ou indefinido (Exeção)
    Dado (Given) [Um endereço com bairro nulo ou indefinido]
    Quando (When) [Solicitar a Criação de um Endereço]
    Então (Then) [Um erro informando que o Bairro do endereço é nulo ou indefinido deve ser apresentado]

Scenario: Endereço inválido - Bairro do endereço não atende ao tamanho mínimo (5) (Exeção)
    Dado (Given) [Um endereço com bairro que não atende ao tamanho mínimo]
    Quando (When) [Solicitar a Criação de um Endereço]
    Então (Then) [Um erro informando que o Bairro do endereço não possui um tamanho mínimo válido deve ser apresentado]

Scenario: Endereço inválido - Bairro do endereço não atende ao tamanho máximo (50) (Exeção)
    Dado (Given) [Um endereço com bairro que não atende ao tamanho máximo]
    Quando (When) [Solicitar a Criação de um Endereço]
    Então (Then) [Um erro informando que o Bairro do endereço não possui um tamanho máximo válido deve ser apresentado]

Scenario: Endereço inválido - Cidade é nula ou indefinida (Exeção)
    Dado (Given) [Um endereço com Cidade nula ou indefinida]
    Quando (When) [Solicitar a Criação de um Endereço]
    Então (Then) [Um erro informando que a Cidade do endereço é nula ou indefinida deve ser apresentado]

Scenario: Endereço inválido - Estado é nulo ou indefinido (Exeção)
    Dado (Given) [Um endereço com Estado nulo ou indefinido]
    Quando (When) [Solicitar a Criação de um Endereço]
    Então (Then) [Um erro informando que o Estado do endereço é nulo ou indefinido deve ser apresentado]
    