## debridge-cross-chain-dapp-example

Explore a comprehensive demonstration showcasing a conceptual cross-chain decentralized application (dApp) leveraging the capabilities of the deBridge protocol. This example is developed using the Hardhat framework and the hardhat-debridge plugin. It provides insights into crafting, testing, simulating, and executing EVM (Ethereum Virtual Machine) contracts that rely on the infrastructure provided by deBridge.

By examining this generic example, you'll gain insights into constructing various real-world applications and protocols. These could range from object bridges to price feeds, and even automated cross-chain arbitrage services. The adaptability and extensibility of this example open doors to limitless possibilities in the realm of decentralized applications and protocols. The potential applications are vast and diverse—only restricted by your imagination!

### Introduction

Imagine a scenario where a `CrossChainCounter` contract is deployed on one blockchain. This contract holds a value that can be increased via a specific call initiated from another blockchain. However, the initiation of this call is exclusively allowed from the `CrossChainIncrementor` contract, residing at a predetermined and trusted address.

In this setup, the CrossChainCounter contract on one chain acts as a storage for a value, and the only authorized interaction to increment this value across chains is through the CrossChainIncrementor contract at its specified address. This controlled interaction mechanism ensures secure and controlled value updates between the interconnected chains.
### Contracts overview

`CrossChainCounter` is the contract representing receiver: it stores a value which is expected to be incremented by a call initiated by the trusted contract on another chain an broadcasted by the `deBridgeGate` contract. Thus, it expects the address of the `deBridgeGate` contract during deployment (you can find it at the [official docs](https://docs.debridge.finance/contracts/mainnet-addresses)).

`CrossChainIncrementor` is the contract representing sender: it is able to construct a message wit ha transaction call (a set of instructions to invoke `CrossChainCounter.receiveIncrementCommand()` with the given args) and pass it to the `deBridgeGate` with the intention to be broadcasted to another chain (where `CrossChainCounter` already resides) and be executed there. Thus, it expects:
- the address of the `deBridgeGate` contract on the same chain the contract is being deployed,
- the address of the `CrossChainCounter` contract on the destination chain,
- the chain ID of the destination chain where `CrossChainCounter` resides.

Additionally, `CrossChainCounter` only accepts calls originating from the trusted addresses, to it must be configured to whitelist the chain ID and the address where the `CrossChainCounter` contract resides. See `CrossChainIncrementor.addChainSupport()`.

### Tests overview

Tests are leveraging the [`hardhat-debridge` plugin](https://github.com/debridge-finance/hardhat-debridge).

`Basic.ts` is a simple test validating the normal flow: after the contracts are being deployed, the `CrossChainIncrementor` contract is being invoked to construct and pass the message to the gate; the emulator sends the message back to the gate; the gate executes the call which actually calls the `CrossChainCounter` with the args given in the message.

`Cases.ts` is a set of unit tests needed to validate edge cases and ensure security considerations are met: e.g., ensure that `CrossChainCounter` cannot by called by anyone but the gate, or that it rejects calls from untrusted addresses, etc.


### Tasks overview

This repository comes with a bunch of handy console commands to reproduce the aforementioned flow, either on the deBridge emulator (a part of `hardhat-debridge` plugin) or even on the mainnet chain. Available commands:
- `npx hardhat deploy-counter`
- `npx hardhat deploy-incrementor`
- `npx hardhat configure-incrementor`
- `npx hardhat configure-counter`
- `npx hardhat send-increment`
- `npx hardhat read-increment`

The best way to try them is to follow instructions from the `hardhat-debridge` plugin:
1. Run the hardhat node in the first terminal: `npx hardhat node`;
2. Run the emulator in the second terminal, attaching it to the hardhat node: `npx hardhat debridge-run-emulator --network localhost`;
3. Call these commands one by one against the hardhat node (`--network localhost`) in the third terminal.

#### Note on running against mainnet

Trying these contracts on the mainnet is almost the same: you can use the same commands or use any other method to deploy and configure the contracts.

It is important to remember that to finalize a cross-chain call (meaning that a broadcasted cross-chain message is being executed on the destination chain) a second transaction claiming the cross-chain message must be included to the destination chain. It can be done either:
- automatically by supplying extra amount of native currency of the origin chain as an `executionFee`, enough to cover the costs of including the transaction to the destination chain;
- manually on the [deExplorer](https://explorer.debridge.finance/), where you can find the proper cross-chain transaction by its `submissionId`;
- programmatically, fetching validators' signatures and properly constructing the transaction to claim the cross-chain message. This is out of scope of this document, however [this guide](https://docs.debridge.finance/build-with-debridge/getting-started) is a good starting point.

### Further reading

- [Getting started guide](https://docs.debridge.finance/build-with-debridge/getting-started)
- Using the deBridge emulator video (coming soon)

