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
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface ICallProxyInterface extends ethers.utils.Interface {
  functions: {
    "call(address,address,bytes,uint256,bytes,uint256)": FunctionFragment;
    "callERC20(address,address,address,bytes,uint256,bytes,uint256)": FunctionFragment;
    "submissionChainIdFrom()": FunctionFragment;
    "submissionNativeSender()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "call",
    values: [string, string, BytesLike, BigNumberish, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "callERC20",
    values: [
      string,
      string,
      string,
      BytesLike,
      BigNumberish,
      BytesLike,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "submissionChainIdFrom",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "submissionNativeSender",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "call", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "callERC20", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "submissionChainIdFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "submissionNativeSender",
    data: BytesLike
  ): Result;

  events: {};
}

export class ICallProxy extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: ICallProxyInterface;

  functions: {
    call(
      _reserveAddress: string,
      _receiver: string,
      _data: BytesLike,
      _flags: BigNumberish,
      _nativeSender: BytesLike,
      _chainIdFrom: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    callERC20(
      _token: string,
      _reserveAddress: string,
      _receiver: string,
      _data: BytesLike,
      _flags: BigNumberish,
      _nativeSender: BytesLike,
      _chainIdFrom: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    submissionChainIdFrom(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    submissionNativeSender(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  call(
    _reserveAddress: string,
    _receiver: string,
    _data: BytesLike,
    _flags: BigNumberish,
    _nativeSender: BytesLike,
    _chainIdFrom: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callERC20(
    _token: string,
    _reserveAddress: string,
    _receiver: string,
    _data: BytesLike,
    _flags: BigNumberish,
    _nativeSender: BytesLike,
    _chainIdFrom: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  submissionChainIdFrom(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  submissionNativeSender(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    call(
      _reserveAddress: string,
      _receiver: string,
      _data: BytesLike,
      _flags: BigNumberish,
      _nativeSender: BytesLike,
      _chainIdFrom: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    callERC20(
      _token: string,
      _reserveAddress: string,
      _receiver: string,
      _data: BytesLike,
      _flags: BigNumberish,
      _nativeSender: BytesLike,
      _chainIdFrom: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    submissionChainIdFrom(overrides?: CallOverrides): Promise<BigNumber>;

    submissionNativeSender(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    call(
      _reserveAddress: string,
      _receiver: string,
      _data: BytesLike,
      _flags: BigNumberish,
      _nativeSender: BytesLike,
      _chainIdFrom: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    callERC20(
      _token: string,
      _reserveAddress: string,
      _receiver: string,
      _data: BytesLike,
      _flags: BigNumberish,
      _nativeSender: BytesLike,
      _chainIdFrom: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    submissionChainIdFrom(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    submissionNativeSender(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    call(
      _reserveAddress: string,
      _receiver: string,
      _data: BytesLike,
      _flags: BigNumberish,
      _nativeSender: BytesLike,
      _chainIdFrom: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    callERC20(
      _token: string,
      _reserveAddress: string,
      _receiver: string,
      _data: BytesLike,
      _flags: BigNumberish,
      _nativeSender: BytesLike,
      _chainIdFrom: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    submissionChainIdFrom(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    submissionNativeSender(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
