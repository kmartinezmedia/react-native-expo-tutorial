import { Platform, AsyncStorage } from "react-native";

import Reactotron from "./tron";

class LogConfig {
  /**
   * Configure Reactotron and redirect console.log to Reactotron.log
   */
  static configure() {
    if (Platform.OS === "web") {
      Reactotron.configure({ name: "Chummy" }).connect();
      Reactotron.clear();
    } else {
      Reactotron.setAsyncStorageHandler(AsyncStorage)
        .configure({ name: "Chummy" })
        .useReactNative({
          asyncStorage: false,
          networking: {
            // optionally, you can turn it off with false.
            ignoreUrls: /symbolicate/
          }
        })
        .connect();
      Reactotron.clear();
    }
  }

  connectConsoleToReactotron() {
    console.info = LogConfig.info;
    console.log = LogConfig.log;
    console.warn = LogConfig.warn;
    console.error = LogConfig.error;
    console.tron = Reactotron.log;
  }

  static log = (message: string, ...args: any[]) => {
    if (!__DEV__) return;
    Reactotron.display({
      name: "LOG",
      preview: message,
      value: { message, args }
    });
  };

  static info = (message: string, ...args: any[]) => {
    if (!__DEV__) return;
    Reactotron.display({
      name: "INFO",
      preview: message,
      value: { message, args }
    });
  };

  static warn = (message: string, ...args: any[]) => {
    if (!__DEV__) return;
    Reactotron.display({
      name: "WARN",
      preview: message,
      value: { message, args },
      important: true
    });
  };

  static error = (message: string, ...args: any[]) => {
    if (!__DEV__) return;
    Reactotron.display({
      name: "ERROR",
      preview: message,
      value: { message, args },
      important: true
    });
  };
}

export default LogConfig;
