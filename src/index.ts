import { install } from "source-map-support";
import ChromeExtensionReloaderImpl from "./ChromeExtensionReloader";
import { DEBUG, ERROR, NONE } from "./constants/log.constants";
import { setLogLevel } from "./utils/logger";

const env = process.env.NODE_ENV || "development";

install();

const logLevel =
  {
    production: ERROR,
    development: DEBUG,
    test: NONE
  }[env] || ERROR;

setLogLevel(logLevel);

export = ChromeExtensionReloaderImpl;
