/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  ERC1155TransferHelper,
  ERC1155TransferHelperInterface,
} from "../ERC1155TransferHelper";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_approvalsManager",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ZMM",
    outputs: [
      {
        internalType: "contract ZoraModuleManager",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "isModuleApproved",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "_tokenIds",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b5060405161097f38038061097f83398101604081905261002f916100b0565b806001600160a01b03811661009e5760405162461bcd60e51b815260206004820152602b60248201527f6d75737420736574206d6f64756c65206d616e6167657220746f206e6f6e2d7a60448201526a65726f206164647265737360a81b606482015260840160405180910390fd5b6001600160a01b0316608052506100e0565b6000602082840312156100c257600080fd5b81516001600160a01b03811681146100d957600080fd5b9392505050565b60805161087e610101600039600081816093015261013b015261087e6000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806372d27692146100515780637ee7f69b14610079578063e3e606f01461008e578063eb46c45b146100da575b600080fd5b61006461005f3660046103f5565b6100ed565b60405190151581526020015b60405180910390f35b61008c6100873660046105a3565b6101ae565b005b6100b57f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610070565b61008c6100e836600461065c565b6102dd565b6040517f37436c9800000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff82811660048301523360248301526000917f0000000000000000000000000000000000000000000000000000000000000000909116906337436c9890604401602060405180830381865afa158015610184573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101a891906106d0565b92915050565b846101b8816100ed565b610248576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f6d6f64756c6520686173206e6f74206265656e20617070726f7665642062792060448201527f757365720000000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6040517f2eb2c2d600000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff881690632eb2c2d6906102a29089908990899089908990600401610798565b600060405180830381600087803b1580156102bc57600080fd5b505af11580156102d0573d6000803e3d6000fd5b5050505050505050505050565b846102e7816100ed565b610372576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f6d6f64756c6520686173206e6f74206265656e20617070726f7665642062792060448201527f7573657200000000000000000000000000000000000000000000000000000000606482015260840161023f565b6040517ff242432a00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff88169063f242432a906102a29089908990899089908990600401610803565b803573ffffffffffffffffffffffffffffffffffffffff811681146103f057600080fd5b919050565b60006020828403121561040757600080fd5b610410826103cc565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561048d5761048d610417565b604052919050565b600082601f8301126104a657600080fd5b8135602067ffffffffffffffff8211156104c2576104c2610417565b8160051b6104d1828201610446565b92835284810182019282810190878511156104eb57600080fd5b83870192505b8483101561050a578235825291830191908301906104f1565b979650505050505050565b600082601f83011261052657600080fd5b813567ffffffffffffffff81111561054057610540610417565b61057160207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601610446565b81815284602083860101111561058657600080fd5b816020850160208301376000918101602001919091529392505050565b60008060008060008060c087890312156105bc57600080fd5b6105c5876103cc565b95506105d3602088016103cc565b94506105e1604088016103cc565b9350606087013567ffffffffffffffff808211156105fe57600080fd5b61060a8a838b01610495565b9450608089013591508082111561062057600080fd5b61062c8a838b01610495565b935060a089013591508082111561064257600080fd5b5061064f89828a01610515565b9150509295509295509295565b60008060008060008060c0878903121561067557600080fd5b61067e876103cc565b955061068c602088016103cc565b945061069a604088016103cc565b9350606087013592506080870135915060a087013567ffffffffffffffff8111156106c457600080fd5b61064f89828a01610515565b6000602082840312156106e257600080fd5b8151801515811461041057600080fd5b600081518084526020808501945080840160005b8381101561072257815187529582019590820190600101610706565b509495945050505050565b6000815180845260005b8181101561075357602081850181015186830182015201610737565b81811115610765576000602083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b600073ffffffffffffffffffffffffffffffffffffffff808816835280871660208401525060a060408301526107d160a08301866106f2565b82810360608401526107e381866106f2565b905082810360808401526107f7818561072d565b98975050505050505050565b600073ffffffffffffffffffffffffffffffffffffffff808816835280871660208401525084604083015283606083015260a0608083015261050a60a083018461072d56fea264697066735822122023e81e2cfb7c9713acd6c6a701f76bec7adf94de34e1a21669bf3bed2492215164736f6c634300080a0033";

type ERC1155TransferHelperConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC1155TransferHelperConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC1155TransferHelper__factory extends ContractFactory {
  constructor(...args: ERC1155TransferHelperConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _approvalsManager: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC1155TransferHelper> {
    return super.deploy(
      _approvalsManager,
      overrides || {}
    ) as Promise<ERC1155TransferHelper>;
  }
  override getDeployTransaction(
    _approvalsManager: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_approvalsManager, overrides || {});
  }
  override attach(address: string): ERC1155TransferHelper {
    return super.attach(address) as ERC1155TransferHelper;
  }
  override connect(signer: Signer): ERC1155TransferHelper__factory {
    return super.connect(signer) as ERC1155TransferHelper__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC1155TransferHelperInterface {
    return new utils.Interface(_abi) as ERC1155TransferHelperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC1155TransferHelper {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ERC1155TransferHelper;
  }
}