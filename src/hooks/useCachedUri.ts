import { useEffect, useState } from "react";
import { Platform } from "react-native";

import { CacheManager } from "utils";

const useCachedUri = (uri: string | undefined): string | undefined => {
  const [cachedUri, setCachedUri] = useState<string | undefined>(uri);

  useEffect(() => {
    if (Platform.OS === "web") {
      setCachedUri(uri ?? "");
      return;
    }
    if (!uri) return;
    let cancel = false;
    const runEffect = async () => {
      const path = await CacheManager.get(uri).getPath();
      if (cancel || !path) return;
      setCachedUri(path);
    };
    runEffect();
    return () => {
      cancel = true;
    };
  }, [uri, setCachedUri]);

  return cachedUri;
};

export default useCachedUri;
