const Holder = ({ children, className }) => {
  return (
    <div className={`mx-auto max-w-screen-xl w-11/12  ${typeof className === "string"? className : ""}`}>
        {children}
    </div>
    // <div
    //   className={`w-1/2 h-8 relative md:mx-auto md:max-w-screen-xl md:w-11/12 ${
    //     typeof className === "string" ? className : ""
    //   } md:min-w-72 md:block`}
    // >
    //   {children}
    // </div>
  );
};
export default Holder;
