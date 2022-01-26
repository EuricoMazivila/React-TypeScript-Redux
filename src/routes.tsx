import Login from "../src/views/Login";
import Recover from "../src/views/Recover";
import Dashboard from "../src/views/Dashboard";
import Notifications from "../src/views/Notifications";
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
		path: "/notifications",
		name: "Notifications",
		icon: "nc-icon nc-bell-55",
		component: Notifications,
		layout: "/admin",
		invisible: false,
	},
];
export default routes;
