import { ReactNode } from 'react';
import { KnowledgeItemContainer } from './styles';

interface KnowledgeItemProps {
  title: string;
  icon: ReactNode;
}
export default function KnowledgeItem({ title, icon }: KnowledgeItemProps) {
  return (
    <KnowledgeItemContainer>
      <p>{title}</p>
      {icon}
    </KnowledgeItemContainer>
  );
}
