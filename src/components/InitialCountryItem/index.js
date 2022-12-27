import {
  HorizontalLine,
  CountryItem,
  CountryName,
  VisitedText,
  VisitButton,
} from './styledComponents'

const InitialCountryItem = props => {
  const {countryDetails, addToVisitedList} = props
  const {id, name} = countryDetails
  let {isVisited} = countryDetails

  const addToVisited = () => {
    isVisited = true
    addToVisitedList(id)
  }

  return (
    <>
      <CountryItem>
        <CountryName>{name}</CountryName>
        {isVisited ? (
          <VisitedText>Visited</VisitedText>
        ) : (
          <VisitButton type="button" onClick={addToVisited}>
            Visit
          </VisitButton>
        )}
      </CountryItem>
      <HorizontalLine />
    </>
  )
}

export default InitialCountryItem
