// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AlibabaOutlinedSvg from '@buianhthang/icons-svg/lib/asn/AlibabaOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AlibabaOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AlibabaOutlined: AlibabaOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AlibabaOutlinedSvg}></AntdIcon>;
};

AlibabaOutlined.displayName = 'AlibabaOutlined';
AlibabaOutlined.inheritAttrs = false;
export default AlibabaOutlined;