// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FundViewOutlinedSvg from '@buianhthang/icons-svg/lib/asn/FundViewOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FundViewOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FundViewOutlined: FundViewOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FundViewOutlinedSvg}></AntdIcon>;
};

FundViewOutlined.displayName = 'FundViewOutlined';
FundViewOutlined.inheritAttrs = false;
export default FundViewOutlined;