/* eslint-disable react/prop-types */
const Buttons = ({ variant, func }) => {
  const variants = {
    sidebar: "btn-sidebar",
    listSidebar: "btn-listSidebar",
    listSidebarDisable: "btn-listSidebar-disable",
    cyan: "btn-cyan",
    timeTable: "btn-TimeTable",
    BookedTimeTable: "btn-booked-TimeTable",
    CloseTimeTable: "btn-close-TimeTable",
    signupActive: "btn-signup-active",
    signup: "btn-signup",
  };
  return (
    <button className={variants[variant.style]} onClick={func}>
      {variant.img && <img src={variant.img} alt="" className="w-6 h-6" />}
      {variant.text}
    </button>
  );
};

export default Buttons;