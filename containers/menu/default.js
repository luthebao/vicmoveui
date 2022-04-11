import PropTypes from 'prop-types';
import ButtonLink from '../../components/button/btnlink';
import { max_width } from '../../utils/config';

const Menu = ({ className, active }) => {
  return (
    <div className={max_width + ' rounded-t-4xl px-8 pt-4 pb-6  shadow-2xl bg-vicm-green-600 w-full bottom-0 flex justify-between fixed ' + (className || '')}>
      <ButtonLink href={'/'} buttonStyle='flat' className={`btn-menu ${active === "profile" ? "btn-circle-active" : ""}`} shapes="circle">
        <img src={"/images/icons/profile.png"} />
      </ButtonLink>
      <ButtonLink href={'/user/bag'} buttonStyle='flat' className={`btn-menu ${active === "bag" ? "btn-circle-active" : ""}`} shapes="circle">
        <img src={"/images/icons/shoes.png"} />
      </ButtonLink>
      <ButtonLink href={'/runnative'} buttonStyle='flat' className='btn-menu btn-hightlight' shapes="circle">
        <img src={"/images/icons/start.png"} />
      </ButtonLink>
      <ButtonLink href={'/fusion'} buttonStyle='flat' className={`btn-menu ${active === "coming" ? "btn-circle-active" : ""}`} shapes="circle">
        <img src={"/images/icons/coming.png"} />
      </ButtonLink>
      <ButtonLink href={'/user/market'} buttonStyle='flat' className={`btn-menu ${active === "market" ? "btn-circle-active" : ""}`} shapes="circle">
        <img src={"/images/icons/store.png"} />
      </ButtonLink>
    </div>
  );
}

Menu.propTypes = {
  active: PropTypes.string,
  className: PropTypes.string
};

Menu.defaultProps = {
  active: ""
}


export default Menu;
