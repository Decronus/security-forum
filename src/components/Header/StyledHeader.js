import styled from 'styled-components'

export const HeaderWrap = styled.div`
    padding-bottom: 190px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 39px;
    & p {
        text-transform: uppercase;
        font-weight: 200;
        cursor: pointer;
        &:hover {
            border-bottom: 2px solid #534878;
            transform: translateY(1px);
        }
    }
`
