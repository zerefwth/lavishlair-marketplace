import { Token } from '../../apollo/__generated__/schema.graphql.types'
import { FilterStore } from './filter-store'
import { ReactNode } from 'react'
import { stringDefaults, themeDefaults } from '@filter/constants'

export type Strings = typeof stringDefaults
export type Theme = typeof themeDefaults

export type FilterOptionConfig = {
  label?: string
  defaultState?: 'open' | undefined
  hideBorder?: boolean
  selector?: string
}

export type PriceRangeFilterConfig = {
  hideCurrencySelect?: boolean
} & FilterOptionConfig

export type PropertiesConfig = {
  header?: string
} & FilterOptionConfig

export interface FilterConfigProps {
  filtersVisible?: boolean
  useMarketStatus?: boolean
  useOwnerStatus?: boolean
  useMediaTypes?: boolean
  useSortDropdown?: boolean
  usePriceRange?: PriceRangeFilterConfig | undefined
  useCollectionSearch?: boolean
  useCollectionProperties?: PropertiesConfig | undefined
  useSidebarClearButton?: boolean
  /**
   * Flag to show or hide the Filter sidebar and visibility toggle button
   * @default true
   */
  useSidebarFilter?: boolean
  useFilterOwnerCollections?: boolean
  strings?: Partial<Strings>
  theme?: Partial<Theme>
}

export interface FilterContextInputProps extends FilterConfigProps {
  contractAddress?: string | null
  ownerAddress?: string
  contractWhiteList?: string[] | undefined
}

export interface TokenQueryReturnTypes extends FilterContextInputProps {
  items: Token[]
  isValidating: boolean
  isReachingEnd: boolean | undefined
  isEmpty: boolean
  hasActiveMarkets: boolean
  handleLoadMore: () => void
}

export interface CollectionFilterContextTypes extends TokenQueryReturnTypes {
  filterStore: FilterStore
  strings: Partial<Strings>
  theme: Partial<Theme>
}

export interface CollectionFilterProviderProps extends FilterContextInputProps {
  children?: ReactNode
  initialPage?: Token[]
}
