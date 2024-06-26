// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PlusSquareFilledSvg from '@buianhthang/icons-svg/lib/asn/PlusSquareFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PlusSquareFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PlusSquareFilled: PlusSquareFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PlusSquareFilledSvg}></AntdIcon>;
};

PlusSquareFilled.displayName = 'PlusSquareFilled';
PlusSquareFilled.inheritAttrs = false;
export default PlusSquareFilled;