import Image from "next/image";
import arrowDown from "../../public/down-arrow.svg";
import menu from "../../public/menu.svg"
const Header = ({ handleMenu , user}) => {

  
  return (
    <nav className="h-[51px] w-full black-linear-vertical rounded-b-md text-another flex items-center justify-between px-2 lg:px-5 xl:px-6 text-sm">
        <div className="flex gap-4 items-center">
           <button onClick={handleMenu}>
          <Image src={menu} alt="" />
        </button>
        <div className="rounded-2xl border-2 border-another px-6 py-[2px] font-medium">
          <span className="mr-1 font-semibold">₱</span>100,000,000
        </div>
        </div>
        <div className="flex gap-2 items-center font-semibold">
        <div>{user}</div>
          <div className="relative border-2 border-another rounded-full">
            <div className="main rounded-full w-[30px] h-[30px] border border-black"></div>
            <div className="rounded-full  absolute black-linear-vertical bottom-0 right-0">
              <Image className="" src={arrowDown} alt="" />
            </div>
          </div>
        </div>
      </nav>
  )
}

export default Header;