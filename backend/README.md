# 📝 Documentação
Utilização dos endpoints.

## 🔁 Rotas (em construção...)

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
