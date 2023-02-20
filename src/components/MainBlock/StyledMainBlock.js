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
`
