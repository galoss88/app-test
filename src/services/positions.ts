import {
  BASE_URL_API,
  sufixApplyPosition,
  sufixUrlPositions,
} from "../config/contants";
import type { IBodyApplyPosition } from "../types/types";

export const getPositions = async () => {
  try {
    const responseApi = await fetch(`${BASE_URL_API}${sufixUrlPositions}`, {
      method: "GET",
      mode: "cors",
    });

    return responseApi;
  } catch (e) {
    console.log(`Error llamada api posiciones: ${e}`);
    throw new Error(`Ocurrio un error al obtener posiciones a postular.`);
  }
};

export const applyPosition = async (bodyApplyPosition: IBodyApplyPosition) => {
  try {
    const responseApi = await fetch(`${BASE_URL_API}${sufixApplyPosition}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyApplyPosition),
    });
    return responseApi;
  } catch (e) {
    console.log(`Error aplicar posicion: ${e}`); //Mensaje para el error tecnico.
    throw new Error("Ocurrio un error al intentar realizar la postulación.");
  }
};
