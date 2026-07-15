import { beforeAll, describe, expect, test } from "vitest";
import { CriarCategoriaProps, RecuperarCategoriaProps } from "./categoria.types";
import { Categoria } from "./categoria.entity";
import { NomeCategoriaTamanhoMinimoInvalido, NomeCategoriaTamanhoMaximoInvalido } from "./categoria.exception";
import { IDEntityUUIDInvalido } from "../../../../shared/domain/domain.exception";
import { faker } from "@faker-js/faker";

let nomeCategoriaValido: string;
let nomeCategoriaTamanhoMinInvalido: string;
let nomeCategoriaTamanhoMaxInvalido: string;
let UUIDInvalido: string;
let UUIDValido: string;

beforeAll(async () => {
    // Configuração global para todos os testes
    // Por exemplo, você pode inicializar variáveis globais, configurar mocks, etc.
    nomeCategoriaValido = faker.string.alpha({ length: { min: 3, max: 50 } });
    nomeCategoriaTamanhoMinInvalido = faker.string.alpha({ length: { min: 0, max: 3 } });
    nomeCategoriaTamanhoMaxInvalido = faker.string.alpha({ length: { min: 51, max: 51 } });
    UUIDInvalido = faker.string.alpha({ length: { min: 1, max: 20 } }); // Exemplo de UUID inválido
    UUIDValido = faker.string.uuid(); // Gera um UUID válido usando o faker
});


//Suite de Testes de Unidade da Entidade de Domínio Categoria
//Usando a descrição, você pode definir como um conjunto de testes ou benchmarks relacionados a uma entidade ou funcionalidade específica. Ele ajuda a organizar e agrupar os testes de forma lógica, tornando o código mais legível e compreensível.
describe("Entidade de Domínio: Criar Categoria", () => {
    //Teste define um conjunto de expectativas relacionadas 
    test("Deve criar uma categoria válida", async () => {

        //Dado (Given)
        const categoriaValida: CriarCategoriaProps = {
            nome: nomeCategoriaValido
        };

        //Quando (When) e Então (Then)
        expect(Categoria.criar(categoriaValida))
            .to.be.instanceof(Categoria);
    
    });

    test("Não Deve Criar Categoria Com Nome Inválido (Tamanho Mínimo)", async () => {

        //Dado (Given)
        //Nome menor que 4 caracteres
        const categoriaInvalida: CriarCategoriaProps = {
            nome: nomeCategoriaTamanhoMinInvalido
        };

        //Quando (When) e Então (Then)
        expect(() => Categoria.criar(categoriaInvalida))
            .toThrowError(NomeCategoriaTamanhoMinimoInvalido);
    });

    test("Não Deve Criar Categoria Com Nome Inválido (Tamanho Máximo)", async () => {

        //Dado (Given)
        //Nome maior que 30 caracteres
        const categoriaInvalida: CriarCategoriaProps = {
            nome: nomeCategoriaTamanhoMaxInvalido
        };

        //Quando (When) e Então (Then)
        expect(() => Categoria.criar(categoriaInvalida))
            .toThrowError(NomeCategoriaTamanhoMaximoInvalido);
    });
});

describe("Entidade de Domínio: Recuperar Categoria", () => {
    //Teste define um conjunto de expectativas relacionadas 
    test("Deve Recuperar uma categoria válida", async () => {

        //Dado (Given)
        const categoriaValida: RecuperarCategoriaProps = {
            id: UUIDValido,
            nome: nomeCategoriaValido
        };

        //Quando (When) e Então (Then)
        expect(Categoria.recuperar(categoriaValida))
            .to.be.instanceof(Categoria);
    
    });

    test("Não Deve Recuperar Categoria com ID Inválido", async () => {

        //Dado (Given)
        const categoriaIDInvalido: RecuperarCategoriaProps = {
            id: UUIDInvalido,
            nome: nomeCategoriaValido
        };

        //Quando (When) e Então (Then)
        expect(() => Categoria.recuperar(categoriaIDInvalido))
            .toThrowError(IDEntityUUIDInvalido);
    });

    test("Não Deve Recuperar Categoria Com Nome Inválido (Tamanho Mínimo)", async () => {

        //Dado (Given)
        //Nome menor que 4 caracteres
        const categoriaInvalida: RecuperarCategoriaProps = {
            id: UUIDValido,
            nome: nomeCategoriaTamanhoMinInvalido
        };

        //Quando (When) e Então (Then)
        expect(() => Categoria.recuperar(categoriaInvalida))
            .toThrowError(NomeCategoriaTamanhoMinimoInvalido);
    });

    test("Não Deve Recuperar Categoria Com Nome Inválido (Tamanho Máximo)", async () => {

        //Dado (Given)
        //Nome maior que 30 caracteres
        const categoriaInvalida: RecuperarCategoriaProps = {
            id: UUIDValido,
            nome: nomeCategoriaTamanhoMaxInvalido
        };

        //Quando (When) e Então (Then)
        expect(() => Categoria.recuperar(categoriaInvalida))
            .toThrowError(NomeCategoriaTamanhoMaximoInvalido);
    });
});
