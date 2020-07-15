import React, { useState, useEffect } from "react";
import { ColumnChart, PieChart } from "react-chartkick";
import { population } from "./population";
import "./styles.css";
import "chart.js";

import { getRepos } from "./api";

const groupBy = (array, key) => {
  const result = {};
  array.forEach((repo) => {
    result[repo[key]] = result[repo[key]] ? result[repo[key]] + 1 : 1;
  });
  return result;
};

function Chartkick() {
  const [repos, setRepos] = useState([]);
  const [groupedRepos, setGroupedRepos] = useState({});

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const repos = await getRepos();
        setRepos(repos);
      } catch (error) {
        console.log(error);
      }
    };
    fetchRepos();
  }, []);

  useEffect(() => {
    setGroupedRepos(groupBy(repos, "language"));
  }, [repos]);

  return (
    <div className="container">
      <h2 style={{ alignSelf: "flex-start", marginTop: "36px" }}>
        With static data:
      </h2>
      <h3 className="title">South America Population by Country</h3>
      <PieChart data={population} />

      <h2 style={{ alignSelf: "flex-start", marginTop: "36px" }}>
        Fetching data:
      </h2>
      <h3 className="title">Github Trending Repos</h3>
      <ColumnChart data={groupedRepos} />
    </div>
  );
}

export default Chartkick;
