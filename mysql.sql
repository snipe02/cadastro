create database cabi;
use cabi;
create table clientes(
	codigo int primary key,
    nome varchar(120),
    idade int
);
select * from clientes;