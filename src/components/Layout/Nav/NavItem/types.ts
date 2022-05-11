import { SvgComponent } from "src/utility/types";

export interface NavItemProps {
  Svg: SvgComponent;
  active?: boolean;
  line?: boolean;
  title: string;
  notifCount?: number;
}
