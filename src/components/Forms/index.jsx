/* eslint-disable react/prop-types */
import { SelectOption } from "..";

const styleElementVariants = {
  textInput1:
    "flex items-center w-44 h-11 px-4 py-3 rounded-full border border-indigo-300 hover:shadow-md",
  textInput2:
    "flex items-center w-60 h-11 px-4 py-3 rounded-full border border-indigo-300 hover:shadow-md",
  textInputServices:
    "flex items-center w-72 h-11 px-4 rounded-lg border border-indigo-300 ",
  textInputASetting:
    "flex items-center w-40 text-xs h-11 px-4 py-3 rounded-full border border-indigo-300 hover:shadow-md",
  textInputLogin:
    "flex items-center w-80 h-11 px-4 py-3 rounded-full border border-indigo-300 hover:shadow-md",
  textInputSignUp:
    "flex items-center w-122 h-11 px-4 py-3 rounded-full border border-indigo-300 hover:shadow-md",
  textInputSignUpHalf:
    "flex items-center w-60 h-11 px-4 py-3 rounded-full border border-indigo-300 hover:shadow-md",
  loginLink: "flex w-80 justify-end items-center text-blue-900 cursor-pointer",
  signUpLink:
    "flex w-full justify-end items-center text-blue-900 cursor-pointer",
  submitBtn1:
    "flex justify-center items-center w-20 h-11 px-4 py-3 rounded-full bg-cyan-600 text-white hover:shadow-md",
  submitBtn2:
    "flex justify-center items-center w-40 h-11 px-4 py-3 rounded-full bg-cyan-600 text-white hover:shadow-md",
  loginSubmitBtn:
    "flex justify-center items-center w-80 h-11 px-4 py-3 mt-3 rounded-full bg-cyan-600 text-white hover:shadow-md",
  SignUpSubmitBtn:
    "flex justify-center items-center w-96 h-11 px-4 py-3 mt-3 rounded-full bg-cyan-600 text-white hover:shadow-md",
  header: "flex flex-col gap-4 w-full items-center px-4 py-3 font-semibold",
};

const formVariants = {
  type1: "flex items-center gap-4 py-3",
  type2:
    "flex flex-col items-center gap-4 py-24 px-24 bg-white rounded-2xl shadow-md",
  settingAdmin:
    "flex flex-col items-center gap-4 py-24 px-10 bg-white rounded-2xl shadow-md",
  signUp: "flex flex-col items-center gap-2",
  signUp2: "flex flex-wrap justify-center items-center gap-2",
};
const parentVariants = {
  textInputLogin:
    "flex w-full flex-col justify-center items-center gap-1 font-semibold",
  textInputSignUpHalfL:
    "flex w-5/12 justify-end items-center gap-1 font-semibold ",
  textInputSignUpHalfR:
    "flex w-5/12 justify-start items-center gap-1 font-semibold ",
  type2:
    "flex flex-col items-center gap-4 py-24 px-24 bg-white rounded-2xl shadow-md",
};

const imageVariants = {
  type1: "w-12 h-12",
};

const Forms = ({ formElements, formStyle, onSubmit }) => {
  const renderFormElement = (element) => {
    switch (element.type) {
      case "formHeader":
        return (
          <div className={styleElementVariants[element.style]}>
            {element.img && (
              <img
                src={element.img}
                className={imageVariants[element.imgStyle]}
              />
            )}
            <h2>{element.text}</h2>
          </div>
        );
      case "textInput":
        return (
          <div key={element.id} className={parentVariants[element.parentStyle]}>
            {element.label && <label htmlFor="">{element.label}</label>}
            <input
              type="text"
              name={element.name}
              className={styleElementVariants[element.style]}
              value={element.value}
              placeholder={element.placeholder}
            />
          </div>
        );
      case "selectOption":
        return <SelectOption variant={element} />;
      case "link":
        return (
          <a
            key={element.id}
            className={styleElementVariants[element.style]}
            onClick={""}
          >
            {element.label}
          </a>
        );
      case "submitBtn":
        return (
          <button
            key={element.id}
            type="submit"
            className={styleElementVariants[element.style]}
            value={element.value}
          >
            {element.label}
          </button>
        );
    }
  };

  return (
    <form className={formVariants[formStyle]} onSubmit={onSubmit}>
      {formElements.map(renderFormElement)}
    </form>
  );
};

export default Forms;
