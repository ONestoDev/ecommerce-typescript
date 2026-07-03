import { Categoria } from "./modules/catalogo/domain/categoria.entity";
import { DomainException } from "./shared/domain/domain.exception";


try {
    let categoria = Categoria.criar({nome: "Eletrônicos"});
    console.log(categoria);
} 
catch (error: any) {
    if (error instanceof DomainException) {
    console.log(error.message);
    }
}
finally {
    console.log("A ação deve ser executada em caso de sucesso ou falha");
}