import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";
import { DomainException } from "./shared/domain/domain.exception";
import { Categoria } from "./modules/catalogo/domain/categoria/categoria.entity";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
    throw new Error("DATABASE_URL não definida no ambiente.");
}

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

async function main() {
    // Aqui você pode adicionar suas operações de banco de dados usando o Prisma Client
    // Por exemplo, criar um novo usuário:
    // const newUser = await prisma.user.create({
    // data: {
    // name: "John Doe",
    // email: "

    // Criar Categoria

    let categoria: Categoria;
    categoria = Categoria.criar({nome: "Eletrodomésticos"});

    // Persistir Categoria no banco de dados
    await prisma.categoria.create({
        data: {
            id: categoria.id,
            nome: categoria.nome,
        },
    });

    // Atualizar Categoria

    const categoriaRecuperada = await prisma.categoria.update({
        where: { id: "77374d54-ae4d-4055-99a6-1da3546ac500" },
        data: { nome: "Acessórios" },
    });

    // Listar Categorias

    const ListaCategorias = await prisma.categoria.findMany();
    console.log(ListaCategorias);
}
main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (error) => {
        if (error instanceof DomainException) {
            console.log("Exceção de Domínio");
            console.log(error.message);
        }
        else {
            console.log("Outras Exceções");
            console.log(error.message);
        }
        await prisma.$disconnect();
        process.exit(1);
    });
