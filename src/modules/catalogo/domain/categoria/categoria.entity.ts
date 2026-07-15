import { ICategoria, CriarCategoriaProps, RecuperarCategoriaProps } from "../categoria/categoria.types";
import { NomeCategoriaNuloOuIndefinido, NomeCategoriaTamanhoMinimoInvalido, NomeCategoriaTamanhoMaximoInvalido } from "../categoria/categoria.exception";
import { randomUUID } from "crypto";
import { Entity } from "../../../../shared/domain/entity";
import { CategoriaMap } from "../../mappers/categoria.map";

class Categoria extends Entity<Categoria> implements ICategoria {

//Atributos de Classe//

    private _nome: string;

//Gets e Sets//

    public get nome(): string {
        return this._nome;
    }

    private set nome(value: string) {

        if (value === null || value === undefined || value.trim() === '') {
            throw new NomeCategoriaNuloOuIndefinido();
        }
        if (value.length < 4) {
            throw new NomeCategoriaTamanhoMinimoInvalido();
        }
        if (value.length > 50) {
            throw new NomeCategoriaTamanhoMaximoInvalido();
        }

        this._nome = value;
    }

//Construtor//

    private constructor(categoria:ICategoria) {
        super(categoria.id);
        this.nome = categoria.nome;
    }

//Static Factory Method//

    public static criar(props: CriarCategoriaProps): Categoria {
        let { nome } = props;
        return new Categoria({ nome });
    }

    public static recuperar(props: RecuperarCategoriaProps): Categoria {
        return new Categoria(props);
    }

    //Métodos//

    public toDTO(): ICategoria {
        return CategoriaMap.toDTO(this);
    }

}

export { Categoria };


