
import WidgetItem from "../../components/widget-item/widget-item.component";

import { AddWidgetContainer } from "./add-widget.styles";

const widgetScreen = [
  {
    title: 'Camera',
    link: 'camera-add'
  },
  {
    title: 'Service',
    link: 'service'
  },
  {
    title: 'Settings',
    link: 'settings'
  }
]
const AddWidget = () => {
  return (
    <AddWidgetContainer>
      {
        widgetScreen.map((item,ind) => (<WidgetItem item={item} key={ind} />))
      }
    </AddWidgetContainer>
  )
};

export default AddWidget;