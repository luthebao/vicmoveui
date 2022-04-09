import { Avatar } from '@mui/material';

const UserAvatar = ({ children, className, style, src }) => {
    return (
        <Avatar src={src || "/images/logo/1_trans.png"} sx={{ width: 56, height: 56 }} />
    );
}


export default UserAvatar;
