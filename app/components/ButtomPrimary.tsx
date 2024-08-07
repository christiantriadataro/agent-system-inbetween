

const ButtomPrimary = ({ text, variant = "gold" }) => {
    return (
        <button className={`btn-primary-${variant} border-2 border-black px-9 py-2 rounded-md text-xs font-semibold`}>
            {text}
        </button>
    )
}

export default ButtomPrimary