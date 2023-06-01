
import Unidade from "../databases/models/unidade";
import { AppDataSource } from "../databases/connections/data-source";


const cursor = AppDataSource.getRepository(Unidade);

type newUnidadeRequest = {
  descricao_unidade: string;
  carga_horaria_unidade: number;
  ordem: number;
  fk_curso: string;
};

type findOneUnidadeRequest = {
  descricao_unidade: string;
};

export class CreateUnidadeService {
  async execute({
    descricao_unidade,
    carga_horaria_unidade,
    ordem,
    fk_curso,
  }: newUnidadeRequest): Promise<Unidade | Error> {
    if (await cursor.findOne({ where: { descricao_unidade } })) {
      return new Error("Unidade já cadastrada");
    }
    const unidade = cursor.create({
      descricao_unidade,
      carga_horaria_unidade,
      ordem,
      fk_curso,
    });
    await cursor.save(unidade);
    return unidade;
  }
}

export class ReadAllUnidadeService {
  async execute(): Promise<Unidade[]> {
    const unidades = await cursor.find();
    return unidades;
  }
}

export class ReadOneUnidadeService {
  async execute({ descricao_unidade }: findOneUnidadeRequest): Promise<Unidade | Error> {
    const unidade = await cursor.findOne({ where: { descricao_unidade } });

    if (!unidade) {
      return new Error("Unidade não encontrada!");
    }

    return unidade;
  }
}

export class UpdateUnidadeService {
  async execute() {

  }
}

export class DeleteUnidadeService {
  async execute({ descricao_unidade }: findOneUnidadeRequest ) {
    const unidade = await cursor.findOne({ where: {descricao_unidade }})
    if (!unidade) {
    return new Error("Não encontrado a turma!")
    }
    await cursor.delete(unidade)
    return unidade
  }
}
