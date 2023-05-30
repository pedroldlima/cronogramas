create table unidade (
	idunidade varchar primary key,
	descricaoUnidade varchar not null,
	cargaHoraria int  not null,
	ordem interenger int not null,
	fkCurso references  Curso(idCurso)
)