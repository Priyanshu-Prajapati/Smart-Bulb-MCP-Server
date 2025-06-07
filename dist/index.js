"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mcp_js_1 = require("@modelcontextprotocol/sdk/server/mcp.js");
const service_js_1 = require("./service.js");
(0, service_js_1.turnOffBulb)();
// Create server instance
const server = new mcp_js_1.McpServer({
    name: "Smart-Bulb",
    version: "1.0.0",
    capabilities: {
        resources: {},
        tools: {},
    },
});
server.tool('turn-on-bulb', 'Turn on the bulb', () => __awaiter(void 0, void 0, void 0, function* () {
    return { content: [] };
}));
