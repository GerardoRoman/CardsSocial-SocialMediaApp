
const Error = ({ message }) => {
    return (
        <div className="p-4 mt-3 bg-red-400 rounded">
            <p className="text-white">{message}</p>
        </div>
    )
}

export default Error