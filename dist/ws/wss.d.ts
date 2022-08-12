import WebSocket from 'ws';
import http from 'http';
import { WsMessage } from './WsMessage';
import { JSONApiEnvelope } from 'mm-ts-utils';
export interface AdvancedWebSocket extends WebSocket {
    cid: string;
    isAlive: boolean;
    ip: string;
    rooms: any;
}
interface WssInitOptions {
    autoReconnectInterval?: number;
    originWhitelist?: string[];
    logger?: (...rest: any[]) => void;
}
/**
 * @param {"http".Server | number} serverOrPort
 * @param {WssInitOptions} options
 * @returns {WebSocket.Server}
 */
export declare const createWss: (serverOrPort: http.Server | number, options?: WssInitOptions) => WebSocket.Server;
/*********************************************************************************
 * helpers
 ********************************************************************************/
/**
 * @param {WebSocket.Server} wss
 * @param {WsMessage} msg
 * @param {WebSocket} ws
 */
export declare const wsSend: (wss: WebSocket.Server, msg: WsMessage, ws?: WebSocket) => void;
export declare const wsSendPayloadToRoom: (wss: WebSocket.Server, payload: string, room: any, type?: any) => void;
export declare const wsSendPayloadToAll: (wss: WebSocket.Server, payload: string, type?: any) => void;
export declare const wsSendJsonApiToRoom: (wss: WebSocket.Server, payload: JSONApiEnvelope, room: any) => void;
export declare const wsSendJsonApiUpdateToRoom: (wss: WebSocket.Server, payload: JSONApiEnvelope, room: any) => void;
export declare const wsSendJsonApiDeleteToRoom: (wss: WebSocket.Server, payload: JSONApiEnvelope, room: any) => void;
export {};
