
import { useSelector } from "react-redux";

import { getAllServicesItems } from '../../store/widgets/widgets.selector';
import WidgetItem from "../../components/widget-item/widget-item.component";
import { ServiceScreenContainer } from "./service-screen-styles";

const ServiceScreen = () => {

  const allServiceItems = useSelector(getAllServicesItems);

  return (
    <ServiceScreenContainer>
      {
        allServiceItems.map((el,ind) => (<WidgetItem item={el} key={ind} />))
      }
    </ServiceScreenContainer>
  )
};

export default ServiceScreen;
