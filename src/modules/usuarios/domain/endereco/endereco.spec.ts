import { faker } from "@faker-js/faker";
import { CriarEnderecoProps, RecuperarEnderecoProps } from "./endereco.types";
import { Endereco } from "./endereco.entity";
import { EnderecoBairroNuloOuIndefinido, EnderecoBairroTamanhoMaximo, EnderecoBairroTamanhoMinimo, EnderecoCepFormatoInvalido, EnderecoCepNuloOuIndefinido, EnderecoCidadeNulaOuIndefinida, EnderecoEstadoNuloOuIndefinido, EnderecoRuaNulaOuIndefinida, EnderecoRuaTamanhoMaximo, EnderecoRuaTamanhoMinimo } from "./endereco.exception";
import { IDEntityUUIDInvalido } from "../../../../shared/domain/domain.exception";
import { beforeAll, describe, expect, test } from "vitest";

let enderecoValido: CriarEnderecoProps;
let UUIDValido: string;
let UUIDInvalido: string;

beforeAll(() => {
    enderecoValido = {
        rua: "Rua Augusta",
        cep: "12345-678",
        bairro: "Centro",
        cidade: "São Paulo",
        estado: "SP"    
    };

    UUIDValido = faker.string.uuid();
    UUIDInvalido = faker.string.alpha({ length: { min: 1, max: 10 } });

});

