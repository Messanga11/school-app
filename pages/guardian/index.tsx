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
import Container from "../../components/Container";
import DashboardCard from "../../components/DashboardCard";
import DashboardLayout from "../../layouts/DashboardLayout";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../../store/types/index';
import DefaultImageComponent from "@/components/DefaultImageComponent";

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
    <DashboardLayout titleDesc="admin pannel" guardian>
      <Container>
          <div className="py-8">
              <h4 className="mb-4 font-semibold leading-6">Your student</h4>
              <div className="flex gap-8">
                <div className='w-32 h-32 rounded-full overflow-hidden'>
                  {userInfos?.image_url ? (
                    <img className='w-full h-full object-cover' src={userInfos?.image_url} alt="" />
                  )
                  : (
                    <DefaultImageComponent />
                  )}
                </div>
                <div>
                    <h2>{userInfos?.first_name} {userInfos?.last_name}</h2>
                    <p className="text-sm">{new Date(userInfos?.join_date || "").toUTCString()}</p>
                    <p className="text-sm">{userInfos?.phone_number}</p>
                </div>
                <div className="flex flex-col">
                    <h4 className="font-bold">Selected exams</h4>
                    {userInfos?.selected_exam?.map(exam => (
                        <p key={exam.value}>{exam.label}</p>
                    ))}
                </div>
              </div>
          </div>
        <div className="grid grid-cols-3 mx-auto w-full gap-4">
          <DashboardCard
            bonus="+0%"
            icon="bi:check-circle-fill"
            smallText="in hours"
            title="Active hours"
            value={0}
          />
          <DashboardCard
            bonus="+0%"
            icon="akar-icons:circle-x-fill"
            smallText="in hours"
            title="Inactive hours"
            value={0}
          />
          <DashboardCard
            bonus=""
            icon="akar-icons:paper"
            smallText="in subjects"
            title="Subjects"
            value={userInfos?.selected_exam?.length || 0}
          />
        </div>
        <div className="mt-8 gap-4 flex">
          <div
            className="rounded-xl shadow-md p-4 text-center bg-white"
            style={{ minWidth: 450 }}
          >
            <div>
              <div className="flex justify-between items-center">
                <h2>Total spent</h2>
                <Icon
                height={16} icon="akar-icons:more-vertical" />
              </div>
              <div className="my-8">
                <span className="text-5xl">0</span>
              </div>
              <div>
                <p>Total hours spent in learning</p>
              </div>
              <div className="mx-auto mt-4" style={{ width: 200, height: 200 }}>
              <CircularProgressbar value={0} text={`${0}%`} />
              </div>
            </div>
          </div>
          <div className="flex-grow h-96">
            <h2 className="my-4 ml-8">Statistics</h2>
            <ResponsiveContainer width="100%" height="100%">
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
      </Container>
    </DashboardLayout>
  );
};

export default Dashboard;
