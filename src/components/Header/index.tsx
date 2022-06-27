import { Button } from 'web3-components';
import * as S from './style';
import { BrightnessHigh as BrightIcon } from "@styled-icons/bootstrap";

type Props = {
  title?: string;
};

const Header = ({ title = 'Header' }: Props) => (
  <S.Container>
    <S.Logo>
      <S.Square></S.Square>
      <S.Name>MENON</S.Name>
    </S.Logo>
    <S.Navigator>
      <S.Link>Explore</S.Link>
      <S.Link>Following</S.Link>
      <S.Link>How it Works</S.Link>
      <S.Link>Community</S.Link>
    </S.Navigator>
    <S.UserButtons>
      <Button.Default width='60%'
        color='#b5e41c'
        textColor='black'
        glow='#b5e41c'
        // @ts-ignore
        style={{borderRadius: '30px', fontWeight: 'bolder'}}
      >Connect Wallet</Button.Default>
    </S.UserButtons>
    <S.ThemeSwitcher>
      <BrightIcon color='white'  size={30}/>
    </S.ThemeSwitcher>
  </S.Container>
);

export default Header;
