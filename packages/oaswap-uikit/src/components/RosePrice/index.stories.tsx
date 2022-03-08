import React from "react";
import { RosePrice, RosePriceProps } from ".";
import { Flex } from "../Box";

export default {
  title: "Components/RosePrice",
  component: RosePrice,
};

const Template: React.FC<RosePriceProps> = ({ ...args }) => {
  return (
    <Flex p="10px">
      <RosePrice {...args} />
    </Flex>
  );
};

export const Default = Template.bind({});
Default.args = {
  rosePriceUsd: 22.0,
};
