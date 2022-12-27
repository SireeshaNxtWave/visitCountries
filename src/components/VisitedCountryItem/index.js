import {
  CountryListItem,
  CountryImage,
  CountryDetailsContainer,
  CountryName,
  RemoveButton,
} from './styledComponents'

const VisitedCountryItem = props => {
  const {details, deleteVisitedCountry} = props
  const {id, name, imageUrl, isVisited} = details

  const deleteCountry = () => {
    deleteVisitedCountry(id)
  }

  return (
    <CountryListItem>
      <CountryImage alt="thumbnail" src={imageUrl} />
      <CountryDetailsContainer>
        <CountryName>{name}</CountryName>
        <RemoveButton type="button" onClick={deleteCountry}>
          Remove
        </RemoveButton>
      </CountryDetailsContainer>
    </CountryListItem>
  )
}

export default VisitedCountryItem
