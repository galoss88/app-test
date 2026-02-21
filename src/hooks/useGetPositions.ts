import { useEffect, useState } from "react";
import { BASE_URL_API } from "../config/contants";
import type { IPositionsApi } from "../types/types";

export const useGetPositions = () => {
  const [positions, setPositions] = useState<IPositionsApi[]>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getPositionsDataApi = async () => {
      const sufix = "/api/jobs/get-list";
      try {
        setLoading(true);
        const responseApi = await fetch(`${BASE_URL_API}${sufix}`, {
          method: "GET",
          mode: "cors",
        });

        if (!responseApi.ok) {
          throw new Error(
            `HTTP ${responseApi.status}: ${responseApi.statusText}`,
          );
        }

        const data = await responseApi.json();
        setPositions(data);
      } catch (err) {
        if (err instanceof Error && err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };
    getPositionsDataApi();
  }, []);

  return { positions, loading, error };
};
