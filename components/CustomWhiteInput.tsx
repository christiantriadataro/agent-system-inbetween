const CustomWhiteInput = ({ type = 'text', placeholder, onChange }) => {
  return (
     <input
         type={type}
         className="w-full text-[10px] leading-3 font-semibold h-9 bg-white text-[#0E0E0E] pl-4 border-2 rounded-md border-another"
         placeholder={placeholder}
         onChange={onChange}
     />
  )
}

export default CustomWhiteInput;