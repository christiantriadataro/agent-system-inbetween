const CustomInput = ({ type, placeholder, autocomplete }) => {
  return (
     <input type={type} autoComplete={autocomplete} className="w-full text-sm h-10 bg-gradient-to-t from-[#24242E] to-[#131217] text-white pl-4 border-2 rounded-xl border-another" placeholder={placeholder} />
  )
}

export default CustomInput;