import { useMemo } from 'react'
import { NounishAuction, useActiveNounishAuction } from '@noun-auction'
import { NFTCardMarket } from '@market'
import { returnDao } from 'constants/collection-addresses'
import { Token } from '../../apollo/__generated__/schema.graphql.types'
import { nftMarketWrapper } from './NFTPage.css'

export function MarketUi({
  contractAddress,
  tokenId,
  nft,
}: {
  contractAddress: string
  tokenId: string
  nft: Token
}) {
  const dao = returnDao(contractAddress)

  const { data: activeAuction } = useActiveNounishAuction(dao?.marketType)

  if (activeAuction?.properties?.tokenId === tokenId && dao) {
    return (
      <NounishAuction
        daoConfig={dao}
        hideThumbnail
        hideTitle
        hideCollectionTitle
        showLabels
        layout="sideBarBid"
        useErrorMsg
      />
    )
  } else {
    return (
      <NFTCardMarket
        className={nftMarketWrapper}
        nftData={nft}
        p="x4"
        align="flex-start"
        direction="column"
      />
    )
  }
}
