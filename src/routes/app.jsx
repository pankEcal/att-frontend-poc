import DailyMonitoringList from "views/DailyMonitoringList/DailyMonitoringList.jsx";
import LoadTesting from "views/LoadTesting/LoadTesting.jsx";


import {
    ContentPaste, LibraryBooks, BubbleChart, LocationOn, Notifications
} from 'material-ui-icons';

const appRoutes = [
    // { path: "/dashboard", sidebarName: "Dashboard", navbarName: "Material Dashboard", icon: Dashboard, component: DashboardPage },
  
    { path: "/daily-monitoring", sidebarName: "Daily Monitoring", navbarName: "API List", icon: ContentPaste, component: DailyMonitoringList },
    // { path: "/load-testing", sidebarName: "Load testing", navbarName: "Automation Test", icon: ContentPaste, component: TableList },
    { path: "/load-testing", sidebarName: "Load Testing", navbarName: "Load Testing", icon: LibraryBooks, component: LoadTesting },
    // { path: "/icons", sidebarName: "Icons", navbarName: "Icons", icon: BubbleChart, component: Icons },
    // { path: "/maps", sidebarName: "Maps", navbarName: "Map", icon: LocationOn, component: Maps },
    // { path: "/notifications", sidebarName: "Notifications", navbarName: "Notifications", icon: Notifications, component: NotificationsPage },
    { redirect: true, path: "/", to: "/daily-monitoring", navbarName: "Redirect" }
];

export default appRoutes;
