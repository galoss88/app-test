import { useState } from "react";
import { applyPosition, getCandidate } from "../services";
import type { IBodyApplyPosition } from "../types/types";

interface IHandleSubmit {
  jobId: string;
  repoUrl: string;
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
          repoUrl: body.repoUrl,
        };

        const responseApi = await applyPosition(bodyApplyPosition);

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
