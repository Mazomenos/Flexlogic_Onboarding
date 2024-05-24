import { useState } from "react";
import handler from "@/app/api/parse";

const useParseEDIfile = () => {
  const [data, setData] = useState<{
    success: boolean;
    message: string;
  } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const parseEDIfile = async (fileName: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/parseEDIfile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fileName }),
      });

      if (!response.ok) {
        throw new Error("Server response error");
      }

      const result = await response.json();
      setData(result);
    } catch (err) {
      if (err instanceof Error) {
        setError(err);
      } else {
        setError(new Error("Unknown error"));
      }
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, parseEDIfile };
};

export default useParseEDIfile;
