"use client";
import Card from "@/app/components/Card"
import CardDownline from "@/app/components/CardDownline"
// text-shadow: 0px 0px 16px rgba(255, 255, 255, 0.50), 0px 0px 16px rgba(255, 255, 255, 0.50);
const Dashboard = () => {
  return (
    <div className="mt-4 mx-3 lg:mx-5 xl:mx-6">
      <div className="font-bold text-lg text-gray-100">Dashboard</div>
      <div className="flex gap-3 mt-3">
        <Card title="My Coins" amount="100,000,000" />
        <Card title="My Income Share" amount="100,000,000" />
      </div>
      <CardDownline title="Gold Agent" registered={10} to="/gold-agent/register" />
    </div>
  )
}

export default Dashboard