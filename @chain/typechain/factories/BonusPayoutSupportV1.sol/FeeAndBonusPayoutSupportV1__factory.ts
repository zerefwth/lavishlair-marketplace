/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  FeeAndBonusPayoutSupportV1,
  FeeAndBonusPayoutSupportV1Interface,
} from "../../BonusPayoutSupportV1.sol/FeeAndBonusPayoutSupportV1";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_royaltyEngine",
        type: "address",
      },
      {
        internalType: "address",
        name: "_protocolFeeSettings",
        type: "address",
      },
      {
        internalType: "address",
        name: "_daoGovernance",
        type: "address",
      },
      {
        internalType: "address",
        name: "_wethAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_registrarAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "tokenContract",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "BonusPayout",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "tokenContract",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "RoyaltyPayout",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenContract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_buyer",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_payoutCurrency",
        type: "address",
      },
    ],
    name: "_handleMarketGovernancePayout",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenContract",
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
        internalType: "address",
        name: "_payoutCurrency",
        type: "address",
      },
    ],
    name: "_handleRoyaltyEnginePayout",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "registrar",
    outputs: [
      {
        internalType: "address",
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
        name: "_daoGovernance",
        type: "address",
      },
    ],
    name: "setGovernanceAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_royaltyEngine",
        type: "address",
      },
    ],
    name: "setRoyaltyEngineAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60e06040523480156200001157600080fd5b506040516200170238038062001702833981016040819052620000349162000097565b6001600160a01b03918216608052600080549383166001600160a01b031994851617905560018054958316959093169490941790915590811660c0521660a05262000107565b80516001600160a01b03811681146200009257600080fd5b919050565b600080600080600060a08688031215620000b057600080fd5b620000bb866200007a565b9450620000cb602087016200007a565b9350620000db604087016200007a565b9250620000eb606087016200007a565b9150620000fb608087016200007a565b90509295509295909350565b60805160a05160c0516115ba6200014860003960005050600081816097015281816106bc015261087e015260008181610b870152610c1f01526115ba6000f3fe60806040526004361061005a5760003560e01c80639128c22c116100435780639128c22c146100de578063b249bb30146100f1578063cfc162541461011357600080fd5b8063030511be1461005f5780632b20e39714610085575b600080fd5b61007261006d366004611202565b610133565b6040519081526020015b60405180910390f35b34801561009157600080fd5b506100b97f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161007c565b6100726100ec366004611261565b6103ff565b3480156100fd57600080fd5b5061011161010c3660046112ab565b6106a4565b005b34801561011f57600080fd5b5061011161012e3660046112ab565b610866565b60003330146101c9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f5f68616e646c65426f6e75735061796f7574206f6e6c792073656c662063616c60448201527f6c61626c6500000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b600080546040517fbeab4ce500000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8981166004830152602482018990528781166044830152606482018790528392169063beab4ce5906084016000604051808303816000875af1158015610252573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405261029891908101906113d5565b81519193509150806102af578593505050506103f6565b85600080805b848110156103ec578681815181106102cf576102cf61149a565b602002602001015192508581815181106102eb576102eb61149a565b602002602001015191508184101561035f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600960248201527f696e736f6c76656e74000000000000000000000000000000000000000000000060448201526064016101c0565b61036d83838b61c350610a28565b8b8d73ffffffffffffffffffffffffffffffffffffffff167fed0a00d2f2f253746ecad47862b27c7b9d40f31ff454e4e33d467acc035e8f7a85856040516103d792919073ffffffffffffffffffffffffffffffffffffffff929092168252602082015260400190565b60405180910390a392819003926001016102b5565b5091955050505050505b95945050505050565b6000333014610490576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602d60248201527f5f68616e646c65526f79616c7479456e67696e655061796f7574206f6e6c792060448201527f73656c662063616c6c61626c650000000000000000000000000000000000000060648201526084016101c0565b6001546040517ff533b80200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff87811660048301526024820187905260448201869052600092839291169063f533b802906064016000604051808303816000875af1158015610514573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405261055a91908101906113d5565b81519193509150806105715785935050505061069c565b85600080805b84811015610692578681815181106105915761059161149a565b602002602001015192508581815181106105ad576105ad61149a565b6020026020010151915081841015610621576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600960248201527f696e736f6c76656e74000000000000000000000000000000000000000000000060448201526064016101c0565b61062f83838b61c350610a28565b6040805173ffffffffffffffffffffffffffffffffffffffff8581168252602082018590528d92908f16917f866e6ef8682ddf5f1025e64dfdb45527077f7be70fa9ef680b7ffd8cf4ab9c50910160405180910390a39281900392600101610577565b5091955050505050505b949350505050565b3373ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614610769576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f736574526f79616c7479456e67696e6541646472657373206f6e6c792072656760448201527f697374726172000000000000000000000000000000000000000000000000000060648201526084016101c0565b610793817fcb23f81600000000000000000000000000000000000000000000000000000000610c78565b61081f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603d60248201527f736574526f79616c7479456e67696e6541646472657373206d757374206d617460448201527f63682049526f79616c7479456e67696e65563120696e7465726661636500000060648201526084016101c0565b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b3373ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000161461092b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f736574476f7665726e616e636541646472657373206f6e6c792072656769737460448201527f726172000000000000000000000000000000000000000000000000000000000060648201526084016101c0565b610955817fbeab4ce500000000000000000000000000000000000000000000000000000000610c78565b6109e1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603b60248201527f736574476f7665726e616e636541646472657373206d757374206d617463682060448201527f494d61726b6574476f7665726e616e636520696e74657266616365000000000060648201526084016101c0565b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b821580610a49575073ffffffffffffffffffffffffffffffffffffffff8416155b15610a5357610c72565b73ffffffffffffffffffffffffffffffffffffffff8216610c515782471015610afe576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f5f68616e646c654f7574676f696e675472616e7366657220696e736f6c76656e60448201527f740000000000000000000000000000000000000000000000000000000000000060648201526084016101c0565b6000811580610b0c57505a82115b610b165781610b18565b5a5b905060008573ffffffffffffffffffffffffffffffffffffffff16858390604051600060405180830381858888f193505050503d8060008114610b77576040519150601f19603f3d011682016040523d82523d6000602084013e610b7c565b606091505b5050905080610c4a577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d0e30db0866040518263ffffffff1660e01b81526004016000604051808303818588803b158015610bed57600080fd5b505af1158015610c01573d6000803e3d6000fd5b50610c4a93505073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016915088905087610c9d565b5050610c72565b610c7273ffffffffffffffffffffffffffffffffffffffff83168585610c9d565b50505050565b6000610c8383610d2f565b8015610c945750610c948383610d93565b90505b92915050565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb00000000000000000000000000000000000000000000000000000000179052610d2a908490610ecf565b505050565b6000610d5b827f01ffc9a700000000000000000000000000000000000000000000000000000000610d93565b8015610c975750610d8c827fffffffff00000000000000000000000000000000000000000000000000000000610d93565b1592915050565b604080517fffffffff00000000000000000000000000000000000000000000000000000000831660248083019190915282518083039091018152604490910182526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f01ffc9a7000000000000000000000000000000000000000000000000000000001790529051600091908290819073ffffffffffffffffffffffffffffffffffffffff87169061753090610e4d9086906114f5565b6000604051808303818686fa925050503d8060008114610e89576040519150601f19603f3d011682016040523d82523d6000602084013e610e8e565b606091505b5091509150602081511015610ea95760009350505050610c97565b818015610ec5575080806020019051810190610ec59190611511565b9695505050505050565b6000610f31826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16610fdb9092919063ffffffff16565b805190915015610d2a5780806020019051810190610f4f9190611511565b610d2a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016101c0565b6060610fea8484600085610ff4565b90505b9392505050565b606082471015611086576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016101c0565b73ffffffffffffffffffffffffffffffffffffffff85163b611104576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016101c0565b6000808673ffffffffffffffffffffffffffffffffffffffff16858760405161112d91906114f5565b60006040518083038185875af1925050503d806000811461116a576040519150601f19603f3d011682016040523d82523d6000602084013e61116f565b606091505b509150915061117f82828661118a565b979650505050505050565b60608315611199575081610fed565b8251156111a95782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101c09190611533565b73ffffffffffffffffffffffffffffffffffffffff811681146111ff57600080fd5b50565b600080600080600060a0868803121561121a57600080fd5b8535611225816111dd565b945060208601359350604086013561123c816111dd565b9250606086013591506080860135611253816111dd565b809150509295509295909350565b6000806000806080858703121561127757600080fd5b8435611282816111dd565b9350602085013592506040850135915060608501356112a0816111dd565b939692955090935050565b6000602082840312156112bd57600080fd5b8135610fed816111dd565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561133e5761133e6112c8565b604052919050565b600067ffffffffffffffff821115611360576113606112c8565b5060051b60200190565b600082601f83011261137b57600080fd5b8151602061139061138b83611346565b6112f7565b82815260059290921b840181019181810190868411156113af57600080fd5b8286015b848110156113ca57805183529183019183016113b3565b509695505050505050565b600080604083850312156113e857600080fd5b825167ffffffffffffffff8082111561140057600080fd5b818501915085601f83011261141457600080fd5b8151602061142461138b83611346565b82815260059290921b8401810191818101908984111561144357600080fd5b948201945b8386101561146a57855161145b816111dd565b82529482019490820190611448565b9188015191965090935050508082111561148357600080fd5b506114908582860161136a565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60005b838110156114e45781810151838201526020016114cc565b83811115610c725750506000910152565b600082516115078184602087016114c9565b9190910192915050565b60006020828403121561152357600080fd5b81518015158114610fed57600080fd5b60208152600082518060208401526115528160408501602087016114c9565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fea264697066735822122075f37a493fecfec67fb5de062b462073d5a068291c4a0b90ffb3dffaa50fa90964736f6c634300080a0033";

