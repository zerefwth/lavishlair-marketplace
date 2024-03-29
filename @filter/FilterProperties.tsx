import { filterOptionsWrapper } from './CollectionsFilter.css'
import { FilterPropertySelect } from './FilterPropertySelect'
import { useCollection } from './hooks/useCollection'
import { Accordion, Box, Stack, Label } from '@zoralabs/zord'
import { useCollectionFilters } from '@filter/providers'

export function FilterProperties({ collectionAddress }: { collectionAddress: string }) {
  const { data } = useCollection(collectionAddress)
  const { useCollectionProperties } = useCollectionFilters()

  if (!data) {
    return null
  }

  return (
    <Stack className={useCollectionProperties?.selector}>
      {useCollectionProperties?.header && (
        <Label className="zord-attributesHeading" mb="x4" size="lg">
          {useCollectionProperties?.header}
        </Label>
      )}
      {/* {data?.attributes.map((property) => (
        <Box
          key={property.traitType}
          className={!useCollectionProperties?.hideBorder && filterOptionsWrapper}
        >
          <Accordion label={property.traitType ? property.traitType : ''}>
            <Stack pb="x4" gap="x5">
              {property.valueMetrics.map((valueMetric) => (
                <FilterPropertySelect
                  key={valueMetric.value}
                  traitType={property.traitType || ''}
                  valueMetric={valueMetric}
                />
              ))}
            </Stack>
          </Accordion>
        </Box>
      ))} */}
    </Stack>
  )
}
