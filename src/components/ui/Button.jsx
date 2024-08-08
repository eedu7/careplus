import PropTypes from "prop-types";
export const Button = ({ text }) => {
  return (
    <button className="w-full p-2 my-2 rounded-md font-bold text-md text-white bg-green-500 hover:bg-green-600">{ text }</button>
  )
}

Button.propTypes = {
    text: PropTypes.string
}