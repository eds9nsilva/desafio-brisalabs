# desafio-brisalabs
Teste Backend 

### Tecnologias 💻   &nbsp; :iphone: <br>

[TypeScript](https://www.typescriptlang.org) <br>
[Express](https://expressjs.com/pt-br/)  <br>
[Postgresql](https://www.postgresql.org) <br>
[TypeORM](https://typeorm.io/#/)  <br>
[Yarn](https://yarnpkg.com/) <br>
[Celebrate](https://github.com/arb/celebrate) <br> 
[ApiDoc](https://apidocjs.com) <br>



## Instalação :wrench:
Tendo em vista que já tem o Yarn instalado na máquina<br>
*Adicionando as dependências*
```

yarn install


```

## Configurando a aplicação :wrench:
Subindo o container docker com o banco de dados Postgresql<br>

```

docker-compose up

```
Executando as migrations do banco de dados<br>

```

yarn typeorm migration:run

```
Inicializando o servidor <br>

```

yarn dev

```

### Descrição e depoimento pessoal :memo: :page_facing_up:
Um desafio bastante interessante, tentei ao máximo deixar um código limpo, usando os padrões camelCase e PascalCase.  <br>
Fiz um extra também! Coloquei um framework chamado ApiDoc, que serve para criação de documentação de APIs. <br>
Espero que vocês gostem. vlw
