import styled from 'styled-components'
import * as M from '../mixins'
import MainBg from '../../img/main-bg.webp'

export const MainBlockWrap = styled.div`
    background: url(${MainBg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center 0;
    ${M.BlockPadding}
    padding-top: 118px;
    padding-bottom: 472px;

    @media (max-width: 820px) {
        padding-bottom: 200px;
    }

    @media (max-width: 500px) {
        padding-top: 30px;
    }
`

export const Heading = styled.h1`
    margin-bottom: 80px;

    @media (max-width: 500px) {
        margin-bottom: 50px;
    }
`

export const ParagraphCTA = styled.p`
    margin-bottom: 152px;

    @media (max-width: 500px) {
        margin-bottom: 50px;
    }
`
