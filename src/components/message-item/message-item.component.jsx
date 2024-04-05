import { useDispatch,useSelector } from "react-redux";

import { setActiveMessage } from "../../store/messages/messages.action";
import { getActiveMessage } from "../../store/messages/messages.selector";

import { sendUserMessage } from "../../utils/sendUserMessage";

import { setShowLoader } from "../../store/loader/loader.action";
import { setModalSettings } from "../../store/modal/modal.action";

import SvgIcon from "../icon-svg/svg-icon.component";

import { MessageItemContainer } from "./message-item.styles";
const MessageItem = ({ title }) => {
  const dispatch = useDispatch();
  const activeMessage = useSelector(getActiveMessage);
  const sendMessage = async (title) => {
    dispatch(setShowLoader(true));
    try {
      const res = await sendUserMessage(title);
      dispatch(setModalSettings({ stringTitle: `The visitor received "${res.message}" message`,type: 'message' }));
      dispatch(setActiveMessage(res.message));
    }
    catch (e) {
      dispatch(setModalSettings({ stringTitle: 'Something went wrong, please try again later.',type: 'attention' }));
    }
    finally {
      dispatch(setShowLoader(false));

    }
  }

  return (
    <MessageItemContainer
      onClick={() => sendMessage(title)}
    >
      <div className="message-icon"> <SvgIcon name='message-item-icon' /> </div>
      <div className="message-title"> {title} </div>
      <div className="wrapper-bg"></div>
      <div className={`message-active-icon ${activeMessage === title ? '' : 'hide'}`}> <SvgIcon name='check-icon' /> </div>
    </MessageItemContainer>
  );
};

export default MessageItem;
