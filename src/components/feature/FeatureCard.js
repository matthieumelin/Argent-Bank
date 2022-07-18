import React from 'react'

// styled
import styled from 'styled-components'

// utils
import { Colors } from '../../utils/style/Colors';

export default function FeatureCard({icon, altText, title, description}) {
  return (
    <StyledFeatureCard>
      <FeatureCardIcon src={icon} alt={altText} />
      <FeatureCardTitle>{title}</FeatureCardTitle>
      <FeatureCardDescription>{description}</FeatureCardDescription>
    </StyledFeatureCard>
  )
}

const StyledFeatureCard = styled.article`
flex: 1;
padding: 2.5rem;
`;
const FeatureCardIcon = styled.img`
width: 100px;
  border: 10px solid ${Colors.green};
  border-radius: 50%;
  padding: 1rem;
`;
const FeatureCardTitle = styled.h3`
color: #222;
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;
const FeatureCardDescription = styled.p`

`;
