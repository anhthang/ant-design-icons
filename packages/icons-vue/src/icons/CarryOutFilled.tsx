// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CarryOutFilledSvg from '@buianhthang/icons-svg/lib/asn/CarryOutFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CarryOutFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CarryOutFilled: CarryOutFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CarryOutFilledSvg}></AntdIcon>;
};

CarryOutFilled.displayName = 'CarryOutFilled';
CarryOutFilled.inheritAttrs = false;
export default CarryOutFilled;