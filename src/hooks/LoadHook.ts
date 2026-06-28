import { useState, useCallback } from "react";

export function useLoading() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const withLoading = useCallback(async <T>(func: () => Promise<T>): Promise<T> => {
    setIsLoading(true);
    try {
      return await func();
    } finally {
      setIsLoading(false);
    }
  }, []);

  return [isLoading, withLoading] as const;
}