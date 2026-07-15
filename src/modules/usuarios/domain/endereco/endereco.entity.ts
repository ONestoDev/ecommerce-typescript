import { Entity } from "../../../../shared/domain/entity";
import { EnderecoMap } from "../../mappers/endereco.map";
import { EnderecoBairroNuloOuIndefinido, EnderecoBairroTamanhoMaximo, EnderecoBairroTamanhoMinimo, EnderecoCepFormatoInvalido, EnderecoCepNuloOuIndefinido, EnderecoCidadeNulaOuIndefinida, EnderecoEstadoNuloOuIndefinido, EnderecoRuaNulaOuIndefinida, EnderecoRuaTamanhoMaximo, EnderecoRuaTamanhoMinimo } from "./endereco.exception";
import { IEndereco, CriarEnderecoProps, RecuperarEnderecoProps } from "./endereco.types";

class Endereco extends Entity<Endereco> implements IEndereco {

// Atributos da classe Endereco
    private _cep: string;
    private _rua: string;
    private _bairro: string;
    private _cidade: string;
    private _estado: string;

    // getters e setters para os atributos da classe Endereco

    public get cep(): string {
        return this._cep;
    }

    private set cep(value: string) {
        if (value === null || value === undefined || value.trim() === "") {
            throw new EnderecoCepNuloOuIndefinido();
        }

        // Validação do formato do CEP (exemplo: 12345-678)

        const formatoCep = /^\d{5}-\d{3}$/;
        if (!formatoCep.test(value)) {
            throw new EnderecoCepFormatoInvalido();
        }

        this._cep = value;
    }

    public get rua(): string {
        return this._rua;
    }

    private set rua(value: string) {
        if (value === null || value === undefined || value.trim() === "") {
            throw new EnderecoRuaNulaOuIndefinida();
        }

        const ruaTratada = value.trim();
        if (ruaTratada.length < 5) {
            throw new EnderecoRuaTamanhoMinimo();
        }

        if (ruaTratada.length > 150) {
            throw new EnderecoRuaTamanhoMaximo();
        }
        this._rua = ruaTratada;
    }

    public get bairro(): string {
        return this._bairro;
    }

    private set bairro(value:string) {
        if (value === null || value === undefined || value.trim() === "") {
            throw new EnderecoBairroNuloOuIndefinido();
        }

        const bairroTratado = value.trim();
        if (bairroTratado.length < 5) {
            throw new EnderecoBairroTamanhoMinimo();
        }
        
        if (bairroTratado.length > 50) {
            throw new EnderecoBairroTamanhoMaximo();
        }
        this._bairro = bairroTratado;
    }

    public get cidade(): string {
        return this._cidade;
    }
    
    private set cidade(value: string) {
        if (value === null || value === undefined || value.trim() === "") {
            throw new EnderecoCidadeNulaOuIndefinida();
        }
        this._cidade = value.trim();
    }

    public get estado(): string {
        return this._estado;
    }

    private set estado(value: string) {
        if (value === null || value === undefined || value.trim() === "") {
            throw new EnderecoEstadoNuloOuIndefinido();
        }
        this._estado = value.trim();
    }

    // Construtor da classe Endereco
    private constructor(endereco: IEndereco) {
        super(endereco.id);
        this.cep = endereco.cep;
        this.rua = endereco.rua;
        this.bairro = endereco.bairro;
        this.cidade = endereco.cidade;
        this.estado = endereco.estado;
    }

    // Static Factory Methods

    public static criar(props: CriarEnderecoProps): Endereco {
        return new Endereco(props);
    }

    public static recuperar(props: RecuperarEnderecoProps): Endereco {
        return new Endereco(props);
    }

    // Métodos

    public toDTO(): IEndereco {
        return EnderecoMap.toDTO(this);
    }

}

export { Endereco };
