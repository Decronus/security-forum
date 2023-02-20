import * as S from './StyledHeader'
import Button from "../Button/Button";
import Logo from '../Logo/Logo';

const Header = () => {
    return (
        <S.HeaderWrap>
            <Logo />

            <S.HeaderMenu>
                <p>о мероприятии</p>
                <p>спикеры</p>
            </S.HeaderMenu>

            <Button text='Регистрация'/>
        </S.HeaderWrap>
    )
}

export default Header;