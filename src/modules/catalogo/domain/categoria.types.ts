//Todos os atributos/propriedades de uma categoria deve ter no sistema
//Auxilia na criação de invariantes e modelos ricos

interface ICategoria {
    id: string;
    nome: string;
}

//Atributos que são necessários para criar uma categoria
//Garantir a integridade dos dados de um objeto

type CriarCategoriaProps = Omit<ICategoria, 'id'>; //Omit -> omite o id, pois ele será gerado pelo sistema

export { ICategoria, CriarCategoriaProps };
