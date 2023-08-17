/* eslint-disable @typescript-eslint/no-explicit-any */
import * as S from "./styles";

export type ResultProps = {
  data: any;
};

// [
  //   {
  //     classe: "Reptilia",
  //     count: 207,
  //   },
  //   {
  //     classe: "Aves",
  //     count: 187,
  //   },
  //   {
  //     classe: "Mammalia",
  //     count: 60,
  //   },
  //   {
  //     classe: "Arachnida",
  //     count: 9,
  //   },
  //   {
  //     classe: "Insecta",
  //     count: 1,
  //   },
  // ];

  // [
  //   {
  //     nome_popular: "Curió",
  //     nascimentos: 7,
  //   },
  // ];

  // [
  //   "CAJUEIRO",
  //   "MACEIO",
  //   "MARAGOGI",
  //   "MARECHAL DEODORO",
  //   "PALMEIRA DOS INDIOS",
  //   "PASSO DE CAMARAGIBE",
  //   "RIO LARGO",
  //   "SATUBA",
  // ];

  // [
  //   {
  //     nome_popular: "Cutia",
  //     aquisicoes: 2,
  //   },
  // ];

  // [
  //   {
  //     animal: "Teiú-Vermelho",
  //     genres: {
  //       male: 4,
  //       female: 0,
  //     },
  //   },
  //   {
  //     animal: "Suaçubóia",
  //     genres: {
  //       male: 0,
  //       female: 0,
  //     },
  //   },
  //   {
  //     animal: "Jiboia",
  //     genres: {
  //       male: 6,
  //       female: 6,
  //     },
  //   },
  //   {
  //     animal: "Jararaca",
  //     genres: {
  //       male: 0,
  //       female: 1,
  //     },
  //   },
  //   {
  //     animal: "Jabuti-Piranga",
  //     genres: {
  //       male: 6,
  //       female: 6,
  //     },
  //   },
  //   {
  //     animal: "Surucucu",
  //     genres: {
  //       male: 1,
  //       female: 1,
  //     },
  //   },
  //   {
  //     animal: "Jacaré-Do-Papo-Amarelo",
  //     genres: {
  //       male: 11,
  //       female: 8,
  //     },
  //   },
  //   {
  //     animal: "Iguana",
  //     genres: {
  //       male: 8,
  //       female: 7,
  //     },
  //   },
  //   {
  //     animal: "Teiú",
  //     genres: {
  //       male: 10,
  //       female: 10,
  //     },
  //   },
  //   {
  //     animal: "Cascavel",
  //     genres: {
  //       male: 1,
  //       female: 1,
  //     },
  //   },
  //   {
  //     animal: "Boa",
  //     genres: {
  //       male: 1,
  //       female: 1,
  //     },
  //   },
  //   {
  //     animal: "Jacaré-Paguá",
  //     genres: {
  //       male: 0,
  //       female: 0,
  //     },
  //   },
  //   {
  //     animal: "Salamanta",
  //     genres: {
  //       male: 2,
  //       female: 2,
  //     },
  //   },
  //   {
  //     animal: "Jibóia",
  //     genres: {
  //       male: 2,
  //       female: 2,
  //     },
  //   },
  //   {
  //     animal: "Píton-Real",
  //     genres: {
  //       male: 2,
  //       female: 2,
  //     },
  //   },
  //   {
  //     animal: "Sucuri",
  //     genres: {
  //       male: 3,
  //       female: 0,
  //     },
  //   },
  //   {
  //     animal: "Jararaca do Cerrado",
  //     genres: {
  //       male: 0,
  //       female: 1,
  //     },
  //   },
  //   {
  //     animal: "Píton-Bola",
  //     genres: {
  //       male: 0,
  //       female: 0,
  //     },
  //   },
  //   {
  //     animal: "Tartaruga-De-Esporões",
  //     genres: {
  //       male: 0,
  //       female: 0,
  //     },
  //   },
  //   {
  //     animal: "Jabuti-Tinga",
  //     genres: {
  //       male: 4,
  //       female: 4,
  //     },
  //   },
  //   {
  //     animal: "Tartaruga-Da-Amazônia",
  //     genres: {
  //       male: 0,
  //       female: 0,
  //     },
  //   },
  // ];

  // [
  //   {
  //     animal: "Cutia",
  //     furtos_roubos: 2,
  //   },
  //   {
  //     animal: "Curió",
  //     furtos_roubos: 1,
  //   },
  //   {
  //     animal: "Sabiá-Da-Mata",
  //     furtos_roubos: 1,
  //   },
  // ];

  // [
  //   {
  //     nome_popular: "Curió",
  //     obitos: 11,
  //   },
  // ];

  // [
  //   {
  //     ordem: "Squamata",
  //     count: 127,
  //   },
  //   {
  //     ordem: "Psittaciformes",
  //     count: 58,
  //   },
  //   {
  //     ordem: "Passeriformes",
  //     count: 44,
  //   },
  //   {
  //     ordem: "Testudines",
  //     count: 35,
  //   },
  //   {
  //     ordem: "Strigiformes",
  //     count: 31,
  //   },
  //   {
  //     ordem: "Serpentes",
  //     count: 21,
  //   },
  //   {
  //     ordem: "Crocodylia",
  //     count: 21,
  //   },
  //   {
  //     ordem: "Primates",
  //     count: 20,
  //   },
  //   {
  //     ordem: "Carnivora",
  //     count: 17,
  //   },
  //   {
  //     ordem: "Accipitriformes",
  //     count: 16,
  //   },
  //   {
  //     ordem: "Piciformes",
  //     count: 14,
  //   },
  //   {
  //     ordem: "Rodentia",
  //     count: 13,
  //   },
  //   {
  //     ordem: "Araneae",
  //     count: 9,
  //   },
  //   {
  //     ordem: "Rheiformes",
  //     count: 6,
  //   },
  //   {
  //     ordem: "Erinaceomorpha",
  //     count: 6,
  //   },
  //   {
  //     ordem: "Columbiformes",
  //     count: 5,
  //   },
  //   {
  //     ordem: "Galliformes",
  //     count: 4,
  //   },
  //   {
  //     ordem: "Pilosa",
  //     count: 2,
  //   },
  //   {
  //     ordem: "Artiodactyla",
  //     count: 2,
  //   },
  //   {
  //     ordem: "Phasmida",
  //     count: 1,
  //   },
  //   {
  //     ordem: "Gruiformes",
  //     count: 1,
  //   },
  //   {
  //     ordem: "Ciconiiformes",
  //     count: 1,
  //   },
  //   {
  //     ordem: "Phoenicopteriformes",
  //     count: 1,
  //   },
  //   {
  //     ordem: "Musophagiformes",
  //     count: 1,
  //   },
  //   {
  //     ordem: "Anseriformes",
  //     count: 1,
  //   },
  //   {
  //     ordem: "Falconiformes",
  //     count: 1,
  //   },
  // ];

// TODO: pensar na estrutura da exposição dos dados, considerando que alguns retornos são diferentes (acima)
export function Result({ data }: ResultProps) {
  return (
    <S.Container $checktype={typeof data}>
      {JSON.stringify(data)}
    </S.Container>
  );
}
