
import WidgetItem from "../../components/widget-item/widget-item.component";
const services = [
  {
    title: 'Sleep Mode',
    link: 'set-sleep-mode',
  },
  {
    title: 'cleaning Mode',
    link: '/cleaning-mode',
  },
  {
    title: 'Transfers',
    link: '/transfers',
  }
]

const ServicesScreen = () => {
  return (
    <div style={{ padding: '0 32px' }} >
      {
        services.map((item,ind) => <WidgetItem item={item} key={ind} />)
      }
    </div>
  );
};

export default ServicesScreen;