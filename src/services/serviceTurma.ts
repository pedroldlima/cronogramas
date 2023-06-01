import Turma from "../databases/models/turma"
import { AppDataSource } from "../databases/connections/data-source"


const cursor = AppDataSource.getRepository(Turma)

type newTurmaRequest = {
    id_turma: string
    fk_curso: string
    data_inicio: Date
    data_fim: Date
    horas_aula_dia: Number
}

export class CreateTurmaService {
    async execute({
        id_turma,
        fk_curso,
        data_inicio,
        data_fim,
        horas_aula_dia,
    }: newTurmaRequest): Promise<Turma | Error> {
        if (await cursor.findOne({ where: { id_turma }})) {
            return new Error("Unidade já cadastrada")
        }
        const Turma = cursor.create({
            id_turma,
            fk_curso,
            data_inicio,
            data_fim,
            horas_aula_dia,
        })
        await cursor.save(Turma)

        return Turma
    }
}

export class CreateCursoService {}

export class ReadAllCursoService {}

export class ReadOneCursoService {}

export class UpdateCursoService {}

export class DeleteCursoService {}
