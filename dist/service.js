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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.turnOnBulb = turnOnBulb;
exports.turnOffBulb = turnOffBulb;
const dgram_1 = __importDefault(require("dgram"));
const BULB_IP = process.env.BULB_IP;
const BULB_PORT = process.env.BULB_PORT;
function turnOnBulb() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = dgram_1.default.createSocket("udp4");
        const message = JSON.stringify({
            method: "setState",
            params: {
                state: true,
            }
        });
        client.send(message, Number(BULB_PORT), BULB_IP, (err) => {
            if (err) {
                console.error("Error sending message:", err);
            }
        });
        client.close();
    });
}
function turnOffBulb() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = dgram_1.default.createSocket("udp4");
        const message = JSON.stringify({
            method: "setState",
            params: {
                state: false,
            }
        });
        client.send(message, Number(BULB_PORT), BULB_IP, (err) => {
            if (err) {
                console.error("Error sending message:", err);
            }
        });
        client.close();
    });
}
