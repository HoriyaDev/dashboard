import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined'; // Corrected import
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'; // Corrected import
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined'; // Corrected import
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined'; // Corrected import
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined'; // Corrected import
import PieChartOutlinedIcon from '@mui/icons-material/PieChartOutlined'; // Corrected import
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined'; // Corrected import
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import PieChartIcon from '@mui/icons-material/PieChart'; 
import EmailIcon from '@mui/icons-material/Email';
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual'; 
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import TrafficIcon from '@mui/icons-material/Traffic';// Corrected import

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

export const chartData = [
    {
      id: 0,
      icon: <EmailIcon />,
      number: '12,361',
      name: 'Emails Sent',
      series: [
        { id: 0, value: 10 },
        { id: 1, value: 15 },
      ],
      percent:'40%'
    },
    {
      id: 1,
      icon: <PhotoSizeSelectActualIcon />,
      number: '431,225',
      name: 'Sales Obtained',
      series: [
        { id: 0, value: 20 },
        { id: 1, value: 10 },
      ],
      percent:'40%'
    },
    {
      id: 2,
      icon: <PersonAddIcon />,
      number: '32,441',
      name: 'New Clients',
      series: [
        { id: 0, value: 25 },
        { id: 1, value: 15 },
      ],
      percent:'40%'
    },
    {
      id: 3,
      icon: <TrafficIcon />,
      number: '1,325,134',
      name: 'Traffic Received',
      series: [
        { id: 0, value: 18 },
        { id: 1, value: 17 },
      ],
      percent:'40%'
    },
  ];
