import Link from 'next/link';
import PropTypes from 'prop-types';

const ButtonLink = ({ children, buttonStyle, shapes, size, style, href, className }) => {
    let classes = buttonStyle === 'flat' ? '' : 'shadow-2xl border-2 ';
    switch (size) {
        case 'sm':
            classes += shapes === 'circle' ? 'rounded-full p-2 ' : ' rounded-full text-xs px-6 py-1 ';
            break;
        case 'md':
            classes += shapes === 'circle' ? 'rounded-full p-3 ' : ' rounded-xl px-2 py-2 ';
            break;
        case 'xl':
            classes += shapes === 'circle' ? 'rounded-full p-4 ' : ' rounded-xl px-6 py-6 ';
            break;
        default:
            classes += shapes === 'circle' ? 'rounded-full p-4 ' : ' rounded-xl px-8 py-4 ';
            break;
    }
    return (
        <Link href={href || '/'}>
            <a className={classes + ' uppercase btn hover:opacity-90 ' + (className || '')}>
                {children}
            </a>
        </Link>
    );
}

ButtonLink.propTypes = {
    className: PropTypes.string,
    callback: PropTypes.func,
};


export default ButtonLink;
