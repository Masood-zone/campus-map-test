import {
  HiAcademicCap,
  HiLocationMarker,
  HiMap,
  HiReceiptRefund,
} from "react-icons/hi";

export const NAV_LINKS_DATA = [
  {
    label: "Home",
    key: "home",
    path: "/",
    icon: <HiAcademicCap />,
  },
  {
    label: "Directions",
    key: "directions",
    path: "/directions",
    icon: <HiReceiptRefund />,
  },
  {
    label: "Locations",
    key: "locations",
    path: "/locations",
    icon: <HiLocationMarker />,
  },
  {
    label: "My Places",
    key: "myPlaces",
    path: "/places",
    icon: <HiMap />,
  },
];

export const USER_NAV_LINKS = [
  {
    label: "Profile",
    key: "profile",
    path: "/profile",
  },
  {
    label: "Settings",
    key: "settings",
    path: "/settings",
  },
  {
    label: "Logout",
    key: "logout",
    path: "/logout",
  },
];
