import * as React from "react";
import { Icon } from "../../icon";
import { SystemIcons } from "../../icons/dist/system-icons-enum";

const InlineLoadingIndicator = () => (
  <Icon
    shape={SystemIcons.Spinner}
    size="xs"
    data-cy="inlineLoadingIndicator"
  />
);

export default InlineLoadingIndicator;
