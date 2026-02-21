import { BASE_URL_API, sufixUrlPositions } from "../config/contants";

export const getPositions = async () => {
  try {
    const responseApi = await fetch(`${BASE_URL_API}${sufixUrlPositions}`, {
      method: "GET",
      mode: "cors",
    });

    return responseApi;
  } catch (e) {
    console.log(`Error llamada api posiciones: ${e}`);
    throw new Error(`Ocurrio un error al llamar a la api de posiciones.`);
  }
};
