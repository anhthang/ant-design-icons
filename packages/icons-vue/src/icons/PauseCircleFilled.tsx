// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PauseCircleFilledSvg from '@buianhthang/icons-svg/lib/asn/PauseCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PauseCircleFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PauseCircleFilled: PauseCircleFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PauseCircleFilledSvg}></AntdIcon>;
};

PauseCircleFilled.displayName = 'PauseCircleFilled';
PauseCircleFilled.inheritAttrs = false;
export default PauseCircleFilled;