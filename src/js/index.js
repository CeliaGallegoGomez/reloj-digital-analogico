// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const dateDayElement =document.getElementById('date-day');
const dateNumberElement =document.getElementById('date-number');
const dateMonthElement =document.getElementById('date-month');
const dateYearElement =document.getElementById('date-year');
const digitalHoursElement =document.getElementById('digital-hours');
const digitalMinutesElement =document.getElementById('digital-minutes');

const rootStyles = document.documentElement.style;

const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const fixTime =(number)=> {
    if (number<10){
        return '0'+number;
    }
    return number
};

getFullDate =()=>{
    const date = new Date();
    const day = days[date.getDate()];
    const dayNumber = date.getDate();
    const year = date.getFullYear();
    const month = months[date.getMonth()];
    const minutes = fixTime(date.getMinutes());
    const hours = fixTime(date.getHours());
    const seconds =date.getSeconds();
    const secondsDegrees = seconds*6;
    const minutesDegrees = minutes*6+seconds/10;
    const hoursDegrees =hours*30+minutes/2;

    dateDayElement.textContent = day;
    dateNumberElement.textContent = dayNumber;
    dateYearElement.textContent = year;
    dateMonthElement.textContent =month;
    digitalHoursElement.textContent = hours;
    digitalMinutesElement.textContent = minutes;

    rootStyles.setProperty('--seconds-rotate',secondsDegrees +'deg');
    rootStyles.setProperty('--minutes-rotate',minutesDegrees +'deg');
    rootStyles.setProperty('--hours-rotate',hoursDegrees +'deg');
};

setInterval(() => {
    getFullDate();
  }, 1000);
  
  getFullDate();
