export const MedicalInformationForm = () => {

  return (
    <div className="w-full my-10">
      <h1 className="text-2xl font-bold">Medical Information</h1>
      {/* // TODO: Change this into a drop down, use select and option  */}
      <div className="w-full flex flex-col">

        <div className="w-full">
          <div className="w-full lg:w-full sm:w-full md:w-full my-1">
            <label htmlFor="primary-care-physician">
              Primary care physician
            </label>
            <div className="w-full flex mt-2 gap-2 bg-gray-700 p-4 rounded-lg focus-within:border focus-within:border-green-400">
              <input
                type="text"
                id="primary-care-physician"
                name="primary-care-physician"
                placeholder="John Doe"
                className="w-full bg-transparent bg-none border-none outline-none"
              />
            </div>
          </div>
        </div>

        <div className="flex w-full gap-5">
          <div className="w-3/6 lg:w-3/6 my-1">
            <label htmlFor="insurance-provider">Insurance Provider</label>
            <div className="w-full flex mt-2 gap-2 bg-gray-700 p-4 rounded-lg focus-within:border focus-within:border-green-400">
              <input
                type="text"
                id="insurance-provider"
                name="insurance-provider"
                placeholder="ex: BlueCross"
                className="w-full bg-transparent bg-none border-none outline-none"
              />
            </div>
          </div>
          <div className="w-3/6 lg:w-3/6 my-1">
            <label htmlFor="insurance-policy-number">
              Insurance policy number
            </label>
            <div className="w-full flex mt-2 gap-2 bg-gray-700 p-4 rounded-lg focus-within:border focus-within:border-green-400">
              <input
                type="text"
                id="insurance-policy-number"
                name="insurance-policy-number"
                placeholder="ex: ABC1234567"
                className="w-full bg-transparent bg-none border-none outline-none"
              />
            </div>
          </div>
        </div>

        <div className="flex w-full gap-5">
          <div className="w-3/6 lg:w-3/6 my-1">
            <label>Allergies (if any)</label>
            <div className="w-full flex mt-2 gap-2 bg-gray-700 p-4 rounded-lg focus-within:border focus-within:border-green-400">
              <textarea
                className="w-full resize-none bg-transparent bg-none border-none outline-none"
                placeholder="ex: Peanuts, Penicillin, Pollen"
                rows={3} cols={10}
              />
            </div>
          </div>
          <div className="w-3/6 lg:w-3/6 my-1">
            <label>Current medications</label>
            <div className="w-full flex mt-2 gap-2 bg-gray-700 p-4 rounded-lg focus-within:border focus-within:border-green-400">
              <textarea
                className="w-full resize-none bg-transparent bg-none border-none outline-none"
                placeholder="ex: lbuprofen 200mg, Levothyroxine 50mcg"
                rows={3}
              />
            </div>
          </div>
        </div>

        <div className="flex w-full gap-5">
          <div className="w-3/6 lg:w-3/6 my-1">
            <label>Family medical history (if relevant)</label>
            <div className="w-full flex mt-2 gap-2 bg-gray-700 p-4 rounded-lg focus-within:border focus-within:border-green-400">
              <textarea
                className="w-full resize-none bg-transparent bg-none border-none outline-none"
                placeholder="ex: Mother had breast cancer"
                rows={3}
              />
            </div>
          </div>
          <div className="w-3/6 lg:w-3/6 my-1">
            <label>Past medical history</label>
            <div className="w-full flex mt-2 gap-2 bg-gray-700 p-4 rounded-lg focus-within:border focus-within:border-green-400">
              <textarea
                className="w-full resize-none bg-transparent bg-none border-none outline-none"
                placeholder="ex: Asthma diagnosis in childhood"
                rows={3}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
