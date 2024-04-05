import { useDispatch,useSelector } from "react-redux";

import { getAllMessages,getActiveMessage } from "../../store/messages/messages.selector";
import { setActiveMessage } from "../../store/messages/messages.action";
import { setModalSettings } from "../../store/modal/modal.action";


import MessageItem from "../../components/message-item/message-item.component";
import { MessageScreenContainer } from "./message-screen.styles";
import { type } from "@testing-library/user-event/dist/type";

const MessageScreen = () => {
  const allMessages = useSelector(getAllMessages);
  const activeMessage = useSelector(getActiveMessage);
  const dispatch = useDispatch();

  const removeActiveMessage = () => {
    dispatch(setActiveMessage(''));
    dispatch(setModalSettings({ stringTitle: 'The message successfully removed',type: 'message' }))
  }

  return (
    <MessageScreenContainer>
      <div
        style={{ padding: '24px 32px 0' }}
      >
        {
          allMessages.map((message,ind) => (<MessageItem title={message} key={ind} />))
        }

      </div>
      <div
        className={`remove-message ${activeMessage ? '' : 'hide'}`}
        onClick={() => removeActiveMessage()}
      >
        Remove my message from doorbell
      </div>

    </MessageScreenContainer>
  );
};

export default MessageScreen;