type FeeAndBonusPayoutSupportV1ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FeeAndBonusPayoutSupportV1ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FeeAndBonusPayoutSupportV1__factory extends ContractFactory {
  constructor(...args: FeeAndBonusPayoutSupportV1ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _royaltyEngine: PromiseOrValue<string>,
    _protocolFeeSettings: PromiseOrValue<string>,
    _daoGovernance: PromiseOrValue<string>,
    _wethAddress: PromiseOrValue<string>,
    _registrarAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<FeeAndBonusPayoutSupportV1> {
    return super.deploy(
      _royaltyEngine,
      _protocolFeeSettings,
      _daoGovernance,
      _wethAddress,
      _registrarAddress,
      overrides || {}
    ) as Promise<FeeAndBonusPayoutSupportV1>;
  }
  override getDeployTransaction(
    _royaltyEngine: PromiseOrValue<string>,
    _protocolFeeSettings: PromiseOrValue<string>,
    _daoGovernance: PromiseOrValue<string>,
    _wethAddress: PromiseOrValue<string>,
    _registrarAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _royaltyEngine,
      _protocolFeeSettings,
      _daoGovernance,
      _wethAddress,
      _registrarAddress,
      overrides || {}
    );
  }
  override attach(address: string): FeeAndBonusPayoutSupportV1 {
    return super.attach(address) as FeeAndBonusPayoutSupportV1;
  }
  override connect(signer: Signer): FeeAndBonusPayoutSupportV1__factory {
    return super.connect(signer) as FeeAndBonusPayoutSupportV1__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FeeAndBonusPayoutSupportV1Interface {
    return new utils.Interface(_abi) as FeeAndBonusPayoutSupportV1Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FeeAndBonusPayoutSupportV1 {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as FeeAndBonusPayoutSupportV1;
  }
}