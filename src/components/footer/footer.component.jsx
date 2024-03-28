
import { useSelector } from 'react-redux';

import { getWidgetsFooter } from '../../store/widgets/widgets.selector';

import MainItem from "../main-item/main-item.component";

import { FooterContainer } from "./footer.styles";



const Footer = () => {

  const setFooterItem = useSelector(getWidgetsFooter);
  return (
    <FooterContainer>
      {
        setFooterItem.map((setting,ind) => (<MainItem item={setting} key={ind} />))
      }
    </FooterContainer>
  )
};

export default Footer;