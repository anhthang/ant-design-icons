// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MinusOutlinedSvg from '@buianhthang/icons-svg/lib/asn/MinusOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MinusOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MinusOutlined: MinusOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MinusOutlinedSvg}></AntdIcon>;
};

MinusOutlined.displayName = 'MinusOutlined';
MinusOutlined.inheritAttrs = false;
export default MinusOutlined;