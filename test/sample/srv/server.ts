import cds from "@sap/cds";
import { cds_launchpad_plugin } from "cds-launchpad-plugin";

module.exports = cds.server;

const bootstrap = (app: any): void => {
  const handler = new cds_launchpad_plugin();
  app.use(handler.setup());
};

cds.once("bootstrap", bootstrap);
