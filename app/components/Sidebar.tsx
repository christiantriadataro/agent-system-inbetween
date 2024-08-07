import Link from "next/link";

const platURI = "/platinum-agent";
const goldURI = "/gold-agent";
const silverURI = "/silver-agent";

const platAgentMenu = {
  dashboard: `${platURI}/dashboard`,
  goldAgents: `${platURI}/gold-agents`,
  myReports: `${platURI}/my-reports`,
}

const goldAgentMenu = {
  dashboard: `${goldURI}/dashboard`,
  goldAgents: `${goldURI}/silver-agents`,
  myReports: `${goldURI}/my-reports`,
}

const silverAgentMenu = {
  dashboard: `${silverURI}/dashboard`,
  goldAgents: `${silverURI}/players`,
  myReports: `${silverURI}/my-reports`,
}

const Sidebar = ({ isMenuOpen }) => {
  return (
    <div className={`${isMenuOpen ? "-translate-x-full" : ""} transition duration-300 absolute  w-1/2 min-w-[250px] max-w-[300px] h-full  pt-3 text-sm black-linear-vertical`}>
            {/* <div className="text-white text-xs ">Menu</div> */}
            <div className="flex flex-col gap-2 mx-2">
              <Link href="/platinum-agent/dashboard" className="rounded-lg text-another border-2 border-another  p-3 h-[44px]">Dashboard</Link>
            <Link href="/platinum-agent/gold-agents" className="rounded-lg text-another border-2 border-another  p-3 h-[44px]">Gold Agents</Link>
            <Link href="/platinum-agent/my-reports" className="rounded-lg text-another border-2 border-another  p-3 h-[44px]">My Reports</Link>
            </div>  
      </div>
  )
}

export default Sidebar;