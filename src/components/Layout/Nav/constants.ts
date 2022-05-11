import { ReactComponent as HouseSvg } from "src/assets/svgs/house.svg";
import { ReactComponent as InboxSvg } from "src/assets/svgs/inbox.svg";
import { ReactComponent as SquadSvg } from "src/assets/svgs/squad.svg";
import { ReactComponent as SwapSvg } from "src/assets/svgs/swap.svg";
import { ReactComponent as TacticsSvg } from "src/assets/svgs/tactics.svg";
import { ReactComponent as ReportSvg } from "src/assets/svgs/report.svg";
import { ReactComponent as StaffSvg } from "src/assets/svgs/staff.svg";
import { ReactComponent as TrafficConesSvg } from "src/assets/svgs/traffic-cones.svg";
import { ReactComponent as FirstAidSvg } from "src/assets/svgs/first-aid.svg";
import { ReactComponent as CalendarSvg } from "src/assets/svgs/calendar.svg";
import { ReactComponent as TrophySvg } from "src/assets/svgs/trophy.svg";
import { ReactComponent as MagnifyingGlassSvg } from "src/assets/svgs/magnifying-glass.svg";
import { ReactComponent as TransfersSvg } from "src/assets/svgs/transfers.svg";
import { ReactComponent as ShieldSvg } from "src/assets/svgs/shield.svg";
import { ReactComponent as SuitcaseSvg } from "src/assets/svgs/suitcase.svg";
import { ReactComponent as MoneySvg } from "src/assets/svgs/money.svg";
import { ReactComponent as DevCenterSvg } from "src/assets/svgs/money.svg";
import { ReactComponent as ExclamationSvg } from "src/assets/svgs/exclamation.svg";

import { NavItemProps } from "./NavItem/types";

export const navItems: NavItemProps[] = [
  { Svg: HouseSvg, title: "Home", line: true },
  { Svg: InboxSvg, title: "Inbox", line: true, notifCount: 5 },
  { Svg: SquadSvg, title: "Squad" },
  { Svg: SwapSvg, title: "Dynamics" },
  { Svg: TacticsSvg, title: "Tactics", active: true },
  { Svg: ReportSvg, title: "Team Report" },
  { Svg: StaffSvg, title: "Staff" },
  { Svg: TrafficConesSvg, title: "Training" },
  { Svg: FirstAidSvg, title: "Medical Center", line: true },
  { Svg: CalendarSvg, title: "Schedule" },
  { Svg: TrophySvg, title: "Competitions", line: true },
  { Svg: MagnifyingGlassSvg, title: "Scouting" },
  { Svg: TransfersSvg, title: "Transfers", line: true, notifCount: 3 },
  { Svg: ShieldSvg, title: "Club Info" },
  { Svg: SuitcaseSvg, title: "Club Vision" },
  { Svg: MoneySvg, title: "Finances", line: true },
  { Svg: DevCenterSvg, title: "Dev. Center" },
  { Svg: ExclamationSvg, title: "Report Bug" },
];
