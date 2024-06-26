// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LineHeightOutlinedSvg from '@buianhthang/icons-svg/lib/asn/LineHeightOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LineHeightOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LineHeightOutlined: LineHeightOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LineHeightOutlinedSvg}></AntdIcon>;
};

LineHeightOutlined.displayName = 'LineHeightOutlined';
LineHeightOutlined.inheritAttrs = false;
export default LineHeightOutlined;