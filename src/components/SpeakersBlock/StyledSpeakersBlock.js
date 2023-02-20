import styled from 'styled-components'
import { BlockPadding } from '../mixins'
import SpeakersBg from '../../img/speakers-bg.webp'

export const SpeakersBlockWrap = styled.div`
    background: url(${SpeakersBg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center -40px;
    ${BlockPadding}
    padding-bottom: 190px;

    @media (max-width: 1090px) {
        background-position: center -400px;
    }

    @media (max-width: 768px) {
        background-position: center -100px;
    }
`

export const SpeakersWrap = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 30px;
    row-gap: 40px;

    @media (max-width: 1090px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 820px) {
        column-gap: 20px;
        row-gap: 30px;
    }

    @media (max-width: 560px) {
        grid-template-columns: 1fr;
    }
`

