//Todos os atributos /propriedades que um produto de ter no sistema
//Auxilia na criação de invariantes e modelos ricos

import { Categoria } from "../categoria/categoria.entity";

interface IProduto {
    id?: string;
    nome: string;
    descricao: string;
    valor: number;
    categorias: Array<Categoria>;
}

//Atributos que são necessários para criar um produto
//Tipo representa um dos estados do ciclo de vida da entidade Produto
//Garantir a integridade dos dados de um objeto
type CriarProdutoProps = Omit<IProduto, "id">;
type RecuperarProdutoProps = Pick<IProduto, "nome" | "descricao" | "valor" | "categorias">;

export { IProduto, CriarProdutoProps, RecuperarProdutoProps };
