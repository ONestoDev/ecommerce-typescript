import { DomainException } from '../../../../shared/domain/domain.exception';

class ProdutoException extends DomainException {
    constructor(message: string = "Exceção de Domínio Genérica da Entidade Produto") {
        super(message);
        this.name = "ProdutoException";
        this.message = message;
    }
}

class NomeProdutoTamanhoMinimoInvalido extends ProdutoException {
    public constructor(message: string = "O nome do produto deve ter no mínimo 3 caracteres") {
        super(message);
        this.name = "NomeProdutoTamanhoMinimoInvalido";
        this.message = message;
    }
}

class NomeProdutoTamanhoMaximoInvalido extends ProdutoException {
    public constructor(message: string = "O nome do produto deve ter no máximo 100 caracteres") {
        super(message);
        this.name = "NomeProdutoTamanhoMaximoInvalido";
        this.message = message;
    }
}

class DescricaoProdutoTamanhoMinimoInvalido extends ProdutoException {
    public constructor(message: string = "A descrição do produto deve ter no mínimo 10 caracteres") {
        super(message);
        this.name = "DescricaoProdutoTamanhoMinimoInvalido";
        this.message = message;
    }
}

class DescricaoProdutoTamanhoMaximoInvalido extends ProdutoException {
    public constructor(message: string = "A descrição do produto deve ter no máximo 250 caracteres") {
        super(message);
        this.name = "DescricaoProdutoTamanhoMaximoInvalido";
        this.message = message;
    }
}

class ValorMinimoProdutoInvalido extends ProdutoException {
    public constructor(message: string = "O valor do produto deve ser maior que 0") {
        super(message);
        this.name = "ValorMinimoProdutoInvalido";
        this.message = message;
    }
}

class QtdMinimaCategoriasProdutoInvalida extends ProdutoException {
    public constructor(message: string = "O produto deve ter no mínimo 1 categoria") {
        super(message);
        this.name = "QtdMinimaCategoriasProdutoInvalida";
        this.message = message;
    }
}

class QtdMaximaCategoriasProdutoInvalida extends ProdutoException {
    public constructor(message: string = "O produto deve ter no máximo 3 categorias") {
        super(message);
        this.name = "QtdMaximaCategoriasProdutoInvalida";
        this.message = message;
    }
}

export { 
    ProdutoException, 
    NomeProdutoTamanhoMinimoInvalido, 
    NomeProdutoTamanhoMaximoInvalido, 
    DescricaoProdutoTamanhoMinimoInvalido, 
    DescricaoProdutoTamanhoMaximoInvalido, 
    ValorMinimoProdutoInvalido, 
    QtdMinimaCategoriasProdutoInvalida, 
    QtdMaximaCategoriasProdutoInvalida
};