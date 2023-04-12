import DailyMonitoringList from "views/DailyMonitoringList/DailyMonitoringList.jsx";
import LoadTesting from "views/LoadTesting/LoadTesting.jsx";


import { ContentPaste, LibraryBooks } from 'material-ui-icons';

const appRoutes = [
    
    { path: "/daily-monitoring", sidebarName: "Daily Monitoring", navbarName: "API List", icon: ContentPaste, component: DailyMonitoringList },
   
    { path: "/load-testing", sidebarName: "Load Testing", navbarName: "Load Testing", icon: LibraryBooks, component: LoadTesting },
    
    { redirect: true, path: "/", to: "/daily-monitoring", navbarName: "Redirect" }
];

export default appRoutes;
