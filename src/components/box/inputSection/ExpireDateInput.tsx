import type { InputStateProps } from '../../../types';

import InputBox, { InputType } from '../../common/InputBox';
import InputSectionTemplate from '../../template/InputSectionTemplate';

const ExpireDateInput = (props: InputStateProps) => {
  const inputs: InputType[] = [
    { textType: 'number', maxLength: 2, placeholder: 'MM', required: true },
    { textType: 'number', maxLength: 2, placeholder: 'YY', required: true },
  ];
  return (
    <InputSectionTemplate label="만료일">
      <InputBox inputs={inputs} align="center" separator="/" {...props} />
    </InputSectionTemplate>
  );
};

export default ExpireDateInput;
