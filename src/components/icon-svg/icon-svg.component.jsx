import React,{ useState,useEffect,useRef } from "react";

export const IconSvg = ({ name,fill = '#fff' }) => {
  const ImportedIconRef = useRef(null);
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const importIcon = async () => {
      try {
        const { default: namedImport } = await import(`../../assets/widgets-icon/cameras-icon.svg`);
        ImportedIconRef.current = namedImport;
        console.log(">>>",namedImport);
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
    return <ImportedIcon fill={fill} />;
  }

  return <div></div>;
}