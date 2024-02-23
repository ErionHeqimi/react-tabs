

import React, { useState } from "react";
import './App.css';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import 'react-tabs/style/react-tabs.css';



function App() {
  const [selectedTab, setSelectedTab] = useState(0); 

  const handleTabSelect = (index) => {
    setSelectedTab(index); 
  };

  const cards = [
    {
      title: ".COM",
      name: "$5.99/yr",
      text: "Instead of $10.99/yr",    
    },
    {
      title: ".AI",
      name: "$55.99/yr",
      text: "Instead of $10.99/yr",    
    },
    {
      title: ".NET",
      name: "$7.99/yr",
      text: "Instead of $10.99/yr",    
    },
    {
      title: ".HEALTH",
      name: "$7.99/yr",
      text: "Instead of $10.99/yr",    
    },
    {
      title: ".CO.UK",
      name: "3.99/yr",
      text: "Instead of $10.99/yr",    
    },
    {
      title: ".ORG",
      name: "$15.99/yr",
      text: "Instead of $10.99/yr",    
    },
    {
      title: ".CO",
      name: "$26.33/yr",
      text: "Instead of $10.99/yr",    
    },
    {
      title: ".SEA",
      name: "$26.33/yr",
      text: "Instead of $10.99/yr",    
    }
  ];

  return (
    <Tabs onSelect={handleTabSelect} selectedIndex={selectedTab}>
      <TabList>
        <Tab>Domains</Tab>
        <Tab>Web Hosting</Tab>
        <Tab>Dedicated Servers</Tab>
        <Tab>Virtual Cloud Servers</Tab>
        <Tab>Wordpress Hosting</Tab>
        <Tab>Email Hosting</Tab>
        <Tab>VPS Hosting Servers</Tab>
        <Tab>Free Hosting</Tab>
      </TabList>

      <TabPanel>
        {selectedTab === 0 && (
          <div className="App">
            <div className="cards">
              {cards.map((card, i) => (
                <div key={i} className="card">
                  <h3>{card.title}</h3>
                
                  <p>{card.text}</p>
                  <button className="btn">Buy Now</button>
                </div>
              ))}
            </div>
          </div>
        )}
      </TabPanel>

     
    </Tabs>
  );
}

export default App;

