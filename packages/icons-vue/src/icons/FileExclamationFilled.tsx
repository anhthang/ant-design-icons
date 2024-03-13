// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FileExclamationFilledSvg from '@buianhthang/icons-svg/lib/asn/FileExclamationFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FileExclamationFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FileExclamationFilled: FileExclamationFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileExclamationFilledSvg}></AntdIcon>;
};

FileExclamationFilled.displayName = 'FileExclamationFilled';
FileExclamationFilled.inheritAttrs = false;
export default FileExclamationFilled;