import { Module } from '@nestjs/common';

import { AbstractApp } from '~app/app.dynamic-module';

import { ArbitrumVendorFinancePoolV2ContractPositionFetcher } from './arbitrum/vendor-finance.pool-v2.contract-position-fetcher';
import { ArbitrumVendorFinancePoolContractPositionFetcher } from './arbitrum/vendor-finance.pool.contract-position-fetcher';
import { VendorFinanceContractFactory } from './contracts';
import { EthereumVendorFinancePoolV2ContractPositionFetcher } from './ethereum/vendor-finance.pool-v2.contract-position-fetcher';
import { EthereumVendorFinancePoolContractPositionFetcher } from './ethereum/vendor-finance.pool.contract-position-fetcher';

@Module({
  providers: [
    VendorFinanceContractFactory,
    // Arbitrum
    ArbitrumVendorFinancePoolContractPositionFetcher,
    ArbitrumVendorFinancePoolV2ContractPositionFetcher,
    // Ethereum
    EthereumVendorFinancePoolContractPositionFetcher,
    EthereumVendorFinancePoolV2ContractPositionFetcher,
  ],
})
export class VendorFinanceAppModule extends AbstractApp() {}
