import * as React from "react";
import { SpaceSize } from "../../../../shared/styles/styleUtils/modifiers/modifierUtils";
import { stack } from "../style";
import { cx } from "@emotion/css";
import { listReset } from "../../../../shared/styles/styleUtils";
import { flex } from "../../../../shared/styles/styleUtils/layout/flexbox";

export interface StackProps {
  className?: string;
  /**
   * human-readable selector used for writing tests
   */
  ["data-cy"]?: string;
  /**
   * The size of the space to apply between items. It can set 1 spacing size for all breakpoints, or it can be used to set different spacing values at different viewport width breakpoints.
   */
  spacingSize?: SpaceSize;
  /**
   * Which HTML tag to render the component with
   */
  tag?: keyof React.ReactHTML;
  children?: React.ReactNode;
}

const Stack = ({
  children,
  className,
  "data-cy": dataCy = "stack",
  spacingSize = "m",
  tag: Tag = "div"
}: StackProps) => (
  <Tag
    className={cx(
      { [listReset]: Tag === "ul" || Tag === "ol" },
      stack(spacingSize),
      flex({ direction: "column" }),
      className
    )}
    data-cy={dataCy}
  >
    {children}
  </Tag>
);

export default Stack;
