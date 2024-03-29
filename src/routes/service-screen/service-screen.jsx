
import { useSelector } from "react-redux";

import { getAllServicesItems } from '../../store/widgets/widgets.selector';
import WidgetItem from "../../components/widget-item/widget-item.component";

const ServiceScreen = () => {

  const allServiceItems = useSelector(getAllServicesItems);
  
  return (
    <div>
      {
        allServiceItems.map((el,ind) => (<WidgetItem item={el} key={ind} />))
      }
    </div>
  )
};

export default ServiceScreen;
