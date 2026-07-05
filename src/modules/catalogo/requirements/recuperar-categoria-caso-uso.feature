Feature: Recuperar Categoria
    Como um <Administrador>
    Eu quero <Recuperar uma categoria>
    De modo que <A categoria esteja disponível para exibição, alteração ou inserção em um produto>

Scenario: Categoria válida (Padrão)
    Dado (Given) [Categoria válida]
    Quando (When) [Solicitar a Recuperação de uma Categoria]
    Então (Then) [A categoria deve ser recuperada corretamente]

Scenario: Categoria inválida - ID da Categoria é um UUID inválido
    Dado (Given) [Uma categoria com UUID inválido]
    Quando (When) [Solicitar a Recuperação de uma Categoria]
    Então (Then) [Um erro informando que o ID da categoria é um UUID inválido deve ser apresentado]

Scenario: Categoria inválida - Nome da Categoria não atende o tamanho mínimo (Exeção)
    Dado (Given) [Uma categoria com o nome que não atende ao tamanho mínimo]
    Quando (When) [Solicitar a Recuperação de uma Categoria]
    Então (Then) [Um erro informando que o nome da categoria não possui um tamanho mínimo válido deve ser apresentado]

Scenario: Categoria inválida - Nome da Categoria não atende o tamanho máximo (Exeção)
    Dado (Given) [Uma categoria com o nome que não atende ao tamanho máximo]
    Quando (When) [Solicitar a Recuperação de uma Categoria]
    Então (Then) [Um erro informando que o nome da categoria não possui um tamanho máximo válido deve ser apresentado]