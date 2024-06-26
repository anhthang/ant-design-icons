// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DashboardFilledSvg from '@buianhthang/icons-svg/lib/asn/DashboardFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DashboardFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DashboardFilled: DashboardFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DashboardFilledSvg}></AntdIcon>;
};

DashboardFilled.displayName = 'DashboardFilled';
DashboardFilled.inheritAttrs = false;
export default DashboardFilled;