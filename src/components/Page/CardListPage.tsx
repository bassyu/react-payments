import styled from 'styled-components';
import { CardType } from '../../types';
import Card from '../Common/Card';
import PageTemplate from '../Template/PageTemplate';

interface CardListPageProps {
  navigate: (page: string) => void;
}

const CardListPage = ({ navigate }: CardListPageProps) => {
  const onClickAdd = () => {
    navigate('register');
  };

  const cardList: CardType[] = JSON.parse(localStorage.getItem('cardList') || '[]');

  return (
    <PageTemplate title={'보유카드'}>
      {cardList.length ? (
        <CardList>
          {cardList.map((card) => (
            <Card key={card.id} {...card} />
          ))}
        </CardList>
      ) : (
        <GuideMessage>새로운 카드를 등록해주세요</GuideMessage>
      )}
      <CardAddButton onClick={onClickAdd}>+</CardAddButton>
    </PageTemplate>
  );
};

export default CardListPage;

const CardList = styled.div`
  & > * {
    margin-bottom: 46px;
  }
`;

const GuideMessage = styled.p`
  margin-bottom: 12px;

  font-size: 14px;
  font-weight: 700;
  color: #686868;
`;

const CardAddButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 214px;
  height: 134px;

  font-size: 30px;
  font-weight: 400;
  color: #575757;

  background: #e5e5e5;
  border-radius: 5px;

  border: none;
  cursor: pointer;
`;