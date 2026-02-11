import { Middleware } from "polymatic";

import { ToolConfig } from "./ToolConfig";

interface ToolSwitchContext {
  activeTool: ToolConfig;
}

/**
 * Handles tool-switch events, activates the provided tool if the name matches.
 */
export class ToolSwitch<T extends ToolSwitchContext> extends Middleware<T> {
  name: string;
  tool: Middleware;

  constructor(name: string, tool: Middleware) {
    super();
    this.name = name;
    this.tool = tool;
    this.on("tool-switch", this.handleSetActiveTool);
  }

  handleSetActiveTool(tool: ToolConfig) {
    if (tool.name === this.name) {
      this.context.activeTool = tool;
      this.use(this.tool);
    } else {
      this.unuse(this.tool);
    }
  }
}
