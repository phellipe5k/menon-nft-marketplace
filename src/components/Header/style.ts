import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  height: 80px;
  display: flex;
  max-width: 1280px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 8px
`;

export const Navigator = styled.nav`
  width: 45%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const UserButtons = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ThemeSwitcher = styled.div`
  width: 50px;
  border-radius: 50%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1E222B;
`;

export const Link = styled.a`
  width: 100%;
  color: white;
  font-weight: bolder;
  font-size: 12px;
  cursor: pointer;
  position: relative;
  transition: .4s ease-in-out;
  &::after {
    transition: .4s ease-in-out;
      position: absolute;
      content: '';
      width: 0px;
      height: 2px;
      background-color: #b5e41c;
      left: 0;
      bottom: -2px;
      border-radius: 4px;
    }
  &:hover {
    color: #ccc;
    &::after {
      width: 30%;
    }
  }

`;

export const Square = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 10px;
  background-color: #ccc;
  margin: 0 12px;
`;

export const Name = styled.p`
  color: white;
  font-weight: bolder;
  font-size: 16px;
`;