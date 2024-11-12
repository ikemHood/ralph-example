/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Address,
  ExecutableScript,
  ExecuteScriptParams,
  ExecuteScriptResult,
  Script,
  SignerProvider,
  HexString,
} from "@alephium/web3";
import { getContractByCodeHash } from "./contracts";
import { default as PayGasScriptJson } from "../PayGas.ral.json";
import { default as PayNoGasScriptJson } from "../PayNoGas.ral.json";

export const PayGas = new ExecutableScript<{ gaslessContract: HexString }>(
  Script.fromJson(PayGasScriptJson, "", []),
  getContractByCodeHash
);

export const PayNoGas = new ExecutableScript<{ gaslessContract: HexString }>(
  Script.fromJson(PayNoGasScriptJson, "", []),
  getContractByCodeHash
);