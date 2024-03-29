import React from "react";
import { Link } from "react-router-dom";
import StyledMenuItem, { StyledMenuItemContainer } from "./styles";
import { MenuItemProps } from "./types";

const MenuItem: React.FC<MenuItemProps> = ({
  children,
  href,
  isActive = false,
  variant = "default",
  statusColor,
  absoluteLink,
  ...props
}) => {
  const itemLinkProps: unknown = href
    ? {
        as: Link,
        to: href,
      }
    : {
        as: "div",
      };
  return (
    <StyledMenuItemContainer $isActive={isActive} $variant={variant}>
      {absoluteLink ? (
        <StyledMenuItem href={href} $isActive={isActive} $variant={variant} $statusColor={statusColor} {...props}>
          {children}
        </StyledMenuItem>
      ) : (
        <StyledMenuItem
          {...itemLinkProps}
          $isActive={isActive}
          $variant={variant}
          $statusColor={statusColor}
          {...props}
        >
          {children}
        </StyledMenuItem>
      )}
    </StyledMenuItemContainer>
  );
};

export default MenuItem;
