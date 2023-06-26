# 📝 Documentação
Utilização dos endpoints.

## 🔁 Rotas
1. Consulta à quantidade de pessoas jurídicas que entregaram o relatório em Sergipe.
    - Total:
      - [GET] ```/api/v1/sergipe```
    - Por intervalo de anos:
      - [GET] ```/api/v1/sergipe/filtro?{ano_inicial}&{ano_final}```

2. Consulta à quantidade de empresas com situação cadastral ativa.
    - Total:
      - [GET] ```/api/v1/ativas```

3. Consulta às classes de animais existentes no banco.
    - [GET] ```/api/v1/classes```

4. Consulta aos estados que fazem parte do Sisfauna.
    - [GET] ```/api/v1/estados```

5. Consulta aos municípios presentes no banco e sua quantidade.
    - [GET] ```/api/v1/municipios```

6. Consulta aos nomes populares de animais existentes no banco.
    - [GET] ```/api/v1/nomespopulares```

7. Consulta à categoria de atividade que mais aparece no banco e a sua quantidade.
    - [GET] ```/api/v1/atividade```

8. Consulta aos detalhes que são informados no banco.
    - [GET] ```/api/v1/detalhes```

9. Consulta aos nomes populares dos animais que tiveram óbitos igual a 50.
    - [GET] ```/api/v1/50obitos```

10. Consulta à ordem de animal que mais aparece no banco e a sua quantidade.
    - [GET] ```/api/v1/ordemanimal```
