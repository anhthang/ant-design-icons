// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArtisanCollectorOutlinedSvg from '@buianhthang/icons-svg/lib/asn/ArtisanCollectorOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArtisanCollectorOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArtisanCollectorOutlined: ArtisanCollectorOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArtisanCollectorOutlinedSvg}></AntdIcon>;
};

ArtisanCollectorOutlined.displayName = 'ArtisanCollectorOutlined';
ArtisanCollectorOutlined.inheritAttrs = false;
export default ArtisanCollectorOutlined;