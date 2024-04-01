import {Suspense, lazy} from "react";

const IconSvg3 = ({name}) => {
    const LazyIcon = lazy(async () => await (import(`../../assets/widgets-icon/${name}.svg`)).ReactComponent );
    return <Suspense><LazyIcon/></Suspense>
}

export default IconSvg3;
