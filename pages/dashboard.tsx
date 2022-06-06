import { Icon } from "@iconify/react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Container from "../components/Container";
import DashboardCard from "../components/DashboardCard";
import DashboardLayout from "../layouts/DashboardLayout";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useSelector } from 'react-redux';
import { ApplicationState, User } from '../store/types/index';

const Dashboard = () => {
  
  // Store
  const { auth: { userInfos } } = useSelector((state:ApplicationState) => state)
  
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <DashboardLayout titleDesc="admin pannel">
      <Container>
        <h2 className="mt-4">Overview</h2>
        <div className="grid grid-cols-4 mx-auto w-full gap-4 mt-8">
          <DashboardCard
            bonus="+0%"
            icon="bi:check-circle-fill"
            title="Active hours"
            value={0}
          />
          <DashboardCard
            bonus="+0%"
            icon="akar-icons:circle-x-fill"
            title="Inactive hours"
            value={0}
          />
          <DashboardCard
            bonus=""
            icon="akar-icons:paper"
            title="Subjects"
            value={(userInfos as User)?.selected_exam?.length || 0}
          />
          <DashboardCard
            bonus=""
            icon="akar-icons:paper"
            title="Subjects"
            value={(userInfos as User)?.selected_exam?.length || 0}
          />
        </div>

        <div className="mt-8 flex gap-8">
          <div>
            <h2 className="mt-4">Spent hours</h2>
            <div
              className="rounded-md shadow-sm p-4 text-center mt-8 bg-[#fdfdfd]"
              style={{ minWidth: 300 }}
            >
              <div className="px-8 py-10">
                <div className="my-8">
                  <span className="text-7xl text-black">0</span>
                </div>
                <div>
                  <p>Total hours spent in learning</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-grow flex flex-col">
            <h2 className="mt-4 mb-8">Statistics</h2>
            <div className="px-8 rounded-md bg-white flex-grow flex flex-col items-center justify-center gap-8 py-6">
              <div className="flex items-center gap-10">
                <div className="flex items-center gap-4">
                  <Icon color="green" icon="akar-icons:circle-fill" height={12} />
                  <span className="text-black">Active time</span>
                </div>
                <div className="flex items-center gap-4">
                  <Icon color="purple" icon="akar-icons:circle-fill" height={12} />
                  <span className="text-black">Inactive time</span>
                </div>
              </div>
              <ResponsiveContainer width="100%" height="90%">
                <LineChart
                  width={500}
                  height={300}
                  data={data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="pv"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                  />
                  <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

        </div>
      </Container>
    </DashboardLayout>
  );
};

export default Dashboard;
