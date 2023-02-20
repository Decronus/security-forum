import styled from 'styled-components'

export const SpeakerCardWrap = styled.div`
    display: flex;
    flex-direction: column;
`

export const SpeakerCardImg = styled.div`
    max-width: 100%;
    height: 435px;
    background: ${({img}) => img ? `url(${img})` : 'grey'};
    background-size: cover;
    margin-bottom: 35px;
    @media (max-width: 740px) {
        background-position: center;
        height: 320px;
    }

    @media (max-width: 560px) {
        background-position: top;
        height: 435px;
    }
`
export const SpeakerCardDivider= styled.div`
    width: 243px;
    height: 3px;
    background: #534878;
`
export const SpeakerCardDetails= styled.div`
    text-decoration-line: underline;
    color: #FFFFFF;
    opacity: 0.5;
    font-weight: 200;
    cursor: pointer;
`
