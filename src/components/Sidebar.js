import { useSession } from "next-auth/react";
import React from "react";
import {
  BiShoppingBag,
  BiGroup,
  BiChevronDown,
  BiDesktop,
  BiUserCircle,
  BiCalendar,
} from "react-icons/bi";
import SidebarRow from "./SidebarRow";

function Sidebar() {
  const { data: session } = useSession();

  return (
    <div className="p-2 mt-5 mx-w[600px] xl:min-w-[300px]">
      <SidebarRow src={session.user.image} title={session.user.name} />
      <SidebarRow Icon={BiUserCircle} title="Friends" />
      <SidebarRow Icon={BiGroup} title="Groups" />
      <SidebarRow Icon={BiShoppingBag} title="Marketplace" />
      <SidebarRow Icon={BiDesktop} title="Watch" />
      <SidebarRow Icon={BiCalendar} title="Events" />
      <SidebarRow Icon={BiChevronDown} title="See More" />
    </div>
  );
}

export default Sidebar;
