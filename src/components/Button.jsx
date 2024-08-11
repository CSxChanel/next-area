import { useRouter } from "next/router";

function Button ({ children, onClick }) {
    if (!children) {
        return null;
    }
    return (
        <div className="w-full mx-auto text-center my-12">
        <button
            className="py-2 px-5 sm:px-10 cursor-pointer shadow-md font-semibold border border-rose-500 hover:border-rose-700 rounded-full text-rose-500 hover:text-rose-700"
            onClick={onClick}
            >
            {children}
        </button>
        </div>
    )
}

export default Button