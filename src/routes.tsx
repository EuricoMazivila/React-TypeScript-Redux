import Login from "../src/views/Login";
import Recover from "../src/views/Recover";
import Dashboard from "../src/views/Dashboard";
import Notifications from "../src/views/Notifications";
import Icons from "../src/views/Icons";
import Typography from "../src/views/Typography";
import TableList from "../src/views/Tables";
import UserPage from "../src/views/User";
import Mail from "../src/views/Mail";

const routes = [ 
	{
		path: "/login",
		name: "Login",
		icon: "nc-icon nc-bank",
		component: Login,
		layout: "/auth",
		invisible: true,
	},
	{
		path: "/recover",
		name: "Recover",
		icon: "nc-icon nc-bank",
		component: Recover,
		layout: "/auth",
		invisible: true,
	},
	{
		path: "/mail",
		name: "Recover Link",
		icon: "nc-icon nc-bank",
		component: Mail,
		layout: "/auth",
		invisible: true,
	},
	{
		path: "/dashboard",
		name: "Dashboard",
		icon: "nc-icon nc-bank",
		component: Dashboard,
		layout: "/admin",
		invisible: false,
	},
	{
		path: "/icons",
		name: "Icons",
		icon: "nc-icon nc-diamond",
		component: Icons,
		layout: "/admin",
		invisible: false,
	},
	{
		path: "/notifications",
		name: "Notifications",
		icon: "nc-icon nc-bell-55",
		component: Notifications,
		layout: "/admin",
		invisible: false,
	},
	{
		path: "/user-page",
		name: "User Profile",
		icon: "nc-icon nc-single-02",
		component: UserPage,
		layout: "/admin",
		invisible: false,
	},
	{
		path: "/tables",
		name: "Table List",
		icon: "nc-icon nc-tile-56",
		component: TableList,
		layout: "/admin",
		invisible: false,
	},
	{
		path: "/typography",
		name: "Typography",
		icon: "nc-icon nc-caps-small",
		component: Typography,
		layout: "/admin",
		invisible: false,
	},
];
export default routes;
