import PropTypes from 'prop-types';
import ButtonLink from '../../components/button/btnlink';
import { max_width } from '../../utils/config';
import { BiUser } from "react-icons/bi";
import { SiAzurefunctions } from "react-icons/si";
import { FiShoppingCart } from 'react-icons/fi';
import { GiConverseShoe } from 'react-icons/gi';


const Menu = ({ className, active }) => {
  return (
    <div className={max_width + ' text-white rounded-t-4xl pt-4 pb-6  shadow-2xl bg-vicm-green-600 w-full bottom-0 flex fixed ' + (className || '')}>

      <ButtonLink href={'/'} buttonStyle='flat' className={`m-auto btn-menu ${active === "profile" ? "btn-circle-active" : ""}`} shapes="circle">
        <BiUser />
      </ButtonLink>
      <ButtonLink href={'/user/bag'} buttonStyle='flat' className={`m-auto btn-menu ${active === "bag" ? "btn-circle-active" : ""}`} shapes="circle">
        <GiConverseShoe />
      </ButtonLink>
      <ButtonLink href={'/runnative'} buttonStyle='flat' className='mx-6 btn-menu btn-hightlight' shapes="circle">
        <img src={"/images/icons/start.png"} />
      </ButtonLink>
      <ButtonLink href={'/user/market'} buttonStyle='flat' className={`m-auto btn-menu ${active === "market" ? "btn-circle-active" : ""}`} shapes="circle">
        <FiShoppingCart />
      </ButtonLink>
      <ButtonLink href={'/fusion'} buttonStyle='flat' className={`m-auto btn-menu ${active === "coming" ? "btn-circle-active" : ""}`} shapes="circle">
        <SiAzurefunctions />
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
