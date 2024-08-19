import Link from "next/link";
import {Admin} from "mongodb";
import {useReducer, useRef} from "react";

const platURI = "/platinum-agent";
const goldURI = "/gold-agent";
const silverURI = "/silver-agent";
const adminURI = "/admin"

const AdminMenu = [
    {name: "Dashboard", URI: `${adminURI}/dashboard`},
    {name: "Users", URI: `${adminURI}/users`},
    {name: "Reports", URI: `${adminURI}/my-reports`},
]

const platAgentMenu = [
    {name: "Dashboard", URI: `${platURI}/dashboard`},
    {name: "goldAgents", URI: `${platURI}/gold-agents`},
    {name: "myReports", URI: `${platURI}/my-reports`},
]

const goldAgentMenu = [
    {name: "Dashboard", URI: `${goldURI}/dashboard`},
    {name: "goldAgents", URI: `${goldURI}/silver-agents`},
    {name: "myReports", URI: `${goldURI}/my-reports`},
]

const silverAgentMenu = [
    {name: "Dashboard", URI: `${silverURI}/dashboard`},
    {name: "goldAgents", URI: `${silverURI}/players`},
    {name: "myReports", URI: `${silverURI}/my-reports`},
]

interface SidebarProps  {
    isMenuOpen: Boolean,
    variant: string
}




const Sidebar = ({isMenuOpen, variant="admin"}: SidebarProps) => {
    const menu: ({ name: string; URI: string })[] | undefined = variant === "admin" ? AdminMenu : variant === 'plat' ? platAgentMenu : variant === 'gold' ? goldAgentMenu : variant === 'silver' ? silverAgentMenu : undefined
    return (
        <div
            className={`${!isMenuOpen ? "-translate-x-full" : ""} transition duration-300  text-white w-1/2 min-w-[250px] max-w-[300px] h-full  pt-3 text-sm black-linear-vertical`}>
            <div className="flex flex-col gap-2 mx-2">
                {menu!.map((item, index) => (
                    <Link href={item.URI} key={index}
                          className="rounded-lg text-another border-2 border-another  p-3 h-[44px]">{item.name}</Link>
                ))}
            </div>
        </div>
    )
}

export default Sidebar;

{/*    <Link href="/platinum-agent/gold-agents"*/
}
{/*          className="rounded-lg text-another border-2 border-another  p-3 h-[44px]">Gold Agents</Link>*/
}
{/*    <Link href="/platinum-agent/my-reports"*/
}
{/*          className="rounded-lg text-another border-2 border-another  p-3 h-[44px]">My Reports</Link>*/
}
{/*</div>*/
}