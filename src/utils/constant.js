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
    { segment: 'bar-chart', title: 'Bar Chart', icon: <BarChartOutlinedIcon /> },
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
   export const balanceSheet = [
    { year: 2020, currAss: 10000, nCurrAss: 5000, curLia: 8000, nCurLia: 2000, capStock: 12000, retEarn: 3000, treas: 1000 },
    { year: 2021, currAss: 12000, nCurrAss: 6000, curLia: 9000, nCurLia: 2500, capStock: 13000, retEarn: 3500, treas: 1500 },
    { year: 2022, currAss: 15000, nCurrAss: 7000, curLia: 10000, nCurLia: 3000, capStock: 14000, retEarn: 4000, treas: 2000 },
    { year: 2023, currAss: 17000, nCurrAss: 8000, curLia: 11000, nCurLia: 3500, capStock: 15000, retEarn: 4500, treas: 2500 },
  ];
  export const tableData = [
    { id: "01e4ds", name: "John Doe", date: "2024-10-10", price: "$43.56" },
    { id: "02a3bt", name: "Jane Smith", date: "2024-09-12", price: "$21.99" },
    { id: "03b6yt", name: "Michael Johnson", date: "2024-08-25", price: "$17.50" },
    { id: "04c8uw", name: "Emily Davis", date: "2024-07-30", price: "$99.99" },
    { id: "05d7rt", name: "Robert Brown", date: "2024-06-14", price: "$15.99" },
    { id: "06e9pm", name: "Linda Williams", date: "2024-05-19", price: "$49.00" },
    { id: "07f0lk", name: "David Miller", date: "2024-04-07", price: "$32.75" },
    { id: "08g1oa", name: "Barbara Wilson", date: "2024-03-22", price: "$18.65" },
    { id: "09h2iq", name: "James Taylor", date: "2024-02-09", price: "$55.45" },
    { id: "10i3zp", name: "Mary Anderson", date: "2024-01-16", price: "$27.85" },
    { id: "11j4bx", name: "Christopher Thomas", date: "2023-12-28", price: "$39.99" },
    { id: "12k5mt", name: "Patricia Martinez", date: "2023-11-05", price: "$23.50" },
    { id: "13l6nh", name: "Matthew Moore", date: "2023-10-11", price: "$42.99" },
    { id: "14m7qy", name: "Jennifer Lee", date: "2023-09-23", price: "$75.00" },
    { id: "15n8ds", name: "Charles Harris", date: "2023-08-31", price: "$60.25" }
  ];
  

  export const revenueData = [
    {
      name: "plane",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "helicopter",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "boat",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "train",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "subway",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "bus",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "car",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "bicycle",
      uv: 3590,
      pv: 4000,
      amt: 2340,
    },
    {
      name: "horse",
      uv: 3690,
      pv: 4100,
      amt: 2300,
    },
    {
      name: "others",
      uv: 3790,
      pv: 4200,
      amt: 2600,
    },
  ];
  


  export   const barData = [
    {
      name: "AD",
      uv: 450,   // Modified value
      pv: 250,   // Modified value
      amt: 200,  // Modified value
      count: 50, // Modified value
    },
    {
      name: "AE",
      uv: 300,   // Modified value
      pv: 150,   // Modified value
      amt: 450,  // Modified value
      count: 100, // Modified value
    },
    {
      name: "AF",
      uv: 200,   // Modified value
      pv: 500,   // Modified value
      amt: 150,  // Modified value
      count: 200, // Modified value
    },
    {
      name: "AG",
      uv: 400,   // Modified value
      pv: 350,   // Modified value
      amt: 100,  // Modified value
      count: 250, // Modified value
    },
    {
      name: "AH",
      uv: 150,   // Modified value
      pv: 450,   // Modified value
      amt: 300,  // Modified value
      count: 150, // Modified value
    },
    {
      name: "AL",
      uv: 250,   // Modified value
      pv: 350,   // Modified value
      amt: 400,  // Modified value
      count: 200, // Modified value
    },
    {
      name: "AM",
      uv: 350,   // Modified value
      pv: 300,   // Modified value
      amt: 250,  // Modified value
      count: 400, // Modified value
    },
  ];
  

   export const faqs = [
    {
      question: "What is your return policy?",
      answer: "Our return policy allows for returns within 30 days of purchase. Items must be in their original condition with all tags attached. Please contact our support team to initiate a return."
    },
    {
      question: "How long does shipping take?",
      answer: "Shipping times vary based on your location. Typically, orders are processed within 2-3 business days and arrive within 5-7 business days. International shipping may take longer."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we offer international shipping to most countries. Shipping fees and delivery times may vary depending on your location."
    },
    {
      question: "How can I track my order?",
      answer: "Once your order is shipped, you will receive a tracking number via email. You can use this number to track your order on our website or the carrier's website."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept major credit cards, PayPal, Apple Pay, and Google Pay. All payments are processed securely."
    },
    {
      question: "How do I create an account?",
      answer: "To create an account, click on the 'Sign Up' button at the top of our homepage. Fill in the required information, and you’ll be ready to start using our services."
    },
    {
      question: "Can I cancel my order?",
      answer: "You can cancel your order within 24 hours of placing it. After 24 hours, the order may have already been processed and shipped, making cancellation more difficult. Please contact support for assistance."
    },
    {
      question: "Do you offer discounts or promotions?",
      answer: "Yes, we offer seasonal discounts and occasional promotions. Sign up for our newsletter or follow us on social media to stay updated."
    },
    {
      question: "What should I do if I receive a damaged item?",
      answer: "If you receive a damaged item, please contact our support team immediately. We will guide you through the process of returning the item and getting a replacement or refund."
    },
    {
      question: "How do I reset my password?",
      answer: "If you've forgotten your password, click on the 'Forgot Password' link on the login page. Follow the instructions to reset your password via email."
    }
  ];
  