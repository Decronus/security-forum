import styled from 'styled-components'
import { BlockPadding } from '../mixins'

export const SpeakersBlockWrap = styled.div`
    ${BlockPadding}
    padding-bottom: 190px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const SpeakersWrap = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
`

