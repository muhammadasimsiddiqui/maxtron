// import { MenuItem } from './menu.model';
// export const MENU: MenuItem[] = [
//   {
//     id: 1,
//     label: 'Dashboard',
//     icon: 'home',
//     subItems: [
//       {
//         id: 2,
//         label: 'Analysis',
//         link: '/',
//         parentId: 1,
//       },
//       {
//         id: 3,
//         label: 'eCommerce',
//         link: '/index2',
//         parentId: 1,
//       },
//     ],
//   },
//   {
//     id: 4,
//     label: 'widgets',
//     icon: 'widgets',
//     subItems: [
//       {
//         id: 5,
//         label: 'Data',
//         link: './widgets/data',
//         parentId: 1,
//       },
//       {
//         id: 6,
//         label: 'Static',
//         link: './widgets/static',
//         parentId: 1,
//       },
//     ],
//   },
//   {
//     id: 7,
//     label: 'Apps',
//     icon: 'apps',
//     subItems: [
//       {
//         id: 8,
//         label: 'Email Box',
//         link: './apps/emailbox',
//         parentId: 6,
//       },
//       {
//         id: 9,
//         label: 'Email Read',
//         link: './apps/emailread',
//         parentId: 6,
//       },
//       {
//         id: 10,
//         label: 'Chat',
//         link: './apps/chatbox',
//         parentId: 6,
//       },
//       {
//         id: 11,
//         label: 'Calendar',
//         link: './apps/calender',
//         parentId: 6,
//       },
//       {
//         id: 12,
//         label: 'To do',
//         link: './apps/todo',
//         parentId: 6,
//       },
//       {
//         id: 13,
//         label: 'Invoice',
//         link: './apps/invoice',
//         parentId: 6,
//       },
//     ],
//   },
//   {
//     id: 14,
//     label: 'eCommerce',
//     icon: 'shopping_bag',
//     subItems: [
//       {
//         id: 15,
//         label: 'Add Product',
//         link: './ecommerce/addProducts',
//         parentId: 6,
//       },
//       {
//         id: 16,
//         label: 'Products',
//         link: './ecommerce/products',
//         parentId: 6,
//       },
//       {
//         id: 17,
//         label: 'Customers',
//         link: './ecommerce/customers',
//         parentId: 6,
//       },
//       {
//         id: 18,
//         label: 'Customer Details',
//         link: './ecommerce/customerdetails',
//         parentId: 6,
//       },
//       {
//         id: 19,
//         label: 'Orders',
//         link: './ecommerce/orders',
//         parentId: 6,
//       },
//       {
//         id: 20,
//         label: 'Order Details',
//         link: './ecommerce/orderdetails',
//         parentId: 6,
//       },
//     ],
//   },
//   {
//     id: 21,
//     label: 'Components',
//     icon: 'card_giftcard',
//     subItems: [
//       {
//         id: 22,
//         label: 'Alerts',
//         link: './component/alerts',
//         parentId: 17,
//       },
//       {
//         id: 23,
//         label: 'Accordions',
//         link: './component/accordions',
//         parentId:17,
//       },
//       {
//         id: 24,
//         label: 'Badges',
//         link: './component/badges',
//         parentId: 17,
//       },
//       {
//         id:25,
//         label: 'Buttons',
//         link: './component/buttons',
//         parentId: 17,
//       },
//       {
//         id: 26,
//         label: 'Carousels',
//         link: './component/carousels',
//         parentId: 17,
//       },
//       {
//         id: 27,
//         label: 'Media Objects',
//         link: './component/media',
//         parentId: 17,
//       },
//       {
//         id: 28,
//         label: 'Modals',
//         link: './component/modals',
//         parentId: 17,
//       },
//       {
//         id: 29,
//         label: 'Navs & Tabs',
//         link: './component/navs',
//         parentId: 17,
//       },
//       {
//         id: 30,
//         label: 'Navbar',
//         link: './component/navbar',
//         parentId: 17,
//       },
//       {
//         id: 31,
//         label: 'Pagination',
//         link: './component/paginations',
//         parentId: 17,
//       },
//       {
//         id: 32,
//         label: 'Popovers & Tooltips',
//         link: './component/popovers',
//         parentId: 17,
//       },
//       {
//         id: 33,
//         label: 'Progress',
//         link: './component/progressbars',
//         parentId: 17,
//       },
//       {
//         id: 34,
//         label: 'Spinners',
//         link: './component/spinners',
//         parentId: 17,
//       },
//       {
//         id: 35,
//         label: 'Notifications',
//         link: './component/notifications',
//         parentId: 17,
//       },
//       {
//         id: 36,
//         label: 'Avatrs & Chips',
//         link: './component/avtars',
//         parentId: 17,
//       },
//       {
//         id: 37,
//         label: 'Typography',
//         link: './component/typography',
//         parentId: 17,
//       },
//       {
//         id: 38,
//         label: 'Utilities',
//         link: './component/utilities',
//         parentId: 17,
//       },
//     ],
//   },
//   {
//     id: 39,
//     label: 'Icons',
//     icon: 'view_agenda',
//     subItems: [
//       {
//         id: 40,
//         label: 'Line Icons',
//         link: './icons/box',
//         parentId: 3,
//       },
//       {
//         id: 41,
//         label: 'Boxicons',
//         link: './icons/line',
//         parentId: 3,
//       },
//       {
//         id: 42,
//         label: 'Feathericons',
//         link: './icons/feather',
//         parentId: 3,
//       },
//     ],
//   },
//   {
//     id: 43,
//     label: 'Forms',
//     icon: 'toc',
//     subItems: [
//       {
//         id: 44,
//         label: 'Form Elements',
//         link: './forms/elements',
//         parentId: 10,
//       },
//       {
//         id: 45,
//         label: 'Input Groups',
//         link: './forms/inputgroup',
//         parentId: 10,
//       },
//       {
//         id: 46,
//         label: 'Radios & Checkboxes',
//         link: './forms/checkboxe',
//         parentId: 10,
//       },
//       {
//         id: 47,
//         label: 'Forms Layouts',
//         link: './forms/layouts',
//         parentId: 10,
//       },
//       {
//         id: 48,
//         label: 'Form Validation',
//         link: './forms/validations',
//         parentId: 10,
//       },
//       {
//         id: 49,
//         label: 'Form Wizard',
//         link: './forms/wizard',
//         parentId: 10,
//       },
//       {
//         id: 50,
//         label: 'File Upload',
//         link: './forms/fileupload',
//         parentId: 10,
//       },
//       {
//         id: 51,
//         label: 'Date Pickers',
//         link: './forms/datetime',
//         parentId: 10,
//       },
//       {
//         id: 52,
//         label: 'Select2',
//         link: './forms/select2',
//         parentId: 10,
//       },
//       {
//         id: 53,
//         label: 'Form Repeater',
//         link: './forms/repeater',
//         parentId: 10,
//       },
//     ],
//   },
//   {
//     id: 54,
//     label: 'Tables',
//     icon: 'api',
//     subItems: [
//       {
//         id: 55,
//         label: 'Basic Table',
//         link: './tables/basictable',
//         parentId: 1,
//       },
//       {
//         id: 56,
//         label: 'Data Table',
//         link: './tables/datatable',
//         parentId: 1,
//       },
//     ]
//   },
//   {
//     id: 57,
//     label: 'Authentication',
//     icon: 'lock',
//     subItems: [
//       {
//         id: 58,
//         label: 'Basic',
//         subItems: [
//           { id: 59, label:'Login', link: './basic/login' },
//           { id: 60, label:'Register', link: './basic/register' },
//           { id: 61, label:'Forgot Password', link: './basic/forgotpassword' },
//           { id: 62, label:'Reset Password', link: './basic/resetpassword' }
//         ]
//       },
//       {
//         id: 63,
//         label: 'Cover',
//         subItems: [
//           { id: 64, label: 'Login', link: './cover/login' },
//           { id: 65, label: 'Register', link: './cover/register' },
//           { id: 66, label: 'Forgot Password', link: './cover/forgotpassword' },
//           { id: 67, label: 'Reset Password', link: './cover/resetpassword' }
//         ]
//       },
//       {
//         id: 68,
//         label: 'Boxed',
//         subItems: [
//           { id: 69, label: 'Login', link: './boxed/login' },
//           { id: 70, label: 'Register', link: './boxed/register' },
//           { id: 71, label: 'Forgot Password', link: './boxed/forgotpassword' },
//           { id: 72, label: 'Reset Password', link: './boxed/resetpassword' }
//         ]
//       }
//     ]
//   },
//   {
//     id: 54,
//     label: 'Tables',
//     icon: 'api',
//     subItems: [
//       { id: 55, label: 'Basic Table', link: './tables/basictable' },
//       { id: 56, label: 'Data Table', link: './tables/datatable' }
//     ]
//   },
//   {
//     id: 1,
//     label: 'Pages',
//     icon: 'report_problem',
//     subItems: [
//       { id: 2, label: '404 Error', link: './error/error404' },
//       { id: 3, label: '505 Error', link: './error/error505' },
//       { id: 4, label: 'Coming Soon', link: './error/comingsoon' },
//       { id: 5, label: 'Blank Page', link: '/StarterPage' }
//     ]
//   }
// ];
