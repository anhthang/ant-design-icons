// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RightSquareFilledSvg from '@buianhthang/icons-svg/lib/asn/RightSquareFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RightSquareFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RightSquareFilled: RightSquareFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RightSquareFilledSvg}></AntdIcon>;
};

RightSquareFilled.displayName = 'RightSquareFilled';
RightSquareFilled.inheritAttrs = false;
export default RightSquareFilled;