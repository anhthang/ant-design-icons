// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SafetyCertificateFilledSvg from '@buianhthang/icons-svg/lib/asn/SafetyCertificateFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SafetyCertificateFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SafetyCertificateFilled: SafetyCertificateFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SafetyCertificateFilledSvg}></AntdIcon>;
};

SafetyCertificateFilled.displayName = 'SafetyCertificateFilled';
SafetyCertificateFilled.inheritAttrs = false;
export default SafetyCertificateFilled;