// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PaperClipOutlinedSvg from '@buianhthang/icons-svg/lib/asn/PaperClipOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PaperClipOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PaperClipOutlined: PaperClipOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PaperClipOutlinedSvg}></AntdIcon>;
};

PaperClipOutlined.displayName = 'PaperClipOutlined';
PaperClipOutlined.inheritAttrs = false;
export default PaperClipOutlined;