import { useSelector } from "react-redux";


import { getAllSettingsItems } from '../../store/widgets/widgets.selector';

import WidgetItem from "../../components/widget-item/widget-item.component";

import { SettingsScreenContainer } from "./settings-screen.styles";

const SettingsScreen = () => {
  const allSettingsItems = useSelector(getAllSettingsItems);

  return (
    <SettingsScreenContainer>
      {
        allSettingsItems.map((el,ind) => (<WidgetItem item={el} key={ind} />))
      }
    </SettingsScreenContainer>
  )
};

export default SettingsScreen;