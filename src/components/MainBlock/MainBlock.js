import Header from '../Header/Header';
import * as S from './StyledMainBlock'
import Button from "../Button/Button";

const MainBlock = () => {
    return (
        <S.MainBlockWrap>
            <Header />
            <h1 style={{ marginBottom: '20px' }}>Форум Microsoft</h1>
            <h1 style={{ marginBottom: '80px' }}>«Finance industry trust in AI and IT-Security»</h1>
            <h3 style={{ marginBottom: '24px' }}>Масштабная кибератака и устаревшее оборудование может привести
                к потере клиентов, ухудшить отношения с партнёрами и учредителями, 
                а невыполнение требований законодательства может привести к существенным 
                штрафам и даже к блокировке ресурсов</h3>
            <p style={{ marginBottom: '152px' }}>Узнайте как этого избежать, регистрируйтесь на наш форум</p>
            <Button text='Регистрация'/>
        </S.MainBlockWrap>
    )
}

export default MainBlock;