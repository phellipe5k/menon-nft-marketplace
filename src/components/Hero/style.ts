import styled, { css } from 'styled-components';

export const Container = styled.main`
  width: 100%;
  height: 600px;
  display: flex;
  max-width: 1180px;
  margin: 0px auto;
  padding-top: 20px;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 6rem;
  padding: 2% 0;
  color: white;
  width: 80%;
`;

export const Call = styled.div`
  width: 50%;
  margin-top: 80px;
`;

export const Image = styled.div`
  width: 50%;
  position: relative;
`;

export const Subtitle = styled.h4`
  width: 100%;
  font-size: 2rem;
  font-weight: lighter;
  color: white;
  margin: 16px 0;
`;

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  justify-content: left;
`;

export const NFT = styled.div`
  ${({ src }: {src: string}) => css`
    background-image: url('${src}');
    width: 290px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 290px;
    border-radius: 10px;
    margin: 1%;
  `}
`;

export const ImagesList = styled.div`
  width: 1000px;
  display: flex;
  flex-wrap: wrap;
`;