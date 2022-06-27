import { Button } from 'web3-components';
import * as S from './style';

type Props = {
  title?: string;
};

const Hero = ({ title = 'Create, Explore & Collect Digital Art NFTs' }: Props) => (
  <S.Container>
    <S.Call>
      <S.Title>{title}</S.Title>
      <S.Subtitle>Buy and sell NFTs from the world artists. More than 1000 premium digital artworks are available to be your's</S.Subtitle>
      <S.Buttons>
        {/*@ts-ignore*/}
        <Button.Default glow='#b5e41c' width='35%' textColor='black' style={{borderRadius: '30px', fontWeight: 'bolder', margin: '0 4px'}} color='#b5e41c'>Start Collecting</Button.Default>
        
        {/*@ts-ignore*/}
        <Button.BorderGradient glow='#b5e41c' width='35%' color='#070D14' gradient={false} style={{borderRadius: '30px', margin: '0 4px', fontWeight: 'bolder'}} border='#b5e41c'>Create NFTs</Button.BorderGradient>
      </S.Buttons>
    </S.Call>
    <S.Image>
      <S.ImagesList>
        <S.NFT src={'https://cdn.wallpaper.com/main/styles/responsive_770w_scale/s3/jenisu-cityscape-4-nft-1.jpg'} />
        <S.NFT src={'https://templatekit.jegtheme.com/devvata/wp-content/uploads/sites/235/2022/02/nft.jpg'} />
        <S.NFT src={'https://img.seadn.io/files/42d356cec4997fa8a3ce030084659425.jpg?auto=format&fit=max&w=384'} />
      </S.ImagesList>

      <S.ImagesList style={{marginLeft: 80}}>
        <S.NFT src={'https://img.seadn.io/files/b42471b668d4f7ba9a18264a51f120e2.png?auto=format&fit=max&w=512'} />
        <S.NFT src={'https://lh3.googleusercontent.com/NA5TQ4ws3iIMtV9LmQj4ahnEKxGbnixYr-KqpYufX69UQZEnTRS-HNGyArVHcgWsZGqXdMGS9gUGck5ejdR-ab8iW5-sI2HY62CehWg=w413'} />
        <S.NFT src={'https://img.seadn.io/files/9cac3a221d92cb4c2e3451e9be7176c4.png?auto=format&fit=max&w=512'} />
      </S.ImagesList>
    </S.Image>
  </S.Container>
);

export default Hero;
