import { Avatar } from '@mui/material';

const UserAvatar = ({ children, className, style, src }) => {
    return (
        <Avatar src={src || "/images/user/avatar-default.jpeg"} sx={{ width: 56, height: 56 }} />
    );
}


export default UserAvatar;
