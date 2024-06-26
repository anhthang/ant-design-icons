// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CaretDownOutlinedSvg from '@buianhthang/icons-svg/lib/asn/CaretDownOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CaretDownOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CaretDownOutlined: CaretDownOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CaretDownOutlinedSvg}></AntdIcon>;
};

CaretDownOutlined.displayName = 'CaretDownOutlined';
CaretDownOutlined.inheritAttrs = false;
export default CaretDownOutlined;