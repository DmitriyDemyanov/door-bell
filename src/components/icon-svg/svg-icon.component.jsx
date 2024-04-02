import { ReactSVG } from 'react-svg';
import { createImageUrl } from "../../utils/createImageUrl.util";

const SvgIcon = ({ name }) => {
    return (
        <ReactSVG
            style={{ width: '100%',height: '100%',display: 'flex',justifyContent: 'center',alignItems: 'center' }}
            src={createImageUrl(name)}
        />
    );
};

export default SvgIcon;
