import { useCallback, useState } from 'react'
import { Stack, Button, Paragraph } from '@zoralabs/zord'
import {
  ERC721ContractApprovalForm,
  ListV3AskForm,
  V3ApprovalForm,
  ContractInteractionStatus,
  NftInfo,
} from '@market/components'
import { ASKS_V12_ADDRESS, ERC721_TRANSFER_HELPER_ADDRESS } from '@shared'
import { useERC721TokenApproval, useZoraV3ModuleApproval } from '@market/hooks'

type ListNFTStep =
  | 'CheckApprovals'
  | 'ApproveTransferHelper'
  | 'ApproveAskModule'
  | 'ListingDetails'
  | 'Confirmation'

export type ListV3AskWizardProps = {
  tokenId: string
  tokenAddress: string
  onClose?: () => void
  previewURL?: string
  cancelButton?: JSX.Element
}

export function ListV3AskWizard({
  tokenId,
  tokenAddress,
  onClose,
  previewURL,
  cancelButton,
}: ListV3AskWizardProps) {
  const { approved: asksV1 } = useZoraV3ModuleApproval(ASKS_V12_ADDRESS)
  const { approved: transferHelper } = useERC721TokenApproval(
    tokenAddress,
    ERC721_TRANSFER_HELPER_ADDRESS
  )

  const [wizardStep, setWizardStep] = useState<ListNFTStep>('CheckApprovals')
  const [txHash, setTxHash] = useState<string>()
  const [askState, setAskState] = useState<{ amount: string; currency: string }>()

  const handleConfirmType = useCallback(() => {
    setWizardStep(
      transferHelper
        ? asksV1
          ? 'ListingDetails'
          : 'ApproveAskModule'
        : 'ApproveTransferHelper'
    )
  }, [asksV1, transferHelper])

  const handleOnConfirmation = useCallback(
    (hash: string, amount: string, currency: string) => {
      setTxHash(hash)
      setAskState({ amount, currency })
      setWizardStep('Confirmation')
    },
    []
  )

  return (
    <Stack w="100%" gap="x4" p="x4">
      {wizardStep !== 'Confirmation' && (
        <NftInfo collectionAddress={tokenAddress} tokenId={tokenId} modalType="list" />
      )}
      {wizardStep === 'CheckApprovals' ? (
        <Stack gap="x4">
          <Paragraph size="lg">
            Click continue to list this NFT for a fixed price with LavishLair. We will check
            if any approvals are needed before commencing.
          </Paragraph>
          <Button width="100%" variant="primary" onClick={handleConfirmType}>
            Continue
          </Button>
        </Stack>
      ) : wizardStep === 'ApproveTransferHelper' ? (
        <ERC721ContractApprovalForm
          title="Allow Lavish Lair V1 to Use Your NFT"
          tokenAddress={tokenAddress}
          spenderAddress={ERC721_TRANSFER_HELPER_ADDRESS}
          approvalCopy="You must first approve Lavish Lair V1 to use your NFT"
          buttonCopy="Approve NFT"
          onApproval={() => setWizardStep('ApproveAskModule')}
          onBack={() => setWizardStep('CheckApprovals')}
        />
      ) : wizardStep === 'ApproveAskModule' ? (
        <V3ApprovalForm
          title="Allow Asks Module to Use Your Assets"
          spenderAddress={ASKS_V12_ADDRESS}
          approvalCopy="To enable the Buy Now feature you must approve the Lavish Lair Asks Module"
          buttonCopy="Approve Module"
          onApproval={() => setWizardStep('ListingDetails')}
          onBack={() => setWizardStep('CheckApprovals')}
        />
      ) : wizardStep === 'ListingDetails' ? (
        <ListV3AskForm
          tokenId={tokenId}
          tokenAddress={tokenAddress}
          onConfirmation={handleOnConfirmation}
          cancelButton={cancelButton}
        />
      ) : wizardStep === 'Confirmation' && txHash ? (
        <ContractInteractionStatus
          title="Your NFT will be listed shortly"
          description="Once your transaction has been processed, your NFT will be active in the marketplace. In the meanwhile, you can close this window."
          tokenId={tokenId}
          tokenAddress={tokenAddress}
          previewURL={previewURL}
          txHash={txHash}
          buttonCopy="Got it"
          onConfirm={onClose}
          amount={askState?.amount}
          currencyAddress={askState?.currency}
        />
      ) : null}
    </Stack>
  )
}
