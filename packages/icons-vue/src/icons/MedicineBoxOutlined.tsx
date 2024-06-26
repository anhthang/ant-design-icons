// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MedicineBoxOutlinedSvg from '@buianhthang/icons-svg/lib/asn/MedicineBoxOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MedicineBoxOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MedicineBoxOutlined: MedicineBoxOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MedicineBoxOutlinedSvg}></AntdIcon>;
};

MedicineBoxOutlined.displayName = 'MedicineBoxOutlined';
MedicineBoxOutlined.inheritAttrs = false;
export default MedicineBoxOutlined;