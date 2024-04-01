import React,{ useState,useEffect,useRef } from "react";

const IconSvg2 = ({ name,fill = '#fff', stroke = '#fff' }) => {
    const ImportedIconRef = useRef(null);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const importIcon = async () => {
            try {
                ImportedIconRef.current = (await import(`../../assets/widgets-icon/${name}.svg`)).ReactComponent;
            } catch (e) {
                throw e;
            } finally {
                setLoading(false);
            }
        }
        importIcon();
    },[name]);

    if (!loading && ImportedIconRef.current) {
        const { current: ImportedIcon } = ImportedIconRef;
        return <ImportedIcon fill={fill} stroke={stroke} />;
    }

    return <div></div>;
};

export default IconSvg2;
