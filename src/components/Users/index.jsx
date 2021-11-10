import { useCollection } from 'hooks/useCollection';

import Avatar from 'components/Avatar';
import { UserList, UserListItem, UserOnline } from './Users.styled';
import { Error } from 'styles/GlobalStyle';

const Users = () => {
  const { documents, error } = useCollection('users');
  return (
    <UserList>
      <h2>All Users</h2>
      {error && <Error>{error}</Error>}
      {documents &&
        documents.map((user) => (
          <UserListItem key={user.id}>
            {user.online && <UserOnline />}
            <span>{user.displayName}</span>
            <Avatar id='avatar' src={user.photoURL} />
          </UserListItem>
        ))}
    </UserList>
  );
};

export default Users;
