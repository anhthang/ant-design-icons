// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FullscreenExitOutlinedSvg from '@buianhthang/icons-svg/lib/asn/FullscreenExitOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FullscreenExitOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FullscreenExitOutlined: FullscreenExitOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FullscreenExitOutlinedSvg}></AntdIcon>;
};

FullscreenExitOutlined.displayName = 'FullscreenExitOutlined';
FullscreenExitOutlined.inheritAttrs = false;
export default FullscreenExitOutlined;