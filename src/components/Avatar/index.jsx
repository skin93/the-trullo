import { StyledAvatar } from './Avatar.styled';

const Avatar = ({ src }) => {
  return (
    <StyledAvatar>
      <img src={src} alt='user avatar' />
    </StyledAvatar>
  );
};

export default Avatar;
