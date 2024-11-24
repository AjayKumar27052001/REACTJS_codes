import React, { useState } from "react";
const TabsCompnent = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div>
      {tabs.map((tab, index) => (
        <div>
          <button onClick={() => setActiveTab(index)}>{tab.label}</button>
        </div>
      ))}

      <div className="tabsDisplay">{tabs[activeTab].content}</div>
    </div>
  );
};
const TabsApp = () => {
  const tabs = [
    { label: "tab1", content: "you clicked tab1" },
    { label: "tab2", content: "you clicked tab2" },
    { label: "tab3", content: "you clicked tab3" },
  ];
  return <TabsCompnent tabs={tabs} />;
};
export default TabsApp;
