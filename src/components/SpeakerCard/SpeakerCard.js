import * as S from './StyledSpeakerCard'

const SpeakerCard = ( { name, desc, img } ) => {
    return (
        <S.SpeakerCardWrap>
            <S.SpeakerCardImg img={ img }></S.SpeakerCardImg>
            <h3 style={{ marginBottom: '10px', color: '#FFFFFF'}}>{ name }</h3>
            <S.SpeakerCardDivider style={{ marginBottom: '10px'}}></S.SpeakerCardDivider>
            <p style={{ marginBottom: '15px'}}>{ desc }</p>
            <S.SpeakerCardDetails>Подробнее</S.SpeakerCardDetails>
        </S.SpeakerCardWrap>
    )
}

export default SpeakerCard;