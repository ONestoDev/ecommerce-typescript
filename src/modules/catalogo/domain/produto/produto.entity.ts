import { Entity } from "../../../../shared/domain/entity";
import { ProdutoMap } from "../../mappers/produto.map";
import { Categoria } from "../categoria/categoria.entity";
import { DescricaoProdutoTamanhoMaximoInvalido, DescricaoProdutoTamanhoMinimoInvalido, NomeProdutoTamanhoMaximoInvalido, NomeProdutoTamanhoMinimoInvalido, QtdMaximaCategoriasProdutoInvalida, QtdMinimaCategoriasProdutoInvalida, ValorMinimoProdutoInvalido } from "./produto.exception";
import { CriarProdutoProps, IProduto, RecuperarProdutoProps } from "./produto.types";

class Produto extends Entity<Produto> implements IProduto {

    //Atributos//
    private _nome: string;
    private _descricao: string;
    private _valor: number;
    private _categorias: Array<Categoria>;

    //Getters e Setters//
    public get nome(): string {
        return this._nome;
    }

    public get descricao(): string {
        return this._descricao;
    }

    public get valor(): number {
        return this._valor;
    }

    public get categorias(): Array<Categoria> {
        return this._categorias;
    }

    //Construtor//
    private constructor(produto: IProduto) {
        super(produto.id);
        this.validarEAtribuir(produto);
    }

    private validarEAtribuir(produto: IProduto): void {
        // Validar nome
        if (produto.nome.length < 5) {
            throw new NomeProdutoTamanhoMinimoInvalido();
        }
        if (produto.nome.length > 50) {
            throw new NomeProdutoTamanhoMaximoInvalido();
        }

        // Validar descrição
        if (produto.descricao.length < 20) {
            throw new DescricaoProdutoTamanhoMinimoInvalido();
        }
        if (produto.descricao.length > 250) {
            throw new DescricaoProdutoTamanhoMaximoInvalido();
        }

        // Validar valor
        if (produto.valor <= 0) {
            throw new ValorMinimoProdutoInvalido();
        }

        // Validar categorias
        if (produto.categorias.length < 1) {
            throw new QtdMinimaCategoriasProdutoInvalida();
        }
        if (produto.categorias.length > 3) {
            throw new QtdMaximaCategoriasProdutoInvalida();
        }

        // Atribuir valores validados
        this._nome = produto.nome;
        this._descricao = produto.descricao;
        this._valor = produto.valor;
        this._categorias = produto.categorias;
    }

    //Static Factory Method//
    public static criar(props: CriarProdutoProps): Produto {
        return new Produto(props);
    }
    
    public static recuperar(props: RecuperarProdutoProps): Produto {
        return new Produto(props);
    }

    //Métodos//
    public toDTO(): IProduto {
        return ProdutoMap.toDTO(this);
    }

}

export { Produto };
