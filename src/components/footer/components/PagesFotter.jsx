import { AiFillHome, AiOutlineInfoCircle } from "react-icons/ai";
import { MdFavorite, MdViewWeek, MdWork } from "react-icons/md";
import { SiGnuprivacyguard } from "react-icons/si";
import { FiLogIn } from "react-icons/fi";
import { GiSoccerKick } from "react-icons/gi";
import { colorMoonC, colorSunA, colorSunB, colorSunE } from "../../StyleSheet";
import { RoleTypes } from "../../navbar/components/RoleTypes";

const SunIconColor = colorSunA;
const SunActiveColor = colorSunB;
const SunBorderColor = colorSunB;
const moonIconColor = colorSunE;
const moonActiveColor = colorMoonC;
const moonBorderColor = colorMoonC;
const fontSizeIcon = '3em';
const fontSizeIconActive = '3em';
const borderIconSize = '4px';
const iconActiveSunStyle = {
    color: SunActiveColor,
    fontSize: fontSizeIconActive,
    borderBottom: `${borderIconSize} solid ${SunBorderColor}`,
}
const iconActiveMoonStyle = {
    color: moonActiveColor,
    fontSize: fontSizeIconActive,
    borderBottom: `${borderIconSize} solid ${moonBorderColor}`,
}
const iconSunStyle = {
    fontSize: fontSizeIcon, 
    color: SunIconColor, 
    borderBottom: `${borderIconSize} solid #00000000`,
}
const iconMoonStyle = {
    fontSize: fontSizeIcon, 
    color: moonIconColor, 
    borderBottom: `${borderIconSize} solid #00000000`,
}

export const PagesFotter = [
    {
        route: '/',
        title: 'Home',
        iconSun: <AiFillHome style={{ ...iconSunStyle }} />,
        iconMoon: <AiFillHome style={{ ...iconMoonStyle }} />,
        iconActiveSun: <AiFillHome style={{ ...iconActiveSunStyle }} />,
        iconActiveMoon: <AiFillHome style={{ ...iconActiveMoonStyle }} />,
        row: 1
    },
    {
        route: '/moments',
        title: 'Moments',
        iconSun: <GiSoccerKick style={{ ...iconSunStyle }} />,
        iconMoon: <GiSoccerKick style={{ ...iconMoonStyle }} />,
        iconActiveSun:
            <GiSoccerKick style={{ ...iconActiveSunStyle }} />,
        iconActiveMoon:
            <GiSoccerKick style={{ ...iconActiveMoonStyle }} />,
        row: 1
    },
    {
        route: '/about',
        title: 'About',
        iconSun: <AiOutlineInfoCircle style={{ ...iconSunStyle }} />,
        iconMoon: <AiOutlineInfoCircle style={{ ...iconMoonStyle }} />,
        iconActiveSun:
            <AiOutlineInfoCircle style={{ ...iconActiveSunStyle }} />,
        iconActiveMoon:
            <AiOutlineInfoCircle style={{ ...iconActiveMoonStyle }} />,
        row: 1
    },
    {
        route: '/login',
        title: 'Login',
        iconSun: <FiLogIn style={{ ...iconSunStyle }} />,
        iconMoon: <FiLogIn style={{ ...iconMoonStyle }} />,
        iconActiveSun:
            <FiLogIn style={{ ...iconActiveSunStyle }} />,
        iconActiveMoon:
            <FiLogIn style={{ ...iconActiveMoonStyle }} />,
        row: 2,
        permissions: [RoleTypes.none]
    },
    {
        route: '/signup',
        title: 'Signup',
        iconSun: <SiGnuprivacyguard style={{ ...iconSunStyle }} />,
        iconMoon: <SiGnuprivacyguard style={{ ...iconMoonStyle }} />,
        iconActiveSun:
            <SiGnuprivacyguard style={{ ...iconActiveSunStyle }} />,
        iconActiveMoon:
            <SiGnuprivacyguard style={{ ...iconActiveMoonStyle }} />,
        row: 2,
        permissions: [RoleTypes.none]
    },
    {
        route: '/favorite',
        title: 'Favorite',
        iconSun: <MdFavorite style={{ ...iconSunStyle }} />,
        iconMoon: <MdFavorite style={{ ...iconMoonStyle }} />,
        iconActiveSun:
            <MdFavorite style={{ ...iconActiveSunStyle }} />,
        iconActiveMoon:
            <MdFavorite style={{ ...iconActiveMoonStyle }} />,
        row: 1,
        permissions: [RoleTypes.user, RoleTypes.business, RoleTypes.admin]
    },
    {
        route: '/my-moments',
        title: 'My Moments',
        iconSun: <MdViewWeek style={{ ...iconSunStyle }} />,
        iconMoon: <MdViewWeek style={{ ...iconMoonStyle }} />,
        iconActiveSun:
            <MdViewWeek style={{ ...iconActiveSunStyle }} />,
        iconActiveMoon:
            <MdViewWeek style={{ ...iconActiveMoonStyle }} />,
        row: 2,
        permissions: [RoleTypes.business, RoleTypes.admin]
    },
    {
        route: '/admin',
        title: 'User management',
        iconSun: <MdWork style={{ ...iconSunStyle }} />,
        iconMoon: <MdWork style={{ ...iconMoonStyle }} />,
        iconActiveSun:
            <MdWork style={{ ...iconActiveSunStyle }} />,
        iconActiveMoon:
            <MdWork style={{ ...iconActiveMoonStyle }} />,
        row: 2,
        permissions: [RoleTypes.admin]
    },
];