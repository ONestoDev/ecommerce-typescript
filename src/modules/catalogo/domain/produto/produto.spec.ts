import { beforeAll, describe, expect, test } from 'vitest';
import { Categoria } from '../categoria/categoria.entity';
import { Produto } from './produto.entity';
import { DescricaoProdutoTamanhoMaximoInvalido, DescricaoProdutoTamanhoMinimoInvalido, NomeProdutoTamanhoMaximoInvalido, NomeProdutoTamanhoMinimoInvalido, QtdMaximaCategoriasProdutoInvalida, QtdMinimaCategoriasProdutoInvalida, ValorMinimoProdutoInvalido } from './produto.exception';
import { CriarProdutoProps } from './produto.types';
import { faker } from '@faker-js/faker';

let nomeProdutoValido: string;
let nomeProdutoTamanhoMinInvalido: string;
let nomeProdutoTamanhoMaxInvalido: string;
let descricaoProdutoValida: string;
let descricaoProdutoTamanhoMinInvalida: string;
let descricaoProdutoTamanhoMaxInvalida: string;
let valorProdutoValido: number;
let valorProdutoInvalido: number;
let categoriasValidas: Array<Categoria>;
let categoriasQtdMinInvalidas: Array<Categoria>;
let categoriasQtdMaxInvalidas: Array<Categoria>;

//Função para gerar dados de teste válidos e inválidos antes de cada teste

beforeAll(async() => {
//Instancia do Faker para gerar dados aleatórios
    //Preenchendo as variáveis com dados válidos e inválidos para os testes com base nas regras de negócio da entidade Produto
    nomeProdutoValido = faker.string.alpha({ length: { min: 5, max: 50 } });
    nomeProdutoTamanhoMinInvalido = faker.string.alpha({ length: { min: 0, max: 4 } });
    nomeProdutoTamanhoMaxInvalido = faker.string.alpha({ length: { min: 51, max: 51 } });

    descricaoProdutoValida = faker.string.alpha({ length: { min: 20, max: 200 } });
    descricaoProdutoTamanhoMinInvalida = faker.string.alpha({ length: { min: 0, max: 19 } });
    descricaoProdutoTamanhoMaxInvalida = faker.string.alpha({ length: { min: 251, max: 251 } });

    valorProdutoValido = faker.number.float({ min: 1.00, max: 9999.99 });
    valorProdutoInvalido = faker.number.float({ min: -10000, max: 0.0 });

    //Preenchendo um array de categorias válidas com dados simulados
    const categoriaValida01 = Categoria.criar({nome: faker.string.alpha({length: {min: 4, max: 50 }})});
    const categoriaValida02 = Categoria.criar({nome: faker.string.alpha({length: {min: 4, max: 50 }})});
    const categoriaValida03 = Categoria.criar({nome: faker.string.alpha({length: {min: 4, max: 50 }})});
    const categoriaValida04 = Categoria.criar({nome: faker.string.alpha({length: {min: 4, max: 50 }})});
    categoriasValidas = faker.helpers.arrayElements<Categoria>([categoriaValida01, categoriaValida02, categoriaValida03], {min: 1, max: 3});
    categoriasQtdMinInvalidas = [];
    categoriasQtdMaxInvalidas = faker.helpers.arrayElements<Categoria>([categoriaValida01, categoriaValida02, categoriaValida03, categoriaValida04], {min: 4, max: 4});


});

