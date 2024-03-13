// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ExportOutlinedSvg from '@buianhthang/icons-svg/lib/asn/ExportOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ExportOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ExportOutlined: ExportOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ExportOutlinedSvg}></AntdIcon>;
};

ExportOutlined.displayName = 'ExportOutlined';
ExportOutlined.inheritAttrs = false;
export default ExportOutlined;