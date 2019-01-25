/// <reference types="node" />
import { H256, U256 } from "codechain-primitives";
import { SignedTransaction } from "codechain-sdk/lib/core/SignedTransaction";
import { IBodiesq, IHeadersq } from "./blockSyncMessage";
import { Header } from "./cHeader";
declare type EncodedHeaders = Array<Array<Buffer>>;
declare type EncodedParcels = Array<Array<Buffer>>;
declare type EncodedBodies = Array<Array<Array<Buffer>>>;
export declare class TestHelper {
    private p2psocket;
    private log;
    constructor(ip: string, port: number);
    setLog(): void;
    readonly genesisHash: H256;
    establish(bestHash?: H256, bestScore?: U256): Promise<void>;
    end(): Promise<void>;
    getBlockHeaderResponse(): EncodedHeaders | null;
    getBlockBodyResponse(): EncodedBodies | null;
    getParcelSyncMessage(): EncodedHeaders | null;
    getBlockHeaderRequest(): IHeadersq | null;
    getBlockBodyRequest(): IBodiesq | null;
    sendStatus(score: U256, bestHash: H256, genesisHash: H256): Promise<void>;
    sendHeaderRequest(startNumber: U256, maxCount: U256): Promise<void>;
    sendBlockHeaderResponse(headers: EncodedHeaders): Promise<void>;
    sendBlockBodyResponse(bodies: EncodedBodies): Promise<void>;
    sendParcelSyncMessage(parcels: EncodedParcels): Promise<void>;
    sendEncodedBlock(header: EncodedHeaders, body: EncodedBodies, bestBlockHash: H256, bestBlockScore: U256): Promise<void>;
    sendBlock(header: Array<Header>, body: Array<Array<SignedTransaction>>): Promise<void>;
    sendEncodedParcel(parcels: EncodedParcels): Promise<void>;
    sendParcel(parcels: Array<SignedTransaction>): Promise<void>;
    private waitForBlockSyncMessage;
    waitStatusMessage(): Promise<void>;
    waitHeaderRequest(): Promise<void>;
    waitBodyRequest(): Promise<void>;
    waitHeaderResponse(): Promise<void>;
    waitBodyResponse(): Promise<void>;
    soloGenesisBlockHeader(): Header;
    soloBlock1(parent: H256): Header;
    soloBlock2(parent: H256): Header;
}
export {};
