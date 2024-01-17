import { ReactElement, SVGAttributes } from 'react';
import icons from './imports';

export type TIconType = keyof typeof icons;

interface IProps extends SVGAttributes<SVGElement> {
  type: TIconType;
}

const Icon = ({ type, ...props }: IProps): ReactElement => {
  const Svg = icons[type];
  if (!Svg) {
    throw new Error(`Icon ${type} not found`);
  }

  return <Svg {...props} />;
};

export default Icon;
