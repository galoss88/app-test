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
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const handleSubmit = async (body: IHandleSubmit) => {
    try {
      resetDefault();
      if (!body.jobId || !body.repoUrl) {
        throw new Error("Faltan completar datos para postular.");
      }
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
          throw new Error(
            "Ocurrio un error, no se pudo enviar la postulacion.",
          );
        }
        setIsSuccess(true);
      }
    } catch (error) {
      setError(error instanceof Error ? error.message : "Error desconocido.");
    } finally {
      setTimeout(() => setIsSuccess(false), 3000);
      setLoading(false);
    }
  };
  const resetDefault = () => {
    setIsSuccess(false);
    setError("");
  };
  return {
    applyPosition: handleSubmit,
    loading,
    error,
    isSuccess,
  };
};
