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

export interface IExchangeInterface extends ethers.utils.Interface {
  functions: {
    "PttToTokenInputSwap(uint256,uint256,uint256)": FunctionFragment;
    "PttToTokenOutputSwap(uint256,uint256,uint256)": FunctionFragment;
    "getTokenToPttOutputPrice(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "PttToTokenInputSwap",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "PttToTokenOutputSwap",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getTokenToPttOutputPrice",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "PttToTokenInputSwap",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "PttToTokenOutputSwap",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTokenToPttOutputPrice",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IExchange extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IExchangeInterface;

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
    PttToTokenInputSwap(
      _ptt_sold: BigNumberish,
      _min_token: BigNumberish,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    PttToTokenOutputSwap(
      _token_bought: BigNumberish,
      _max_ptt: BigNumberish,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getTokenToPttOutputPrice(
      _token_bought: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  PttToTokenInputSwap(
    _ptt_sold: BigNumberish,
    _min_token: BigNumberish,
    deadline: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  PttToTokenOutputSwap(
    _token_bought: BigNumberish,
    _max_ptt: BigNumberish,
    deadline: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getTokenToPttOutputPrice(
    _token_bought: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    PttToTokenInputSwap(
      _ptt_sold: BigNumberish,
      _min_token: BigNumberish,
      deadline: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    PttToTokenOutputSwap(
      _token_bought: BigNumberish,
      _max_ptt: BigNumberish,
      deadline: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTokenToPttOutputPrice(
      _token_bought: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    PttToTokenInputSwap(
      _ptt_sold: BigNumberish,
      _min_token: BigNumberish,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    PttToTokenOutputSwap(
      _token_bought: BigNumberish,
      _max_ptt: BigNumberish,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getTokenToPttOutputPrice(
      _token_bought: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    PttToTokenInputSwap(
      _ptt_sold: BigNumberish,
      _min_token: BigNumberish,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    PttToTokenOutputSwap(
      _token_bought: BigNumberish,
      _max_ptt: BigNumberish,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getTokenToPttOutputPrice(
      _token_bought: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}