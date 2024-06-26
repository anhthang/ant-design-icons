// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UnderlineOutlinedSvg from '@buianhthang/icons-svg/lib/asn/UnderlineOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UnderlineOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UnderlineOutlined: UnderlineOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UnderlineOutlinedSvg}></AntdIcon>;
};

UnderlineOutlined.displayName = 'UnderlineOutlined';
UnderlineOutlined.inheritAttrs = false;
export default UnderlineOutlined;