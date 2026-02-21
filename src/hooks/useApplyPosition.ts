import { useState } from "react";
import { BASE_URL_API, sufixApplyPosition } from "../config/contants";
/*
{
  "uuid": "tu uuid (del Step 2)",
  "jobId": "id de la posición (del Step 3)",
  "candidateId": "tu candidateId (del Step 2)",
  "repoUrl": "https://github.com/tu-usuario/tu-repo"
}
  */
interface IBodyApplyPosition {
  uuid: string;
  jobId: string;
  candidateId: string;
  repoUrl: string;
}

export const useApplyPosition = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");

  const handleSubmit = async (body: IBodyApplyPosition) => {
    try {
      if (body) {
        setLoading(true);
        const responseApi = await fetch(
          `${BASE_URL_API}${sufixApplyPosition}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
          },
        );

        if (!responseApi?.ok) {
          throw new Error("Ocurrio un error, no se pudo enviar la postulacion");
        }
      }
    } catch (error) {
      setError(error instanceof Error ? error.message : "Error desconocido.");
    } finally {
      setLoading(false);
    }
  };

  return {
    applyPosition: handleSubmit,
    loading,
    error,
  };
};
