import Header from '../Header/Header';
import * as S from './StyledMainBlock'
import Button from "../Button/Button";

const MainBlock = () => {
    return (
        <S.MainBlockWrap>
            <Header />
            <h1 style={{ marginBottom: '20px' }}>Форум Microsoft</h1>
            <S.MainBlockHeading>«Finance industry trust in AI and IT-Security»</S.MainBlockHeading>
            <h3 style={{ marginBottom: '24px' }}>Масштабная кибератака и устаревшее оборудование может привести
                к потере клиентов, ухудшить отношения с партнёрами и учредителями, 
                а невыполнение требований законодательства может привести к существенным 
                штрафам и даже к блокировке ресурсов</h3>
            <S.MainBlockParagraphCTA>Узнайте как этого избежать, регистрируйтесь на наш форум</S.MainBlockParagraphCTA>
            <Button text='Регистрация'/>
        </S.MainBlockWrap>
    )
}

export default MainBlock;