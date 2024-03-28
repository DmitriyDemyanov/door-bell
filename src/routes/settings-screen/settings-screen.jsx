import { useSelector } from "react-redux";


import { getAllSettingsItems } from '../../store/widgets/widgets.selector';

import WidgetItem from "../../components/widget-item/widget-item.component";

const SettingsScreen = () => {
  const allSettingsItems = useSelector(getAllSettingsItems);

  return (
    <div>
      {
        allSettingsItems.map((el,ind) => (<WidgetItem item={el} key={ind} />))
    }
    </div>
  )
};

export default SettingsScreen;