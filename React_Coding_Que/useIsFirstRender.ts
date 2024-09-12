// Create a hook to tell if it is the first render.

import { useRef, useEffect } from "react";

export function useIsFirstRender(): boolean {
  const isFirstRender = useRef<boolean>(true);

  useEffect(() => {
    isFirstRender.current = false;
  }, []);

  return isFirstRender.current;
}