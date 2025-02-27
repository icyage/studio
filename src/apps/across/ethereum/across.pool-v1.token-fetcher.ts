import { PositionTemplate } from '~app-toolkit/decorators/position-template.decorator';

import { AcrossPoolV1TokenFetcher } from '../common/across.pool-v1.token-fetcher';

@PositionTemplate()
export class EthereumAcrossPoolV1TokenFetcher extends AcrossPoolV1TokenFetcher {
  groupLabel = 'Pools';

  poolAddresses = [
    '0x43298f9f91a4545df64748e78a2c777c580573d6', // BADGER
    '0x4841572daa1f8e4ce0f62570877c2d0cc18c9535', // BOBA
    '0x43f133fe6fdfa17c417695c476447dc2a449ba5b', // DAI
    '0xdfe0ec39291e3b60aca122908f86809c9ee64e90', // UMA
    '0x256c8919ce1ab0e33974cf6aa9c71561ef3017b6', // USDC
    '0x02fbb64517e1c6ed69a6faa3abf37db0482f1152', // WBTC
    '0x7355efc63ae731f584380a9838292c7046c1e433', // WETH
  ];
}
