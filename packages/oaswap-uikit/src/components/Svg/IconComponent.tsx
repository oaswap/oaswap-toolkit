import React from "react";
import * as IconModule from ".";
import { SvgProps } from "./types";

interface IconComponentProps {
  iconName: string | undefined;
  mr?: string | number;
  width?: string;
  color?: string;
  style?: { cursor?: string };
}

const Icons = IconModule as unknown as { [key: string]: React.FC<SvgProps> };

const IconComponent: React.FC<IconComponentProps & SvgProps> = ({ iconName, ...props }) => {
  const IconElement = Icons[`${iconName}Icon`];
  return IconElement ? <IconElement {...props} /> : null;
};

export default IconComponent;
