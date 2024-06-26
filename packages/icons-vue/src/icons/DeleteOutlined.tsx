// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DeleteOutlinedSvg from '@buianhthang/icons-svg/lib/asn/DeleteOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DeleteOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DeleteOutlined: DeleteOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DeleteOutlinedSvg}></AntdIcon>;
};

DeleteOutlined.displayName = 'DeleteOutlined';
DeleteOutlined.inheritAttrs = false;
export default DeleteOutlined;