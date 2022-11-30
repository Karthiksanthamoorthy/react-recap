import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCaretDown,faCaretUp,faChartLine,faCoffee,faCoins,faDollar,faSignal,} from "@fortawesome/free-solid-svg-icons";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CircularProgress, {
  circularProgressClasses,
} from '@mui/material/CircularProgress';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
// import { StackedBarChart } from '@mui/icons-material';
 import { StackedChart } from "./StackedChart";
 import { ToggleButtonOverview } from './ToogleButtonOverview';


function App() {
  return (
    <div className="App">
      <Dashboard />
          </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h1>Welcome to Dashlead🚀🚀</h1>
      {/* <SummaryBox /> */}
      <SummaryBoxList />
      <MonthlyProfits />
      <Overview />
    </div>
  )
}

function Overview() {
  return (
    <div className="overview-container">
      <div className="overview-spec">
        <div>
      <h4 className="profit-box-heading">Overview of Sales Win/Lost</h4> 
      <p className="profit-box-sub-text">
        Comapred to last month sales.
      </p></div></div> 
      <ToggleButtonOverview />
      <StackedChart />
    </div>
  );
}

function SummaryBoxList() {
  const dataList = [
    {
      number: 568,
      percent: 0.7,
      icon: faChartLine,
      text: "Number Of Sales",
      time: "Last Month",
      iconColor: "var(--purple)",
      performance: "up",
      type: "count",
      linePercent:75,
    },
    {
      number: "12,897",
      percent: 0.43,
      icon: faCoins,
      text: "New Revenue",
      time: "Last Month",
      iconColor: "var(--orange)",
      performance: "down",
      type: "money",
      linePercent: 60,
    },
    {
      number: "11,234",
      percent: 1.44,
      icon: faDollar,
      text: "Total Cost",
      time: "Last Month",
      iconColor: "var(--green)",
      performance: "down",
      type: "money",
      linePercent: 50,
    },
    {
      number: "789",
      percent: 0.9,
      icon: faSignal,
      text: "Profit By Sale",
      time: "Last Month",
      iconColor: "var(--blue)",
      performance: "up",
      type: "money",
      linePercent: 40,
    }
  ];   
  return (
    <div className="summary-box-list">
      {dataList.map((dt) => (
        <SummaryBox data={dt} />
      ))}
    </div>
  );
}

function PercentProgress({ data }) {
  
  return (
    <div>
    <div className="profit-box-time-container">
      <p>{data.time}</p>
      <p>{data.percent}%</p>
      </div>
        <CustomLinearProgress
        lineColor={data.lineColor}
        variant="determinate"
        value={data.percent} />
      </div>
    
  );
}

function MonthlyProfits() {
  const profits = [
    {
    time: "This month",
    percent: 75,
    lineColor: "var(--purple)",
    },
    {
    time: "Last month",
    percent: 50,
    lineColor: "var(--green)",
    },
  ]
  return (
    <div className="profit-box-container">
      <h4 className="profit-box-heading">Monthly Profits</h4> 
      <p className="profit-box-sub-text">
        Excepteur sint occaeest cupidatal non proident.
      </p>
      <h2 className="profit-box-number">$22,534</h2>
      <div className="percent-box-container">
        {profits.map((dt) => (
          <PercentProgress data={dt} />
        ))}  
      </div>
    </div>
  );
}


const CustomLinearProgress = styled(LinearProgress)(({ theme, lineColor }) => ({
  height: 6,

  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "hsl(221deg 36% 91%)",
  },
  [`& .${linearProgressClasses.bar}`]: {
    backgroundColor: lineColor,
  },
}));

function SummaryBox({ data }) {
  
  const iconStyle = { color: data.iconColor };

  return (
    <div className="summary-box-container">
      <div className="summary-box-spec">
        <p className="summary-box-text">{data.text}</p>
        <FontAwesomeIcon style={{ color: data.iconColor }} icon={data.icon} />
      </div>
      <h2 className="summary-box-number">
        {data.type = "money" ? "$" : null}
        {data.number}
      </h2>
      <CustomLinearProgress lineColor={data.iconColor}
        variant="determinate" value={data.linePercent} />
      <div className="summary-box-time-container">
        <p>{data.time}</p>
        <p>
          <FontAwesomeIcon
            style={{
              color: data.performance = "up"
                ? "hsl(164deg 97% 40%)"
                : "hsl(3deg 99% 62%)",
            }}
            icon={data.performance = "up" ? faCaretUp : faCaretDown}
          />{" "}
          {data.percent}%
        </p>
      </div>
    </div>
  );
}
export default App;
