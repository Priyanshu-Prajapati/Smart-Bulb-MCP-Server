import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { turnOnBulb, turnOffBulb, changeColor } from "./service.js";

turnOffBulb();

// Create server instance
const server = new McpServer({
  name: "Smart-Bulb",
  version: "1.0.0",
  capabilities: {
    resources: {},
    tools: {},
  },
});

server.tool("turn-on-bulb", "Turn on the bulb", async () => {
  await turnOnBulb();
  return { content: [{ type: "text", text: "Bulb turned on" }] };
});

server.tool("turn-off-bulb", "Turn off the bulb", async () => {
  await turnOffBulb();
  return { content: [{ type: "text", text: "Bulb turned off" }] };
});

server.tool(
  "change-color",
  "Change the color of the bulb",
  {
    r: z.number().describe("Red value between 0 and 255"),
    g: z.number().describe("Green value between 0 and 255"),
    b: z.number().describe("Blue value between 0 and 255"),
    dimming: z
      .number()
      .describe(
        "Dimming value between 0 and 100, 100 means full and 50 means 50% Brightness"
      ),
  },
  async (params) => {
    const { r, g, b, dimming } = params;
    await changeColor({ r, g, b, dimming });
    return { content: [{ type: "text", text: "Color changed" }] };
  }
);

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("Smart Bulb MCP Server running on stdio");
}

main();
