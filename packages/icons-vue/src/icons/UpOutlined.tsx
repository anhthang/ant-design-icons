// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UpOutlinedSvg from '@buianhthang/icons-svg/lib/asn/UpOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UpOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UpOutlined: UpOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UpOutlinedSvg}></AntdIcon>;
};

UpOutlined.displayName = 'UpOutlined';
UpOutlined.inheritAttrs = false;
export default UpOutlined;