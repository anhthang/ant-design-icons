// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GiftTwoToneSvg from '@buianhthang/icons-svg/lib/asn/GiftTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GiftTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GiftTwoTone: GiftTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GiftTwoToneSvg}></AntdIcon>;
};

GiftTwoTone.displayName = 'GiftTwoTone';
GiftTwoTone.inheritAttrs = false;
export default GiftTwoTone;