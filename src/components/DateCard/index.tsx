// DateCard.tsx
import React from 'react';
import styled from 'styled-components/native';
import { format } from 'date-fns';

interface DateCardProps {
  date: Date;
}

export const DateCard: React.FC<DateCardProps> = ({ date }) => {
  const today = new Date();
  const isToday =
    today.getDate() === date.getDate() &&
    today.getMonth() === date.getMonth() &&
    today.getFullYear() === date.getFullYear();

  return (
    <Container isToday={isToday}>
      <Day isToday={isToday}>{date.getDate()}</Day>
      <Month isToday={isToday}>{format(date, 'MMM')}</Month>
    </Container>
  );
};

// Styles
const Container = styled.View<{ isToday: boolean }>`
  width: 60px;
  height: 75px;
  border-radius: 8px;
  background-color: ${({ isToday }) => (isToday ? '#FFF3E6' : '#fff')};
  border: 1px solid ${({ isToday }) => (isToday ? '#ffa94d' : '#e0e0e0')};
  justify-content: center;
  align-items: center;
`;

const Day = styled.Text<{ isToday: boolean }>`
  font-size: 20px;
  font-weight: bold;
  color: ${({ isToday }) => (isToday ? '#ff8000' : '#2f2f2f')};
`;

const Month = styled.Text<{ isToday: boolean }>`
  font-size: 14px;
  color: ${({ isToday }) => (isToday ? '#ff8000' : '#2f2f2f')};
`;
