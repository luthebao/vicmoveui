import Link from 'next/link';
import PropTypes from 'prop-types';


const ButtonLink = ({ children, buttonStyle, shapes, href, className }) => {
    let classes = buttonStyle === 'flat' ? '' : 'shadow-2xl border-2 ';
    classes += shapes === 'circle' ? 'rounded-full ' : 'px-8 py-4 rounded-xl ';
    return (
        <Link href={href || '/'}>
            <a className={classes + 'uppercase btn hover:opacity-90 ' + (className || '')}>
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
