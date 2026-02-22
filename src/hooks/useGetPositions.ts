import { useEffect, useState } from "react";
import { getPositions } from "../services/positions";
import type { IPositionsApi } from "../types/types";

export const useGetPositions = () => {
  const [positions, setPositions] = useState<IPositionsApi[]>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getPositionsDataApi = async () => {
      try {
        resetDefault();
        setLoading(true);
        const responseApi = await getPositions();

        if (!responseApi.ok) {
          throw new Error(
            `HTTP ${responseApi.status}: ${responseApi.statusText}`,
          );
        }

        const data = await responseApi.json();
        setPositions(data);
      } catch (e: unknown) {
        if (e instanceof Error && e.name !== "AbortError") {
          setError(e.message);
        }
      } finally {
        setLoading(false);
      }
    };
    getPositionsDataApi();
  }, []);
  const resetDefault = () => {
    setError("");
  };
  return { positions, loading, error };
};
