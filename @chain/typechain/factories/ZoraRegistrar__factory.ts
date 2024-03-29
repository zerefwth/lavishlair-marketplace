/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { ZoraRegistrar, ZoraRegistrarInterface } from "../ZoraRegistrar";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract ZoraModuleManager",
        name: "_ZMM",
        type: "address",
      },
    ],
    name: "init",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_module",
        type: "address",
      },
    ],
    name: "registerModule",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_registrar",
        type: "address",
      },
    ],
    name: "setRegistrar",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610223806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806319ab453c14610046578063ad64ae4b1461009d578063faab9d39146100b0575b600080fd5b61009b6100543660046101c9565b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b005b61009b6100ab3660046101c9565b6100c3565b61009b6100be3660046101c9565b61014c565b6000546040517fad64ae4b00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff83811660048301529091169063ad64ae4b906024015b600060405180830381600087803b15801561013157600080fd5b505af1158015610145573d6000803e3d6000fd5b5050505050565b6000546040517ffaab9d3900000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff83811660048301529091169063faab9d3990602401610117565b73ffffffffffffffffffffffffffffffffffffffff811681146101c657600080fd5b50565b6000602082840312156101db57600080fd5b81356101e6816101a4565b939250505056fea26469706673582212205f67bd3862874636508019a80a04562766d3e413d7d9ad67b0152d2bb729d4df64736f6c634300080a0033";

type ZoraRegistrarConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ZoraRegistrarConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ZoraRegistrar__factory extends ContractFactory {
  constructor(...args: ZoraRegistrarConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ZoraRegistrar> {
    return super.deploy(overrides || {}) as Promise<ZoraRegistrar>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ZoraRegistrar {
    return super.attach(address) as ZoraRegistrar;
  }
  override connect(signer: Signer): ZoraRegistrar__factory {
    return super.connect(signer) as ZoraRegistrar__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ZoraRegistrarInterface {
    return new utils.Interface(_abi) as ZoraRegistrarInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ZoraRegistrar {
    return new Contract(address, _abi, signerOrProvider) as ZoraRegistrar;
  }
}
