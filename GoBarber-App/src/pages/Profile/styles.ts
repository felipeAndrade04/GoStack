import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 40 : 40}px;
`;

export const BackButton = styled.TouchableOpacity`
  margin-top: 40px;
`;

export const SignOutButton = styled.TouchableOpacity`
  position: absolute;
  right: 0;
  top: 0;
  margin: 60px 24px;
`;

export const UserAvatarButton = styled.TouchableOpacity`
  width: 186px;
  height: 186px;
  margin: 12px auto;
`;

export const UserAvatar = styled.Image`
  width: 186px;
  height: 186px;
  border-radius: 93px;
  align-self: center;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 24px 0;
`;

export const ContainerIcon = styled.View`
  position: absolute;
  width: 48px;
  height: 48px;
  background: #ff9000;
  border-radius: 24px;
  right: 0;
  bottom: 0;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
