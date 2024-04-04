import { useDispatch,useSelector } from "react-redux";

import { setActiveMessage } from "../../store/messages/messages.action";
import { getActiveMessage } from "../../store/messages/messages.selector";

import SvgIcon from "../icon-svg/svg-icon.component";

import { MessageItemContainer } from "./message-item.styles";
const MessageItem = ({ title }) => {
  const dispatch = useDispatch();
  const activeMessage = useSelector(getActiveMessage);
  return (
    <MessageItemContainer
      onClick={() => dispatch(setActiveMessage(title))}
    >
      <div className="message-icon"> <SvgIcon name='message-item-icon' /> </div>
      <div className="message-title"> {title} </div>
      <div className="wrapper-bg"></div>
      <div className={`message-active-icon ${activeMessage === title ? '' : 'hide'}`}> <SvgIcon name='check-icon' /> </div>
    </MessageItemContainer>
  );
};

export default MessageItem;
