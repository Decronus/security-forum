import styled from 'styled-components'
import * as M from '../mixins'
import MainBg from '../../img/main-bg.webp'

export const MainBlockWrap = styled.div`
    background: url(${MainBg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    ${M.BlockPadding}
`
