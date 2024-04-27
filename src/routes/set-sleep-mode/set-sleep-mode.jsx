
import WidgetItem from "../../components/widget-item/widget-item.component";

const sleepModeTime = [
  {
    title: '1 hour',
    link: '/'
  },
  {
    title: '2 hour',
    link: '/'
  },
  {
    title: '3 hour',
    link: '/'
  },
  {
    title: '4 hour',
    link: '/'
  },
  {
    title: '8 hour',
    link: '/'
  },
  {
    title: '12 hour',
    link: '/'
  }
]

const SetSleepMode = () => {
  return (
    <div style={{ padding: '0 32px' }} >
      {
        sleepModeTime.map((item,ind) => <WidgetItem item={item} key={ind} />)
      }
    </div>
  );
};

export default SetSleepMode;
