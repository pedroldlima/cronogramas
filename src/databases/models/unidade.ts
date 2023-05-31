import { Entity, PrimaryColumn, Column } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("Unidade")
export default class Unidade {

    //Chave Primary
    @PrimaryColumn()
    id_unidade: string

    //Chave estrangeira
    @Column()
    fk_Curso: string

    //Atributo
    @Column({ nullable: true })
    descricao_unidade: string

    @Column({nullable: true })
    carga_horaria_unidade: number

    @Column({ nullable: true })
    ordem: number

    constructor(){
        this.id_unidade = uuid()
    }
}