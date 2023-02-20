import styled from 'styled-components'

export const SpeakerCardWrap = styled.div`

`

export const SpeakerCardImg = styled.div`
    width: 330px;
    height: 435px;
    background: ${({img}) => img ? `url(${img})` : 'grey'};
    margin-bottom: 35px;
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
`
