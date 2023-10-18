/* eslint-disable react/prop-types */
const variants = {
  servicesForm:
    "flex items-center w-60 h-11 px-3 rounded-full border border-indigo-300 hover:shadow-md",
};

const SelectOption = ({ variant }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">
        {variant?.label}
      </label>
      <select className={variants[variant.style]} onChange={variant?.onChange}>
        {variant?.options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectOption;