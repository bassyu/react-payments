import InputSectionTemplate from '../../template/InputSectionTemplate';
import InputBox from '../../common/InputBox';
import Input from '../../common/Input';

import { useCardForm } from '../../../context/CardFormContext';

interface Props {
  insert: (index: number) => (element: HTMLInputElement | null) => void;
  focus: (index: number) => (go: number) => void;
}

const OwnerNameInput = ({ insert, focus }: Props) => {
  const [{ ownerName }, dispatch] = useCardForm();

  const setOwnerName = (value: string) => {
    dispatch({ type: 'SET_VALUE', key: 'ownerName', value });
  };

  return (
    <InputSectionTemplate label="카드 소유자 이름(선택)" countLength={ownerName.length} maxLength={30}>
      <InputBox align="left" isFullWidth>
        <Input
          textType="string"
          value={ownerName}
          setValue={setOwnerName}
          length={30}
          textAlign="left"
          insert={insert(6)}
          focus={focus(6)}
        />
      </InputBox>
    </InputSectionTemplate>
  );
};

export default OwnerNameInput;
