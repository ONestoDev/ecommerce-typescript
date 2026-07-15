import { Endereco } from "../domain/endereco/endereco.entity";
import { IEndereco, RecuperarEnderecoProps } from "../domain/endereco/endereco.types";




class EnderecoMap {
    public static toDTO(endereco: Endereco): IEndereco {
        return {
            id: endereco.id,
            cep: endereco.cep,
            rua: endereco.rua,
            bairro: endereco.bairro,
            cidade: endereco.cidade,
            estado: endereco.estado,
        };
    }
    public static toDomain(endereco: RecuperarEnderecoProps): Endereco {
        return Endereco.recuperar(endereco);
    }
}

export { EnderecoMap };