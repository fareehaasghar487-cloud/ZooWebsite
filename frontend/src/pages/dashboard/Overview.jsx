import React, { useEffect, useState } from "react";
import { FaUsers, FaPaw, FaCalendarAlt } from "react-icons/fa";

import axios from "axios";
import { BackendUrl } from "../../BaseUrl";

const Overview = () => {
  const [counts, setCounts] = useState({
    users: 0,
    animals: 0,
    events: 0,
  });

  const fetchCounts = async () => {
    try {
      const usersRes = await axios.get(`${BackendUrl}/count/users`,{withCredentials:true});
      const animalsRes = await axios.get(`${BackendUrl}/count/animals`,{withCredentials:true});
      const eventsRes = await axios.get(`${BackendUrl}/count/events`,{withCredentials:true});

      setCounts({
        users: usersRes.data.count,
        animals: animalsRes.data.count,
        events: eventsRes.data.count,
      });
    } catch (error) {
      console.log("Error fetching counts", error);
    }
  };

  useEffect(() => {
    fetchCounts();
  }, []);

  const overViewData = [
    {
      id: 1,
      title: "Total Users",
      count: counts.users,
      icon: FaUsers,
    },
    {
      id: 2,
      title: "Total Animals",
      count: counts.animals,
      icon: FaPaw,
    },
    {
      id: 3,
      title: "Total Events",
      count: counts.events,
      icon: FaCalendarAlt,
    },
  ];

  return (
    <div className="container px-10">
      <h1 className="text-4xl font-bold text-[#245489]">Analytics</h1>
      <p className="text-2xl text-gray-600">Track requests and statuses</p>

      <div className="flex justify-between mt-10 gap-6">
        {overViewData.map((data) => {
          const Icon = data.icon;
          return (
            <div
              key={data.id}
              className="flex gap-10 border-l-4 border-[#245489] justify-center items-center text-center shadow-lg p-6 px-10 rounded-xl hover:scale-105 transition-all delay-200 bg-white"
            >
              <div>
                <h3 className="text-xl font-semibold text-[#8390A2]">
                  {data.title}
                </h3>
                <h1 className="text-3xl font-bold text-[#245489]">
                  {data.count}
                </h1>
              </div>
              <Icon className="text-4xl text-[#245489]" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Overview;

