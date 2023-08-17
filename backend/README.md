# 📝 Documentação
Utilização dos endpoints. Todos eles têm filtro de estado e de anos – sendo o inicial obrigatório, e o final, caso não seja passado, será considerado o último disponível no banco de dados.

## 🔁 Rotas
1. Consulta à quantidade de pessoas jurídicas que entregaram o relatório.
    - [GET] ```/api/v2/entregarelatorio?estado={estado}&ano_inicio={ano_inicio}&ano_fim={ano_fim}```

2. Consulta à quantidade de pessoas jurídicas com situação cadastral ativa.
    - [GET] ```/api/v2/ativas?estado={estado}&ano_inicio={ano_inicio}&ano_fim={ano_fim}```

3. Consulta à quantidade de animais por classe.
    - [GET] ```/api/v2/classes?estado={estado}&ano_inicio={ano_inicio}&ano_fim={ano_fim}```

4. Consulta ao animal que teve o maior número de nascimentos e à quantidade desses nascimentos.
    - [GET] ```/api/v2/nascimentos?estado={estado}&ano_inicio={ano_inicio}&ano_fim={ano_fim}```

5. Consulta aos municípios que entregaram o relatório.
    - [GET] ```/api/v2/municipios?estado={estado}&ano_inicio={ano_inicio}&ano_fim={ano_fim}```

6. Consulta ao animal que foi mais adquirido e à quantidade dessas aquisições.
    - [GET] ```/api/v2/aquisicoes?estado={estado}&ano_inicio={ano_inicio}&ano_fim={ano_fim}```

7. Consulta à quantidade de répteis machos e fêmeas.
    - [GET] ```/api/v2/repteis?estado={estado}&ano_inicio={ano_inicio}&ano_fim={ano_fim}```

8. Consulta ao animais que foram furtados ou roubados e suas quantidades.
    - [GET] ```/api/v2/furtados?estado={estado}&ano_inicio={ano_inicio}&ano_fim={ano_fim}```

9. Consulta ao animal que teve o maior número de óbitos e à quantidade desses óbitos.
    - [GET] ```/api/v2/obitos?estado={estado}&ano_inicio={ano_inicio}&ano_fim={ano_fim}```

10. Consulta à quantidade de animais por ordem animal.
    - [GET] ```/api/v2/ordemanimal?estado={estado}&ano_inicio={ano_inicio}&ano_fim={ano_fim}```
