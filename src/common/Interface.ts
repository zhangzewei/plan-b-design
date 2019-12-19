import * as React from "react";

export interface CommonComponentProps {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactElement;
}
