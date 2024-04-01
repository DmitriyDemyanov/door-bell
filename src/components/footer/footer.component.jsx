import { useSelector } from 'react-redux';

import { getFooterWidgets } from '../../store/widgets/widgets.selector';

import MainItem from "../main-item/main-item.component";

import { FooterContainer } from "./footer.styles";

const Footer = () => {
  const footerWidgets = useSelector(getFooterWidgets);
  return (
    <FooterContainer>
      {
        footerWidgets.map((setting,ind) => <MainItem item={setting} key={ind} />)
      }
    </FooterContainer>
  )
};

export default Footer;
