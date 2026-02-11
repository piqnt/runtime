import { Runtime } from "polymatic";

import { DefaultTestbedContext } from "./TestbedContext";
import { TestbedMain } from "./TestbedMain";
import { Testbed } from "planck";
import { TestbedInstance } from "./Testbed";

export * from "./TestbedContext";
export * from "./TestbedMain";

Testbed.mount = () => {
  const main = new TestbedMain();
  const context = new DefaultTestbedContext();
  // emit is async, tool-switch will happen after this function returns
  // set activeTool early to allow changing maxForce in testbed code
  context.activeTool = { name: "default" };
  // for debugging
  window["runtime"] = main;
  context.testbed = new TestbedInstance(main);
  Runtime.activate(main, context);
  main.emit("tool-switch", context.activeTool);
  return context.testbed;
};
