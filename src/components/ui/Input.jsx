import PropTypes from "prop-types";

export const Input = ({ label, name, type, placeholder, srcIcon, onChange, required }) => {
  return (
    <div className="w-full flex flex-col gap-1 my-4">
      <label htmlFor={ name } className="text-lg">{ label }</label>
      <div className="flex w-full gap-2 pl-2 rounded-md border-2 items-center border-green-400">
        <img src={ srcIcon }/>
        <input type={ type } id={ name } onChange={onChange} name={ name } placeholder={ placeholder } className="w-full bg-transparent py-2 pl-2 border-none rounded-e outline-none" required={required}/>
      </div>
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  srcIcon: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func,
}