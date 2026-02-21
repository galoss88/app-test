import { BASE_URL_API, MY_EMAIL, sufixUrlCandidate } from "../config/contants";

interface IResponseApiGetCandidate {
  uuid: string;
  candidateId: string;
  applicationId: string;
  firstName: string;
  lastName: string;
  email: string;
}
export const getCandidate = async (): Promise<IResponseApiGetCandidate> => {
  const sufix = `${sufixUrlCandidate}?email=${MY_EMAIL}`;
  try {
    const responseApi = await fetch(`${BASE_URL_API}${sufix}`, {
      method: "GET",
    });
    if (!responseApi.ok) {
      throw new Error(`Error HTTP: ${responseApi.status}`);
    }
    return responseApi.json();
  } catch (e) {
    console.log(`Error al obtener información del candidato: ${e}`);
    throw new Error("Ocurrio un error al obtener información del candidato.");
  }
};
