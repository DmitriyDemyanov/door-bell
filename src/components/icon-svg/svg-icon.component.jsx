import { ReactSVG } from 'react-svg';
import { createImageUrl } from "../../utils/createImageUrl.util";

const SvgIcon = ({ name }) => {
    return <ReactSVG style={{ width: '100%',height: '100%',display: 'flex',alignItems: 'center',justifyContent: 'center' }} src={createImageUrl(name)} />
}

export default SvgIcon;
