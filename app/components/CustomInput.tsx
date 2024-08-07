const CustomInput = ({ type, placeholder }) => {
  return (
     <input type={type} className="w-full text-sm h-10 bg-gradient-to-t from-[#24242E] text-another to-[#131217] pl-4 border-2 rounded-xl border-another" placeholder={placeholder} />
  )
}

export default CustomInput;