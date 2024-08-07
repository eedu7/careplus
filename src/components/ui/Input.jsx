import PropTypes from "prop-types";

export const Input = ({ label, name, type, placeholder, srcIcon }) => {
  return (
    <div className="w-full flex flex-col gap-1 my-4">
      <label htmlFor={ name } className="text-lg">{ label }</label>
      <div className="flex w-full gap-2 px-2 rounded-md border items-center border-green-400">
        <img src={ srcIcon }/>
        <input type={ type } id={ name } name={ name } placeholder={ placeholder } className="w-full py-2 border-none outline-none" />
      </div>
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  srcIcon: PropTypes.string
}