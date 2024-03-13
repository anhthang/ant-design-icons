// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CopyrightCircleFilledSvg from '@buianhthang/icons-svg/lib/asn/CopyrightCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CopyrightCircleFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CopyrightCircleFilled: CopyrightCircleFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CopyrightCircleFilledSvg}></AntdIcon>;
};

CopyrightCircleFilled.displayName = 'CopyrightCircleFilled';
CopyrightCircleFilled.inheritAttrs = false;
export default CopyrightCircleFilled;