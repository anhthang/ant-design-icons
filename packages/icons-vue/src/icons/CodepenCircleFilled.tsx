// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CodepenCircleFilledSvg from '@buianhthang/icons-svg/lib/asn/CodepenCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CodepenCircleFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CodepenCircleFilled: CodepenCircleFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CodepenCircleFilledSvg}></AntdIcon>;
};

CodepenCircleFilled.displayName = 'CodepenCircleFilled';
CodepenCircleFilled.inheritAttrs = false;
export default CodepenCircleFilled;