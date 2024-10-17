import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined'; // Corrected import
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'; // Corrected import
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined'; // Corrected import
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined'; // Corrected import
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined'; // Corrected import
import PieChartOutlinedIcon from '@mui/icons-material/PieChartOutlined'; // Corrected import
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined'; // Corrected import
import MapOutlinedIcon from '@mui/icons-material/MapOutlined'; // Corrected import

export const Items = [
    { kind: 'header', title: 'Data' },
    { segment: 'manage-team', title: 'Manage Team', icon: <GroupOutlinedIcon /> },
    { segment: 'contact-information', title: 'Contacts Information', icon: <ContactsOutlinedIcon /> },
    { segment: 'invoices-balances', title: 'Invoices Balances', icon: <ReceiptOutlinedIcon /> },
    { kind: 'header', title: 'Pages' },
    { segment: 'profile-form', title: 'Profile Form', icon: <PersonOutlineOutlinedIcon /> },
    { segment: 'calender', title: 'Calender', icon: <CalendarTodayOutlinedIcon /> },
    { segment: 'faq-page', title: 'FAQ page', icon: <HelpOutlineOutlinedIcon /> },
    { kind: 'header', title: 'Charts' },
    { segment: 'lbar-chart', title: 'Bar Chart', icon: <BarChartOutlinedIcon /> },
    { segment: 'pie-chart', title: 'Pie Chart', icon: <PieChartOutlinedIcon /> },
    { segment: 'line-chart', title: 'Line Chart', icon: <TimelineOutlinedIcon /> },
    { segment: 'geography-chart', title: 'Geography Chart', icon: <MapOutlinedIcon /> },
];
