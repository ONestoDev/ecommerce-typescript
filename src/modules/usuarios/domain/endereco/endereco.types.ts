// Todos os atributos/propriedades de um endereço deve ter no sistema

interface IEndereco {
    id?: string;
    rua: string;
    bairro: string;
    cep: string;
    cidade: string;
    estado: string;
}

// Atributos que são necessários para criar um endereço
// Garantir a integridade dos dados de um objeto
type CriarEnderecoProps = Omit<IEndereco, 'id'>; // Omit -> omite o id, pois ele será gerado pelo sistema

// Atributos que são necessários para recuperar um endereço
type RecuperarEnderecoProps = Required<IEndereco>; // Required -> torna todos os atributos obrigatórios

export { IEndereco, CriarEnderecoProps, RecuperarEnderecoProps };


