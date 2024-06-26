// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DollarCircleOutlinedSvg from '@buianhthang/icons-svg/lib/asn/DollarCircleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DollarCircleOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DollarCircleOutlined: DollarCircleOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DollarCircleOutlinedSvg}></AntdIcon>;
};

DollarCircleOutlined.displayName = 'DollarCircleOutlined';
DollarCircleOutlined.inheritAttrs = false;
export default DollarCircleOutlined;