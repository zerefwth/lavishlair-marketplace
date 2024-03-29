import { Token } from '../../apollo/__generated__/schema.graphql.types'
import { useMemo } from 'react'
import { Flex, Label, Stack, Heading, BoxProps } from '@zoralabs/zord'
import { AddressWithLink } from '@market/components/AddressWithLink'
import { WalletBalance } from '@market/components/WalletBalace'
import { useAuth, formatCryptoVal } from '@shared'

export interface FillV3AskInfoProps extends BoxProps {
  nft: Token
  askPrice?: string
  showBalance?: boolean
}

export function FillV3AskInfo({ nft, askPrice, showBalance = true }: FillV3AskInfoProps) {
  const { address } = useAuth()

  const cryptoVal = useMemo(() => {
    if (askPrice) return `${formatCryptoVal(parseFloat(askPrice))} ETH`
  }, [])

  if (!nft) {
    return null
  }

  return (
    <>
      <Flex justify="space-between">
        <Label className="zora-market-fillAskInfo-label" color="tertiary">
          Owned by
        </Label>
        {nft?.owner?.id ? (
          <AddressWithLink address={nft.owner.id} />
        ) : (
          '...'
        )}
      </Flex>
      {/* <Flex justify="space-between">
        <Label className="zora-market-fillAskInfo-label" color="tertiary">
          Minted by
        </Label>
        {nft?.minted ? (
          <AddressWithLink address={nft.nft.minted.address} />
        ) : (
          '...'
        )}
      </Flex> */}
      <Stack align="flex-end">
        {askPrice && (
          <Flex justify="space-between" align="center" w="100%">
            <Label className="zora-market-fillAskInfo-label" color="tertiary">
              Price:
            </Label>
            <Heading size="md">{cryptoVal}</Heading>
          </Flex>
        )}
        {showBalance && address && <WalletBalance address={address} />}
      </Stack>
    </>
  )
}
