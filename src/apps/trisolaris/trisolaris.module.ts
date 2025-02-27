import { Module } from '@nestjs/common';

import { AbstractApp } from '~app/app.dynamic-module';
import { UniswapV2ContractFactory } from '~apps/uniswap-v2/contracts';

import { AuroraTrisolarisFarmContractPositionFetcher } from './aurora/trisolaris.farm.contract-position-fetcher';
import { AuroraTrisolarisPoolTokenFetcher } from './aurora/trisolaris.pool.token-fetcher';
import { TrisolarisContractFactory } from './contracts';

@Module({
  providers: [
    TrisolarisContractFactory,
    UniswapV2ContractFactory,
    AuroraTrisolarisFarmContractPositionFetcher,
    AuroraTrisolarisPoolTokenFetcher,
  ],
})
export class TrisolarisAppModule extends AbstractApp() {}