describe("Entidade de Domínio: Criar Endereço", () => {
    test("Deve converter o endereço para DTO", () => {
        const endereco = Endereco.criar(enderecoValido);
        const dto = endereco.toDTO();

        expect(dto).toEqual({
            id: endereco.id,
            cep: enderecoValido.cep,
            rua: enderecoValido.rua,
            bairro: enderecoValido.bairro,
            cidade: enderecoValido.cidade,
            estado: enderecoValido.estado
        });
    });

    // Dado
    test("Deve criar um endereço válido", () => {
        const endereco: CriarEnderecoProps = {
            ...enderecoValido
        };

    // Quando

        const enderecoCriado = Endereco.criar(endereco);

    // Então
    
        expect(enderecoCriado).toBeInstanceOf(Endereco);
        expect(enderecoCriado.cep).toBe(endereco.cep);
        expect(enderecoCriado.rua).toBe(endereco.rua);
        expect(enderecoCriado.bairro).toBe(endereco.bairro);
        expect(enderecoCriado.cidade).toBe(endereco.cidade);
        expect(enderecoCriado.estado).toBe(endereco.estado);
    });

    test("Não deve criar um endereço com CEP nulo", () => {
        // Dado
        const enderecoInvalido: CriarEnderecoProps = {
            ...enderecoValido,
            cep: null as unknown as string
        };

        // Quando / Então
        expect(() => Endereco.criar(enderecoInvalido)).toThrowError(EnderecoCepNuloOuIndefinido);
    });

    test("Não deve criar um endereço com CEP indefinido", () => {
        // Dado
        const enderecoInvalido: CriarEnderecoProps = {
            ...enderecoValido,
            cep: undefined as unknown as string
        };

        // Quando / Então
        expect(() => Endereco.criar(enderecoInvalido)).toThrowError(EnderecoCepNuloOuIndefinido);
    });

    test("Não deve criar um endereço com CEP em formato inválido", () => {
        // Dado
        const enderecoInvalido: CriarEnderecoProps = {
            ...enderecoValido,
            cep: "12345678"
        };

        // Quando / Então
        expect(() => Endereco.criar(enderecoInvalido)).toThrowError(EnderecoCepFormatoInvalido);
    });

    test("Não deve criar um endereço com rua nula", () => {
        // Dado
        const enderecoInvalido: CriarEnderecoProps = {
            ...enderecoValido,
            rua: null as unknown as string
        };

        // Quando / Então
        expect(() => Endereco.criar(enderecoInvalido)).toThrowError(EnderecoRuaNulaOuIndefinida);
    });

    test("Não deve criar um endereço com rua indefinida", () => {
        // Dado
        const enderecoInvalido: CriarEnderecoProps = {
            ...enderecoValido,
            rua: undefined as unknown as string
        };

        // Quando / Então
        expect(() => Endereco.criar(enderecoInvalido)).toThrowError(EnderecoRuaNulaOuIndefinida);
    });

    test("Não deve criar um endereço com rua menor que 5 caracteres", () => {
        // Dado
        const enderecoInvalido: CriarEnderecoProps = {
            ...enderecoValido,
            rua: "Rua"
        };

        // Quando / Então
        expect(() => Endereco.criar(enderecoInvalido)).toThrowError(EnderecoRuaTamanhoMinimo);
    });

    test("Não deve criar um endereço com rua maior que 150 caracteres", () => {
        // Dado
        const enderecoInvalido: CriarEnderecoProps = {
            ...enderecoValido,
            rua: faker.string.alpha(151)
        };

        // Quando / Então
        expect(() => Endereco.criar(enderecoInvalido)).toThrowError(EnderecoRuaTamanhoMaximo);
    });

    test("Não deve criar um endereço com bairro nulo", () => {
        // Dado
        const enderecoInvalido: CriarEnderecoProps = {
            ...enderecoValido,
            bairro: null as unknown as string
        };

        // Quando / Então
        expect(() => Endereco.criar(enderecoInvalido)).toThrowError(EnderecoBairroNuloOuIndefinido);
    });

    test("Não deve criar um endereço com bairro indefinido", () => {
        // Dado
        const enderecoInvalido: CriarEnderecoProps = {
            ...enderecoValido,
            bairro: undefined as unknown as string
        };

        // Quando / Então
        expect(() => Endereco.criar(enderecoInvalido)).toThrowError(EnderecoBairroNuloOuIndefinido);
    });

    test("Não deve criar um endereço com bairro menor que 5 caracteres", () => {
        // Dado
        const enderecoInvalido: CriarEnderecoProps = {
            ...enderecoValido,
            bairro: "Bair"
        };

        // Quando / Então
        expect(() => Endereco.criar(enderecoInvalido)).toThrowError(EnderecoBairroTamanhoMinimo);
    });

    test("Não deve criar um endereço com bairro maior que 50 caracteres", () => {
        // Dado
        const enderecoInvalido: CriarEnderecoProps = {
            ...enderecoValido,
            bairro: faker.string.alpha(51)
        };

        // Quando / Então
        expect(() => Endereco.criar(enderecoInvalido)).toThrowError(EnderecoBairroTamanhoMaximo);
    });

    test("Não deve criar um endereço com cidade nula", () => {
        // Dado
        const enderecoInvalido: CriarEnderecoProps = {
            ...enderecoValido,
            cidade: null as unknown as string
        };

        // Quando / Então
        expect(() => Endereco.criar(enderecoInvalido)).toThrowError(EnderecoCidadeNulaOuIndefinida);
    });

    test("Não deve criar um endereço com cidade indefinida", () => {
        // Dado
        const enderecoInvalido: CriarEnderecoProps = {
            ...enderecoValido,
            cidade: undefined as unknown as string
        };

        // Quando / Então
        expect(() => Endereco.criar(enderecoInvalido)).toThrowError(EnderecoCidadeNulaOuIndefinida);
    });

    test("Não deve criar um endereço com estado nulo", () => {
        // Dado
        const enderecoInvalido: CriarEnderecoProps = {
            ...enderecoValido,
            estado: null as unknown as string
        };

        // Quando / Então
        expect(() => Endereco.criar(enderecoInvalido)).toThrowError(EnderecoEstadoNuloOuIndefinido);
    });

    test("Não deve criar um endereço com estado indefinido", () => {
        // Dado
        const enderecoInvalido: CriarEnderecoProps = {
            ...enderecoValido,
            estado: undefined as unknown as string
        };

        // Quando / Então
        expect(() => Endereco.criar(enderecoInvalido)).toThrowError(EnderecoEstadoNuloOuIndefinido);
    });
});

describe("Entidade de Domínio: Recuperar Endereço", () => {
    test("Deve recuperar um endereço válido", () => {
        // Dado
        const endereco: RecuperarEnderecoProps = {
            id: UUIDValido,
            ...enderecoValido
        };

        const enderecoRecuperado = Endereco.recuperar(endereco);

        expect(enderecoRecuperado).toBeInstanceOf(Endereco);
        expect(enderecoRecuperado.id).toBe(UUIDValido);
    });

    test("Não deve recuperar um endereço com ID inválido", () => {
        // Dado
        const endereco: RecuperarEnderecoProps = {
            id: UUIDInvalido,
            ...enderecoValido
        };

        // Quando / Então
        expect(() => Endereco.recuperar(endereco)).toThrowError(IDEntityUUIDInvalido);
    });
});
