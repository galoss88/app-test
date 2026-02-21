import { useState } from "react";
import {
  BASE_URL_API,
  MY_REPO_URL,
  sufixApplyPosition,
} from "../config/contants";
import { getCandidate } from "../services";
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
interface IHandleSubmit {
  jobId: string;
}
export const useApplyPosition = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");

  const handleSubmit = async (body: IHandleSubmit) => {
    try {
      setError("");
      if (body) {
        setLoading(true);
        const dataCandidate = await getCandidate();
        const bodyApplyPosition: IBodyApplyPosition = {
          uuid: dataCandidate.uuid,
          jobId: body.jobId,
          candidateId: dataCandidate.candidateId,
          repoUrl: MY_REPO_URL,
        };

        const responseApi = await fetch(
          `${BASE_URL_API}${sufixApplyPosition}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(bodyApplyPosition),
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
