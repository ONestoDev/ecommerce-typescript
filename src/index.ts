import { Categoria } from "./modules/catalogo/domain/categoria/categoria.entity";
import { DomainException } from "./shared/domain/domain.exception";
import { RecuperarCategoriaProps } from "./modules/catalogo/domain/categoria/categoria.types";
import { readFile, writeFile } from "fs";
import { CategoriaMap } from "./modules/catalogo/mappers/categoria.map";


try {
    //Criando uma categoria
    let categoria: Categoria;
    categoria = Categoria.criar({nome: "Informática"});
    console.log(categoria);

    //Recuperando uma categoria

    let propsCategoria: RecuperarCategoriaProps = {
        id: "e9d35e7e-9141-458f-b457-837e56a8eb02", 
        nome: "Automóveis"
    };
    let categoria2: Categoria = Categoria.recuperar(propsCategoria);
    console.log(categoria2);

    //Persistindo e Recuperando a categoria em um arquivo JSON - File System

    let arrayCategorias = [];
    arrayCategorias.push(categoria.toDTO());
    arrayCategorias.push(categoria2.toDTO());
    
    writeFile('categoria.json', JSON.stringify(arrayCategorias), function (error:any) {
        if (error) throw error;
        console.log('Arquivo salvo com sucesso!');
        readFile('categoria.json', (error, dadoGravadoArquivo) => {
            if (error) throw error;
            console.log('Leitura de Arquivo!');
            let categoriasSalvas: [] = JSON.parse(dadoGravadoArquivo.toString());
            categoriasSalvas.forEach(categoriaJSON => {
                console.log(categoriaJSON);
                console.log(CategoriaMap.toDomain(categoriaJSON));
            })
        });
    });

} 
catch (error: any) {
    if (error instanceof DomainException) {
    console.log(error.message);
    }
}
finally {
    console.log("A ação deve ser executada em caso de sucesso ou falha");
}