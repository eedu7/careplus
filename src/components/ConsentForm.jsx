export const ConsentForm = () => {
  return (
    <div className="w-full my-10">
      <h1 className="text-2xl font-bold">Consent and Privacy</h1>
      <div className="w-full flex flex-col">
        <div className="w-full">

          <div className="w-full lg:w-full sm:w-full md:w-full my-1">
            <label>
              <input
                type="checkbox"
                id="consent-health-condition"
                name="consent-health-condition"
                placeholder="Birth Certificate"
                className="bg-transparent bg-none border-none outline-none"
                checked
              />
              <p className="inline mx-2">I consent to receive treatment for my health condition.</p>
            </label>
          </div>

          <div className="w-full lg:w-full sm:w-full md:w-full my-1">
            <label>
              <input
                type="checkbox"
                id="consent-health-condition"
                name="consent-health-condition"
                placeholder="Birth Certificate"
                className="bg-transparent bg-none border-none outline-none"
              />
              <p className="inline mx-2">I consent to the use and disclosure of my health information for treatment purposes.</p>
            </label>
          </div>

          <div className="w-full lg:w-full sm:w-full md:w-full my-1">
            <label>
              <input
                type="checkbox"
                id="consent-health-condition"
                name="consent-health-condition"
                placeholder="Birth Certificate"
                className="bg-transparent bg-none border-none outline-none"
                checked
              />
              <p className="inline mx-2">I acknowledge that I have reviewed and agree to the privacy policy.</p>
            </label>
          </div>

        </div>
      </div>
    </div>
  );
};
