import {useDynamicSvgImport} from "../../hooks/useDynamicSvgImport";

export const IconSvg = ({ name, onCompleted, onError, ...rest }) => {
  const {error, loading, SvgIcon} = useDynamicSvgImport(name, {onCompleted, onError});
  if (error) {
    return error.message;
  }
  if (loading) {
    return "Loading...";
  }
  if (SvgIcon) {
    return <SvgIcon {...rest} />
  }
  return null;
}
