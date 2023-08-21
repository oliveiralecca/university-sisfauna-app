import express from "express";
import cors from "cors";
import axios from "axios";
import { routes } from "./routes";
import { PrismaClient } from "@prisma/client";
import cron from "node-cron";
import { Agent } from "https";

const app = express();

const PORT = process.env.PORT || 3333;

const prisma = new PrismaClient();

app.use(
  cors({
    origin: "https://sisfauna-app.vercel.app/",
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Origin",
      "X-Api-Key",
      "X-Requested-With",
      "Accept",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
    preflightContinue: true,
    optionsSuccessStatus: 200,
  })
);
app.use(express.json());
app.use(routes);

async function getNewData() {
  const agent = new Agent({
    rejectUnauthorized: false,
  });

  try {
    const newData: any = await axios
      .get(
        "https://dadosabertos.ibama.gov.br/dados/RAPP/sisfaunaPlantelExato/relatorio.json",
        { httpsAgent: agent }
      )
      .then((res: any) => res.data);

    if (newData.data) {
      for (const item of newData.data) {
        const itemExists = await prisma.reports.findFirst({
          where: {
            abates: Number(item.abates.replace(",", ".")),
            ano: Number(item.ano),
            aquisicoes: Number(item.aquisicoes.replace(",", ".")),
            ate: item.ate,
            categoria_de_atividade: item.categoriaAtividade,
            classe: item.classe,
            cnpj: item.cnpj,
            codigo_da_categoria: Number(item.codigoCategoria),
            codigo_do_detalhe: Number(item.codigoDetalhe),
            detalhe: item.detalhe,
            estado: item.estado,
            evasoes: Number(item.evasoes.replace(",", ".")),
            femeas_plantel_anterior: Number(
              item.femeasPlantelAnterior.replace(",", ".")
            ),
            femeas_plantel_atual: Number(
              item.femeasPlantelAtual.replace(",", ".")
            ),
            furtos_roubos: Number(item.furtosRoubos.replace(",", ".")),
            indeterminado_plantel_anterior: Number(
              item.IndeterminadoPlantelAnterior.replace(",", ".")
            ),
            indeterminado_plantel_atual: Number(
              item.IndeterminadoPlantelAtual.replace(",", ".")
            ),
            machos_plantel_anterior: Number(
              item.machosPlantelAnterior.replace(",", ".")
            ),
            machos_plantel_atual: Number(
              item.machosPlantelAtual.replace(",", ".")
            ),
            municipio: item.municipio,
            nascimentos: Number(item.nascimentos.replace(",", ".")),
            nome_cientifico: item.nomeCientifico,
            nome_popular: item.nomePopular ? item.nomePopular : "não consta",
            obitos: Number(item.obitos.replace(",", ".")),
            ordem: item.ordem,
            periodo: item.periodo,
            razao_social: item.razaoSocial,
            reintegracao_solturas: Number(item.reintSolturas.replace(",", ".")),
            retificadora: item.retificadora,
            situacao_cadastral: item.situacaoCadastral,
            total: Number(item.total.replace(",", ".")),
            total_de_entradas: Number(item.totalEntradas.replace(",", ".")),
            total_de_saidas: Number(item.totalSaidas.replace(",", ".")),
            total_geral: Number(item.totalGeral.replace(",", ".")),
            transferencia_entradas: Number(
              item.transfEntradas.replace(",", ".")
            ),
            transferencia_saidas: Number(item.transSaidas.replace(",", ".")),
            vendas: Number(item.vendas.replace(",", ".")),
          },
        });

        if (!itemExists) {
          await prisma.reports.create({
            data: {
              abates: Number(item.abates.replace(",", ".")),
              ano: Number(item.ano),
              aquisicoes: Number(item.aquisicoes.replace(",", ".")),
              ate: item.ate,
              categoria_de_atividade: item.categoriaAtividade,
              classe: item.classe,
              cnpj: item.cnpj,
              codigo_da_categoria: Number(item.codigoCategoria),
              codigo_do_detalhe: Number(item.codigoDetalhe),
              detalhe: item.detalhe,
              estado: item.estado,
              evasoes: Number(item.evasoes.replace(",", ".")),
              femeas_plantel_anterior: Number(
                item.femeasPlantelAnterior.replace(",", ".")
              ),
              femeas_plantel_atual: Number(
                item.femeasPlantelAtual.replace(",", ".")
              ),
              furtos_roubos: Number(item.furtosRoubos.replace(",", ".")),
              indeterminado_plantel_anterior: Number(
                item.IndeterminadoPlantelAnterior.replace(",", ".")
              ),
              indeterminado_plantel_atual: Number(
                item.IndeterminadoPlantelAtual.replace(",", ".")
              ),
              machos_plantel_anterior: Number(
                item.machosPlantelAnterior.replace(",", ".")
              ),
              machos_plantel_atual: Number(
                item.machosPlantelAtual.replace(",", ".")
              ),
              municipio: item.municipio,
              nascimentos: Number(item.nascimentos.replace(",", ".")),
              nome_cientifico: item.nomeCientifico,
              nome_popular: item.nomePopular ? item.nomePopular : "não consta",
              obitos: Number(item.obitos.replace(",", ".")),
              ordem: item.ordem,
              periodo: item.periodo,
              razao_social: item.razaoSocial,
              reintegracao_solturas: Number(
                item.reintSolturas.replace(",", ".")
              ),
              retificadora: item.retificadora,
              situacao_cadastral: item.situacaoCadastral,
              total: Number(item.total.replace(",", ".")),
              total_de_entradas: Number(item.totalEntradas.replace(",", ".")),
              total_de_saidas: Number(item.totalSaidas.replace(",", ".")),
              total_geral: Number(item.totalGeral.replace(",", ".")),
              transferencia_entradas: Number(
                item.transfEntradas.replace(",", ".")
              ),
              transferencia_saidas: Number(item.transSaidas.replace(",", ".")),
              vendas: Number(item.vendas.replace(",", ".")),
            },
          });
        }
      }
    }
  } catch (e) {
    console.error(e);
  } finally {
    await prisma.$disconnect();
  }
}

const updateData = () => {
  cron.schedule("0 0 1 */6 *", () => getNewData());
};

const connectDB = async () => {
  try {
    await prisma.$connect();
    console.info("Conectado ao banco de dados");
  } catch (e) {
    console.error(e);
  }
};

connectDB().then(() => {
  updateData();

  app.listen(PORT, () => {
    console.info(`Aplicação rodando na porta ${PORT}`);
  });
});
