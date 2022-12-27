import styled from 'styled-components'

export const CountryListItem = styled.li`
  list-style: none;
  margin-right: 10px;
  background-color: #1f1f2f;
  height: 400px;
`
export const CountryImage = styled.img`
  width: 100%;
  height: 85%;
`
export const CountryDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const CountryName = styled.p`
  font-size: 20px;
  color: #cbd5e1;
  margin-left: 15px;
`
export const RemoveButton = styled.button`
  background-color: transparent;
  border: 1px solid #cbd5e1;
  border-radius: 3px;
  color: #cbd5e1;
  margin-right: 15px;
  height: 30px;
`
