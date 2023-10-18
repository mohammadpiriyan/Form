/* eslint-disable react/prop-types */

const variants = {
  docProf1:
    "flex items-center w-72 h-11 px-4 py-3 rounded-full border border-indigo-300 hover:shadow-md",
  docProf2:
    "flex items-center w-full h-11 px-4 py-3 rounded-full border border-indigo-300 hover:shadow-md",
};
const structure = {
  docProfStr1: "flex gap-7 items-center w-5/12",
  docProfStr2: "flex gap-4 justify-between items-center w-full",
};

const TextInputs = ({ variant }) => {
  return (
    <div className={structure[variant?.structure]}>
      <label htmlFor="">{variant?.label}</label>
      <input
        type="text"
        name={variant?.name}
        className={variants[variant?.style]}
        placeholder={variant?.placeholder}
        defaultValue={variant?.defaultValue}
        onChange={variant?.onChange}
      />
    </div>
  );
};

export default TextInputs;