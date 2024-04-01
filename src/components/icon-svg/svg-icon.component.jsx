import { ReactSVG }     from 'react-svg';
import {createImageUrl} from "../../utils/createImageUrl.util";

const SvgIcon = ({name}) => {
    return <ReactSVG src={createImageUrl(name)}/>
}

export default SvgIcon;
