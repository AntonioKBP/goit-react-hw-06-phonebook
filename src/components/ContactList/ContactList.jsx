import { List, ListItem, ListItemBtn } from './ContactList.styled';
import { RiDeleteBin2Line } from 'react-icons/ri';

export const ContactList = ({ users, onDeleteContact }) => {
  return (
    <List>
      {users.map(user => {
        return (
          <ListItem key={user.id}>
            {user.name}: {user.number}
            <ListItemBtn type="button" onClick={() => onDeleteContact(user.id)}>
              <RiDeleteBin2Line />
            </ListItemBtn>
          </ListItem>
        );
      })}
    </List>
  );
};
