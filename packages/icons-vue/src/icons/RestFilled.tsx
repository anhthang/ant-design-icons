// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RestFilledSvg from '@buianhthang/icons-svg/lib/asn/RestFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RestFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RestFilled: RestFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RestFilledSvg}></AntdIcon>;
};

RestFilled.displayName = 'RestFilled';
RestFilled.inheritAttrs = false;
export default RestFilled;