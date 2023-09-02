import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
     const maeData = [
      {
        nome: "Geovana",
        data_nascimento: "1987-06-21T16:56:00-01:00",
        endereco: "123 Rua Principal, Vitória, Espírito Santo",
        telefone: "(27)98186-4398"
      },
      {
        nome: "Maria",
        data_nascimento: "1990-04-15T14:30:00-01:00",
        endereco:"567 Rua das Flores, Vila Velha, Espírito Santo",
        telefone: "(27)99164-5608"
      },
      {
        nome: "Angélica",
        data_nascimento: "1989-04-05T14:30:00-01:00",
        endereco:"234 Rua das Estrelas, Linhares, Espírito Santo",
        telefone: "(27)97484-8607"
      },
      {
        nome: "Nilce",
        data_nascimento: "1986-06-25T14:30:00-01:00",
        endereco:"1234 Avenida da Paz, Colatina, Espírito Santo",
        telefone: "(27)9098-66778"
      },
      {
        nome: "Ana",
        data_nascimento: "1987-07-11T14:30:00-01:00",
        endereco:"1854 Avenida 3, Guarapari, Espírito Santo",
        telefone: "(27)9098-66098"
      },
      {
        nome: "Julia",
        data_nascimento: "1994-07-18T10:30:00-01:00",
        endereco:"456 Rua 6, Linhares, Espírito Santo",
        telefone: "(27)9688-66098"
      },
      {
        nome: "Juliana",
        data_nascimento: "1992-10-28T08:30:00-01:00",
        endereco:"4556 Avenida Secundária, Vitória, Espírito Santo",
        telefone: "(27)96887-4098"
      },
      {
        nome: "Clarice",
        data_nascimento: "1995-01-28T17:00:00-01:00",
        endereco:"456 Avenida 54, Serra, Espírito Santo",
        telefone: "(27)92886-3098"
      },
      {
        nome: "Danielle",
        data_nascimento: "1993-11-20T18:30:00-01:00",
        endereco:"4867 Avenida Secundária, Vitória, Espírito Santo",
        telefone: "(27)96886-6098"
      },
      {
        nome: "Fátima",
        data_nascimento: "1982-09-27T14:30:00-01:00",
        endereco:"2754 Rua Principal, Vitória, Espírito Santo",
        telefone: "(27)94386-6308"
      },
      {
        nome: "Rose",
        data_nascimento: "1978-06-04T15:30:00-01:00",
        endereco:"2904 Rua Principal, Vitória, Espírito Santo",
        telefone: "(27)94216-6218"
      },
      {
        nome: "Larissa",
        data_nascimento: "1988-11-05T11:15:00-01:00",
        endereco: "1010 Praça Central, Vitória, Espírito Santo",
        telefone: "(27)93321-5678"
      },
      {
        nome: "Isabella",
        data_nascimento: "1992-03-18T13:45:00-01:00",
        endereco: "789 Rua dos Passarinhos, Vila Velha, Espírito Santo",
        telefone: "(27)94432-1234"
      },
      {
        nome: "Alice",
        data_nascimento: "1995-01-10T12:00:00-01:00",
        endereco: "123 Rua das Flores, Vitória, Espírito Santo",
        telefone: "(27)98765-4321"
      },
      {
        nome: "Laura",
        data_nascimento: "1983-09-15T14:00:00-01:00",
        endereco: "567 Rua da Praia, Guarapari, Espírito Santo",
        telefone: "(27)95555-5555"
      },
    ];
  
    for (const data of maeData) {
      const mae = await prisma.mae.create({
        data: data,
      });
      console.log(mae);
    }
     const maes = await prisma.mae.findMany();
  console.log(maes);
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
