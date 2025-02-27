import { PositionTemplate } from '~app-toolkit/decorators/position-template.decorator';

import { KyberswapElasticLiquidityContractPositionFetcher } from '../common/kyberswap-elastic.liquidity.contract-position-fetcher';

@PositionTemplate()
export class PolygonKyberswapElasticLiquidityContractPositionFetcher extends KyberswapElasticLiquidityContractPositionFetcher {
  groupLabel = 'Pools';

  subgraphUrl = 'https://api.thegraph.com/subgraphs/name/kybernetwork/kyberswap-elastic-matic';
  positionManagerAddress = '0xe222fbe074a436145b255442d919e4e3a6c6a480';
  factoryAddress = '0xc7a590291e07b9fe9e64b86c58fd8fc764308c4a';
  blockSubgraphUrl = 'https://api.thegraph.com/subgraphs/name/kybernetwork/polygon-blocks';
}
