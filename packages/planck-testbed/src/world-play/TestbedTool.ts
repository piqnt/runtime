import { Middleware } from "polymatic";

import { ImpulseTool } from "./ImpulseTool";
import { PullTool } from "./PullTool";
import { TestbedContext } from "../testbed/TestbedContext";

/** Default tool combining pull and impulse tools */
export class TestbedTool extends Middleware<TestbedContext> {
  constructor() {
    super();
    this.use(new PullTool());
    this.use(new ImpulseTool());
  }
}
