
import WidgetItem from "../../components/widget-item/widget-item.component";

const sleepModeTime = [
  {
    title: '1 hour',
    link: '/',
    type:'set-sleep-mode'
  },
  {
    title: '2 hour',
    link: '/',
    type:'set-sleep-mode'
  },
  {
    title: '3 hour',
    link: '/',
    type:'set-sleep-mode'
  },
  {
    title: '4 hour',
    link: '/',
    type:'set-sleep-mode'
  },
  {
    title: '8 hour',
    link: '/',
    type:'set-sleep-mode'
  },
  {
    title: '12 hour',
    link: '/',
    type:'set-sleep-mode'
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
