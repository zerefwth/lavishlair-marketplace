import { Grid } from '@zoralabs/zord'
import { DocsLink } from './DocsLink'
import { NounsLink } from './NounsLink'
import { CollectionMenu } from '../CollectionMenu'
import { headerWrapper } from './Header.css'
import { useWindowWidth } from '@shared'
import { ManageLink } from './ManageLink'
import { ConnectButton } from './ConnectButton'
import { DAOLink } from './DAOLink'

export function HeaderComposition() {
  const { isLarge } = useWindowWidth()

  return (
    <Grid as="header" className={headerWrapper}>
      <NounsLink />
      <DAOLink />
      <CollectionMenu />
      <ConnectButton />
    </Grid>
  )
}
