import PropTypes from 'prop-types';
import ButtonLink from '../../components/button/btnlink';

const Menu = ({ className, active }) => {
  return (
    <div className={'rounded-t-4xl px-8 py-4 shadow-2xl bg-vicm-green-600 w-full bottom-0 flex justify-between absolute ' + (className || '')}>
      <ButtonLink href={'#'} buttonStyle='flat' className={`btn-menu ${active === "profile" ? "btn-circle-active" : ""}`} shapes="circle">
        <img src={"/images/icons/profile.png"} />
      </ButtonLink>
      <ButtonLink href={'#'} buttonStyle='flat' className={`btn-menu ${active === "shoes" ? "btn-circle-active" : ""}`} shapes="circle">
        <img src={"/images/icons/shoes.png"} />
      </ButtonLink>
      <ButtonLink href={'#'} buttonStyle='flat' className='btn-menu btn-hightlight' shapes="circle">
        <img src={"/images/icons/start.png"} />
      </ButtonLink>
      <ButtonLink href={'#'} buttonStyle='flat' className={`btn-menu ${active === "box" ? "btn-circle-active" : ""}`} shapes="circle">
        <img src={"/images/icons/coming.png"} />
      </ButtonLink>
      <ButtonLink href={'#'} buttonStyle='flat' className={`btn-menu ${active === "market" ? "btn-circle-active" : ""}`} shapes="circle">
        <img src={"/images/icons/store.png"} />
      </ButtonLink>
    </div>
  );
}

Menu.propTypes = {
  active: PropTypes.string,
  className: PropTypes.string
};


export default Menu;
