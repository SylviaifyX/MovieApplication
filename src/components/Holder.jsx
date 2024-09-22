
const Holder = ({children, className}) =>{
    return(
        <div className={`mx-auto max-w-screen-xl w-11/12  ${typeof className === "string"? className : ""}`}>
            {children}
        </div>
    )
}
export default Holder