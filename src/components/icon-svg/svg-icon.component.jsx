import { ReactSVG }     from 'react-svg';
import {createImageUrl} from "../../utils/createImageUrl.util";

const SvgIcon = ({name, ...props}) => {
    return <ReactSVG src={createImageUrl(name)} {...props}/>
}

export default SvgIcon;
