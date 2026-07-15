

// Exceções específicas para o domínio de endereços

import { DomainException } from "../../../../shared/domain/domain.exception";

class EnderecoException extends DomainException {
    constructor(message: string = "Exceção de Domínio - Endereço") {
        super(message);
        this.name = "EnderecoException";
        this.message = message;
    }
}

// Exceção para CEP nulo ou indefinido

class EnderecoCepNuloOuIndefinido extends EnderecoException {
    constructor(message: string = "O CEP é nulo ou indefinido") {
        super(message);
        this.name = "EnderecoCepNuloOuIndefinido";
        this.message = message;
    }
}

// Exceção para formato do CEP inválido

class EnderecoCepFormatoInvalido extends EnderecoException {
    constructor(message: string = "O CEP não possui um formato válido") {
        super(message);
        this.name = "EnderecoCepFormatoInvalido";
        this.message = message;
    }
}

// Exceção relacionada a rua nula ou indefinida

class EnderecoRuaNulaOuIndefinida extends EnderecoException {
    constructor(message: string = "A rua é nula ou indefinida") {
        super(message);
        this.name = "EnderecoRuaNulaOuIndefinida";
        this.message = message;
    }
}

// Exceção relacionada a tamanho mínimo da rua

class EnderecoRuaTamanhoMinimo extends EnderecoException {
    constructor(message: string = "A rua precisa ter no mínimo 5 caracteres") {
        super(message);
        this.name = "EnderecoRuaTamanhoMinimo";
        this.message = message;
    }
}

// Exceção relacionada a tamanho máximo da rua

class EnderecoRuaTamanhoMaximo extends EnderecoException {
    constructor(message: string = "A rua precisa ter no máximo 150 caracteres") {
        super(message);
        this.name = "EnderecoRuaTamanhoMaximo";
        this.message = message;
    }
}

// Exceção relacionada a bairro nulo ou indefinido

class EnderecoBairroNuloOuIndefinido extends EnderecoException {
    constructor(message: string = "O bairro é nulo ou indefinido") {
        super(message);
        this.name = "EnderecoBairroNuloOuIndefinido";
        this.message = message;
    }
}

// Exceção relacionada a tamanho mínimo do bairro

class EnderecoBairroTamanhoMinimo extends EnderecoException {
    constructor(message: string = "O bairro precisa ter no mínimo 5 caracteres") {
        super(message);
        this.name = "EnderecoBairroTamanhoMinimo";
        this.message = message;
    }
}

// Exceção relacionada a tamanho máximo do bairro

class EnderecoBairroTamanhoMaximo extends EnderecoException {
    constructor(message: string = "O bairro precisa ter no máximo 50 caracteres") {
        super(message);
        this.name = "EnderecoBairroTamanhoMaximo";
        this.message = message;
    }
}

// Exceção relacionada a cidade nula ou indefinida

class EnderecoCidadeNulaOuIndefinida extends EnderecoException {
    constructor(message: string = "A cidade é nula ou indefinida") {
        super(message);
        this.name = "EnderecoCidadeNulaOuIndefinida";
        this.message = message;
    }
}

// Exceção relacionada ao Estado nulo ou indefinido

class EnderecoEstadoNuloOuIndefinido extends EnderecoException {
    constructor(message: string = "O estado é nulo ou indefinido") {
        super(message);
        this.name = "EnderecoEstadoNuloOuIndefinido";
        this.message = message;
    }
}


export { EnderecoException, EnderecoCepNuloOuIndefinido, EnderecoCepFormatoInvalido, EnderecoRuaNulaOuIndefinida, EnderecoRuaTamanhoMinimo, EnderecoRuaTamanhoMaximo, EnderecoBairroNuloOuIndefinido, EnderecoBairroTamanhoMinimo, EnderecoBairroTamanhoMaximo, EnderecoCidadeNulaOuIndefinida, EnderecoEstadoNuloOuIndefinido };
