import Header from 'components/Header';
import Hero from 'components/Hero';
import * as S from './style';

interface BaseProps {

}

const Base = ({}: BaseProps) => {
    return (
        <S.Container>
            <Header />
            <Hero />
        </S.Container>
    )
};

export default Base;