//Suite de testes para a entidade Produto
//Usando o describe, você pode definir como um conjunto de testes ou benchmarks relacionados a um determinado recurso ou funcionalidade. Ele ajuda a organizar os testes em grupos lógicos, tornando o código de teste mais legível e fácil de entender.
describe("Entidade de Domínio: Criar Produto", () => {
//Teste para verificar se a criação de um produto com dados válidos funciona corretamente
    test("Deve criar um produto Válido", async () => { 

        //Dado (Given)
        const produtoValido: CriarProdutoProps = {
            nome: nomeProdutoValido,
            descricao: descricaoProdutoValida,
            valor: valorProdutoValido,
            categorias: categoriasValidas
        };

        //Quando (When) e Então (Then)
        expect(Produto.criar(produtoValido))
            .toBeInstanceOf(Produto);
    });

//Teste para verificar se a criação de um produto com nome inválido lança a exceção correta
    test('Deve lançar exceção ao criar um produto com nome inválido (Tamanho Mínimo)', async () => {

        //Dado (Given)
        const produtoNomeInvalido: CriarProdutoProps = {
            nome: nomeProdutoTamanhoMinInvalido,
            descricao: descricaoProdutoValida,
            valor: valorProdutoValido,
            categorias: categoriasValidas
        };

        //Quando (When) e Então (Then)
        expect(() => Produto.criar(produtoNomeInvalido))
            .toThrowError(NomeProdutoTamanhoMinimoInvalido);
    });

//Teste para verificar se a criação de um produto com nome inválido lança a exceção correta
    test('Deve lançar exceção ao criar um produto com nome inválido (Tamanho Máximo)', async () => {

        //Dado (Given)
        const produtoNomeInvalido: CriarProdutoProps = {
            nome: nomeProdutoTamanhoMaxInvalido,
            descricao: descricaoProdutoValida,
            valor: valorProdutoValido,
            categorias: categoriasValidas
        };

        //Quando (When) e Então (Then)
        expect(() => Produto.criar(produtoNomeInvalido))
            .toThrowError(NomeProdutoTamanhoMaximoInvalido);
    });

//Teste para verificar se a criação de um produto com descrição inválida lança a exceção correta
    test("Deve lançar exceção ao criar um produto com descrição inválida (Tamanho Mínimo)", async () => {

        //Dado (Given)
        const produtoDescricaoInvalida = {
            nome: nomeProdutoValido,
            descricao: descricaoProdutoTamanhoMinInvalida,
            valor: valorProdutoValido,
            categorias: categoriasValidas
        };

        //Quando (When) e Então (Then)
        expect(() => Produto.criar(produtoDescricaoInvalida))
            .toThrowError(DescricaoProdutoTamanhoMinimoInvalido);
    });

//Teste para verificar se a criação de um produto com descrição inválida lança a exceção correta
    test("Deve lançar exceção ao criar um produto com descrição inválida (Tamanho Máximo)", async () => {

        //Dado (Given)
        const produtoDescricaoInvalida = {
            nome: nomeProdutoValido,
            descricao: descricaoProdutoTamanhoMaxInvalida,
            valor: valorProdutoValido,
            categorias: categoriasValidas
        };

        //Quando (When) e Então (Then)
        expect(() => Produto.criar(produtoDescricaoInvalida))
            .toThrowError(DescricaoProdutoTamanhoMaximoInvalido);
    });

//Teste para verificar se a criação de um produto com valor inválido lança a exceção correta
    test("Deve lançar exceção ao criar um produto com valor inválido (Valor Mínimo)", async () => {

        //Dado (Given)
        const produtoValorInvalido = {
            nome: nomeProdutoValido,
            descricao: descricaoProdutoValida,
            valor: valorProdutoInvalido,
            categorias: categoriasValidas
        };

        //Quando (When) e Então (Then)
        expect(() => Produto.criar(produtoValorInvalido))
            .toThrowError(ValorMinimoProdutoInvalido);
    });


//Teste para verificar se a criação de um produto com categorias inválidas lança a exceção correta
    test("Deve lançar exceção ao criar um produto com categorias inválidas (Qtd Mínima)", async () => {

        //Dado (Given)
        const produtoCategoriasInvalidas = {
            nome: nomeProdutoValido,
            descricao: descricaoProdutoValida,
            valor: valorProdutoValido,
            categorias: categoriasQtdMinInvalidas
        };

        //Quando (When) e Então (Then)
        expect(() => Produto.criar(produtoCategoriasInvalidas))
            .toThrowError(QtdMinimaCategoriasProdutoInvalida);
    });

//Teste para verificar se a criação de um produto com categorias inválidas lança a exceção correta
    test("Deve lançar exceção ao criar um produto com categorias inválidas (Qtd Máxima)", async () => {

        //Dado (Given)
        const produtoCategoriasInvalidas = {
            nome: nomeProdutoValido,
            descricao: descricaoProdutoValida,
            valor: valorProdutoValido,
            categorias: categoriasQtdMaxInvalidas
        };

        //Quando (When) e Então (Then)
        expect(() => Produto.criar(produtoCategoriasInvalidas))
            .toThrowError(QtdMaximaCategoriasProdutoInvalida);
    });

});