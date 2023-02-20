import * as S from './StyledHeader'
import Button from "../Button/Button";
import Logo from '../Logo/Logo';

const Header = () => {
    return (
        <S.HeaderWrap>
            <Logo />

            <S.Menu>
                <p>о мероприятии</p>
                <p>спикеры</p>
            </S.Menu>

            <Button text='Регистрация'/>
        </S.HeaderWrap>
    )
}

export default Header;