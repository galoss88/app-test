import { BASE_URL_API, MY_EMAIL, sufixUrlCandidate } from "../config/contants";

export const getCandidate = async () => {
  const sufix = `${sufixUrlCandidate}?email=${MY_EMAIL}`;
  try {
    await fetch(`${BASE_URL_API}${sufix}`, {
      method: "GET",
    });
  } catch (e) {
    console.log(`Error al obtener información del candidato: ${e}`);
    throw new Error("Ocurrio un error al obtener información del candidato.");
  }
};
