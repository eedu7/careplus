
import { UploadIcon } from "../utils"
export const IdentificationForm = () => {
    return (
        <div className="w-full my-10">
      <h1 className="text-2xl font-bold">Identification and Verification</h1>
      {/* // TODO: Change this into a drop down, use select and option  */}
      <div className="w-full flex flex-col">

        <div className="w-full">
          <div className="w-full lg:w-full sm:w-full md:w-full my-1">
            <label htmlFor="identification-type">
              Identification Type
            </label>
            <div className="w-full flex mt-2 gap-2 bg-gray-700 p-4 rounded-lg focus-within:border focus-within:border-green-400">
              <input
                type="text"
                id="identification-type"
                name="identification-type"
                placeholder="Birth Certificate"
                className="w-full bg-transparent bg-none border-none outline-none"
              />
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="w-full lg:w-full sm:w-full md:w-full my-1">
            <label htmlFor="identification-number">
              Identification Number
            </label>
            <div className="w-full flex mt-2 gap-2 bg-gray-700 p-4 rounded-lg focus-within:border focus-within:border-green-400">
              <input
                type="text"
                id="identification-number"
                name="identification-number"
                placeholder="ex 1234567"
                className="w-full bg-transparent bg-none border-none outline-none"
              />
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col justify-center items-center border-2 border-gray-700 border-dashed  mt-10 p-8 ">
                <img src={UploadIcon} alt="Upload Icon"/>
                <p><span className="text-green-400">Click to upload</span> or drag and drop</p>
                <p>SVG, PNG, JPG or GIF (max 800x400px)</p>
        </div>

      </div>
    </div>
    )
}