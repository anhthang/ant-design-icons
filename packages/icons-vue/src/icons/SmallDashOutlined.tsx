// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SmallDashOutlinedSvg from '@buianhthang/icons-svg/lib/asn/SmallDashOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SmallDashOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SmallDashOutlined: SmallDashOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SmallDashOutlinedSvg}></AntdIcon>;
};

SmallDashOutlined.displayName = 'SmallDashOutlined';
SmallDashOutlined.inheritAttrs = false;
export default SmallDashOutlined;