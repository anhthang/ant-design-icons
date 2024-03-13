// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FastBackwardFilledSvg from '@buianhthang/icons-svg/lib/asn/FastBackwardFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FastBackwardFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FastBackwardFilled: FastBackwardFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FastBackwardFilledSvg}></AntdIcon>;
};

FastBackwardFilled.displayName = 'FastBackwardFilled';
FastBackwardFilled.inheritAttrs = false;
export default FastBackwardFilled;