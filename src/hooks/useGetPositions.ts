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
        setError("");
        setLoading(true);
        const responseApi = await getPositions();

        if (!responseApi.ok) {
          throw new Error(
            `HTTP ${responseApi.status}: ${responseApi.statusText}`,
          );
        }

        const data = await responseApi.json();
        setPositions(data);
      } catch (err) {
        if (err instanceof Error && err.name !== "AbortError") {
          setError("Ocurrio un error al cargar las posiciones.");
        }
      } finally {
        setLoading(false);
      }
    };
    getPositionsDataApi();
  }, []);

  return { positions, loading, error };
};
