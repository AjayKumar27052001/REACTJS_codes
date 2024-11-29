import React, { useEffect, useState } from "react";
import App1 from "./SearchBar";
import TabsApp from "./TabsApp";

import RatingApp1 from "./Ratingfunctionality";
import FormsubmitApp from "./FormsubmitApp";
import MultiStepFormAppf from "./Multistepform";
//import Formsubmit2 from "./Formsubmit2";
import DynamicFormApp from "./Dynamicform";
import Formsubmit2 from "./Formsubmit2";

import PostLists from "./ApiFetch";
//import PostsList from "./ApiFetch";
//import Formsubmit2 from "./Formsubmit2";
//import MultistepformApp from "./Multistepform";
//import FormsubmitApp from "./Multistepform";
//import MultiStepFormAppf from "./Multistepform";
//import FormsubmitApp from "./FormsubmitApp";
//import DropdownApp from "./Dropdown";
//import TabsApp from "./Dropdowm";
//import DropdownApp from "./Dropdowm";

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
        .then((res) => res.json())
        .then((dat) => {
          setData(dat);
          setLoading(false);
          console.log("rendered");
        })
        .catch((error) => {
          console.log("server error", error);
        });
    };

    fetchData(); // Initial fetch
    const interval = setInterval(fetchData, 100000000000000000); // Fetch every 10 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  if (loading) return <p>Loading.............</p>;

  return (
    <div>
      <div>
        <App1 />
        <PostLists />

        <MultiStepFormAppf />
        <TabsApp />
        <DynamicFormApp />
        <RatingApp1 />
        <FormsubmitApp />
        <MultiStepFormAppf />
        <Formsubmit2 />
      </div>
      <h1>Bitcoin Price Index</h1>
      {data && (
        <ul>
          {Object.entries(data.bpi).map(([currency, details]) => (
            <li key={currency}>
              {currency}: {details.rate}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
