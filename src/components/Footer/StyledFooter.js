import styled from 'styled-components'
import { BlockPadding } from '../mixins'
import FooterBg from '../../img/footer-bg.webp'

export const FooterWrap = styled.div`
    background: url(${FooterBg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0;
    ${BlockPadding}
    padding-top: 419px;
    padding-bottom: 68px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;

    @media (max-width: 1000px) {
        flex-direction: column;
        gap: 80px;
        padding-top: 250px;
    }

    @media (max-width: 500px) {
        padding-top: 150px;
    }
`

export const FooterMenu = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    & p {
        font-weight: 200;
        cursor: pointer;
        &:hover {
            opacity: 0.7;
        }
    }
`

export const FooterSocialMediaWrap= styled.div`
    display: flex;
    gap: 12px;
    & svg {
        cursor: pointer;
    }
`