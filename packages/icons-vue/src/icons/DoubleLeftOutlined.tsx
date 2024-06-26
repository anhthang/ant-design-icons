// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DoubleLeftOutlinedSvg from '@buianhthang/icons-svg/lib/asn/DoubleLeftOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DoubleLeftOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DoubleLeftOutlined: DoubleLeftOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DoubleLeftOutlinedSvg}></AntdIcon>;
};

DoubleLeftOutlined.displayName = 'DoubleLeftOutlined';
DoubleLeftOutlined.inheritAttrs = false;
export default DoubleLeftOutlined;