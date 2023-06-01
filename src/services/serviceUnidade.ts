import Unidade from "../databases/models/unidade"
import { AppDataSource } from "../databases/connections/data-source"


const cursor = AppDataSource.getRepository(Unidade)

type newUnidadeRequest = {
    descricao_unidade: string
    carga_horaria_unidade: number
    ordem: number
    fk_curso: string
}

export class CreateunidadeService {
    async execute({
        descricao_unidade,
        carga_horaria_unidade,
        ordem,
        fk_curso,
    }: newUnidadeRequest): Promise<Unidade | Error> {
        if (await cursor.findOne({ where: { descricao_unidade } })) {
            return new Error("Unidade já cadastrada")
        }
        const Unidade =  cursor.create({
            descricao_unidade,
            carga_horaria_unidade,
            ordem,
            fk_curso,
        })
        await cursor.save(Unidade)

        return Unidade
    }
}


export class CreateCursoService {}

export class ReadAllCursoService {}

export class ReadOneCursoService {}

export class UpdateCursoService {}

export class DeleteCursoService {}
