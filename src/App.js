import "./App.css";
import "primereact/resources/themes/md-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
import { Calendar } from "primereact/calendar";
import { useState } from "react";
import { TabMenu } from "primereact/tabmenu";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Chart } from "primereact/chart";
function App() {
  const [date2, setDate2] = useState(null);
  const [date3, setDate3] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [basicData] = useState({
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "#42A5F5",
        data: [65, 59, 80, 81, 56, 55, 40],
      },
      {
        label: "My Second dataset",
        backgroundColor: "#FFA726",
        data: [28, 48, 40, 19, 86, 27, 90],
      },
    ],
  });
  const getLightTheme = () => {
    let basicOptions = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        legend: {
          labels: {
            color: "#495057",
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: "#495057",
          },
          grid: {
            color: "#ebedef",
          },
        },
        y: {
          ticks: {
            color: "#495057",
          },
          grid: {
            color: "#ebedef",
          },
        },
      },
    };

    return {
      basicOptions,
    };
  };

  const { basicOptions } = getLightTheme();
  const items = [
    { label: "Patients", icon: "pi pi-fw pi-users" },
    { label: "Source", icon: "pi pi-fw pi-sitemap" },
    { label: "Financials", icon: "pi pi-fw pi-money-bill" },
  ];

  return (
    <div className="App">
      <div className="heading-parent">
        <div className="heading-text">
          <div className="heading-text-child">
            <h1>Analytics Overview</h1>
          </div>{" "}
        </div>
        <div className="data-holder">
          <div className="date-parent">
            <span>Date&nbsp; </span>{" "}
            <div className="col-3">
              <label htmlFor="icon">From</label>
              <Calendar
                id="icon"
                value={date2}
                onChange={(e) => setDate2(e.value)}
                showIcon
              />
            </div>
            <div className="col-3">
              <label htmlFor="icon">To</label>
              <Calendar
                id="icon1"
                value={date3}
                onChange={(e) => setDate3(e.value)}
                showIcon
              />
            </div>
          </div>
        </div>
        {/* <div className="date-format"></div> */}
      </div>

      {/* <div className="app-child">
        <div className="parent-header">
          <div className="header">
            <h1>Analytics overview</h1>
          </div>
        </div>
        <div className="data-holder">
          <div className="date-parent">
            <span>Date&nbsp; </span>{" "}
            <div className="col-3">
              <label htmlFor="icon">From</label>
              <Calendar
                id="icon"
                value={date2}
                onChange={(e) => setDate2(e.value)}
                showIcon
              />
            </div>
            <div className="col-3">
              <label htmlFor="icon">To</label>
              <Calendar
                id="icon1"
                value={date3}
                onChange={(e) => setDate3(e.value)}
                showIcon
              />
            </div>
          </div>
        </div>
      </div> */}
      <div className="tabmenu">
        <TabMenu
          style={{
            width: "360px",
            padding: "0px",
            margin: "0px",
            fontSize: "13px",
          }}
          model={items}
          activeIndex={activeIndex}
          onTabChange={(e) => {
            console.log("e.index", e.index);
            setActiveIndex(e.index);
          }}
        />
      </div>
      {activeIndex == 0 && (
        <div className="main-content">
          <div className="card-parent">
            <Card
              style={{
                width: "24rem",
                marginBottom: "2em",
                backgroundColor: "white",
                margin: "20px",
              }}
            >
              <div className="cards-container">
                <div className="m-0 cards" style={{ lineHeight: "1.5" }}>
                  <div>
                    <h3>5</h3>
                  </div>
                  <div>Revisits</div>
                  <div>Scheduled / day</div>
                </div>
                <div className="m-0 cards" style={{ lineHeight: "1.5" }}>
                  <div>
                    <h3>11/12</h3>
                  </div>
                  <div>Actual v. Scheduled </div>
                  <div>visits</div>
                </div>
                <div className="m-0 cards" style={{ lineHeight: "1.5" }}>
                  <div>
                    <h3>5</h3>
                  </div>
                  <div>Vaccination </div>
                  <div>appointments</div>
                </div>
              </div>
            </Card>
          </div>
          <div className="chart-parent">
            {" "}
            <div className="card">
              <h5>Vertical</h5>
              <Chart type="bar" data={basicData} options={basicOptions} />
            </div>
          </div>
        </div>
      )}

      <br />
      <br />
    </div>
  );
}

export default App;
