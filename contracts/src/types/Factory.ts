/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export interface FactoryInterface extends ethers.utils.Interface {
  functions: {
    "ProtienTokenAddress()": FunctionFragment;
    "createExchange(address)": FunctionFragment;
    "getExchange(address)": FunctionFragment;
    "tokenToExchange(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "ProtienTokenAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "createExchange",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "getExchange", values: [string]): string;
  encodeFunctionData(
    functionFragment: "tokenToExchange",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "ProtienTokenAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createExchange",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getExchange",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenToExchange",
    data: BytesLike
  ): Result;

  events: {};
}

export interface Factory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: FactoryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    ProtienTokenAddress(overrides?: CallOverrides): Promise<[string]>;

    createExchange(
      _tokenAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getExchange(
      _tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    tokenToExchange(arg0: string, overrides?: CallOverrides): Promise<[string]>;
  };

  ProtienTokenAddress(overrides?: CallOverrides): Promise<string>;

  createExchange(
    _tokenAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getExchange(
    _tokenAddress: string,
    overrides?: CallOverrides
  ): Promise<string>;

  tokenToExchange(arg0: string, overrides?: CallOverrides): Promise<string>;

  callStatic: {
    ProtienTokenAddress(overrides?: CallOverrides): Promise<string>;

    createExchange(
      _tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<string>;

    getExchange(
      _tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<string>;

    tokenToExchange(arg0: string, overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    ProtienTokenAddress(overrides?: CallOverrides): Promise<BigNumber>;

    createExchange(
      _tokenAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getExchange(
      _tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokenToExchange(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    ProtienTokenAddress(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    createExchange(
      _tokenAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getExchange(
      _tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tokenToExchange(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}