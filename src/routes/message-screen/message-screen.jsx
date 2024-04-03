import { useDispatch,useSelector } from "react-redux";

import { getAllMessages } from "../../store/messages/messages.selector";
import { getActiveMessage } from "../../store/messages/messages.selector";

import { setActiveMessage } from "../../store/messages/messages.action";

import MessageItem from "../../components/message-item/message-item.component";
import { MessageScreenContainer } from "./message-screen.styles";

const MessageScreen = () => {
  const allMessages = useSelector(getAllMessages);
  const activeMessage = useSelector(getActiveMessage);
  const dispatch = useDispatch();
  return (
    <MessageScreenContainer>
      <div
        style={{ padding: '8px 32px 0' }}
      >
        {
          allMessages.map((message,ind) => (<MessageItem title={message} key={ind} />))
        }

      </div>
      <div
        className={`remove-message ${activeMessage ? '' : 'hide'}`}
        onClick={() => dispatch(setActiveMessage(''))}
      >
        Remove my message from doorbell
      </div>

    </MessageScreenContainer>
  );
};

export default MessageScreen;