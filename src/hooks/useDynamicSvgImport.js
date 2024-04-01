import {useEffect, useRef, useState} from "react";

export const useDynamicSvgImport = (name,options = {}) => {
    const ImportedIconRef = useRef(null);
    const [loading,setLoading] = useState(true);
    const [error, setError] = useState();

    const {onCompleted, onError} = options;

    useEffect(() => {
        setLoading(true);
        const importIcon = async () => {
            try {
                ImportedIconRef.current = (await require(`../../assets/widgets-icon/audio-icon.svg`)).ReactComponent;
                if (onCompleted) {
                    onCompleted(name, ImportedIconRef.current);
                }
            } catch (e) {
                if (onError) {
                    onError(e);
                }
                setError(e);
            } finally {
                setLoading(false);
            }
        }
        importIcon();
    },[name]);

    return {error, loading, SvgIcon: ImportedIconRef.current};
}
