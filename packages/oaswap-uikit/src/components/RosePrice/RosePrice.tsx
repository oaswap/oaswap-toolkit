import React from "react";
import styled from "styled-components";
import { RoseIcon } from "../Svg";
import Text from "../Text/Text";
import Skeleton from "../Skeleton/Skeleton";
import { Colors } from "../../theme";

export interface Props {
  color?: keyof Colors;
  rosePriceUsd?: number;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const RosePrice: React.FC<Props> = ({ rosePriceUsd, color = "textSubtle" }) => {
  return rosePriceUsd ? (
    <PriceLink href="https://oaswap.finance/swap?outputCurrency=ROSE" target="_blank">
      <RoseIcon width="24px" mr="8px" />
      <Text color={color} bold>{`$${rosePriceUsd.toFixed(3)}`}</Text>
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(RosePrice);
