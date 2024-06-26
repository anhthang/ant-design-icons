// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AlertOutlinedSvg from '@buianhthang/icons-svg/lib/asn/AlertOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AlertOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AlertOutlined: AlertOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AlertOutlinedSvg}></AntdIcon>;
};

AlertOutlined.displayName = 'AlertOutlined';
AlertOutlined.inheritAttrs = false;
export default AlertOutlined;