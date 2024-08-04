import {
  EmailIcon,
  PhoneIcon,
  UserIcon,
  AddressIcon,
  WorkCardIcon,
  CalendarIcon,
} from "../utils";

export const PersonalInformationForm = () => {
  return (
    <div className="w-full">
      <h1 className="text-2xl font-bold">Personal Information</h1>
      <div className="w-full flex flex-col">
        <div className="w-full">
          <div className="w-full lg:w-full sm:w-full md:w-full my-1">
            <label htmlFor="full-name">Full Name</label>
            <div className="w-full flex mt-2 gap-2 bg-gray-700 p-4 rounded-lg focus-within:border focus-within:border-green-400">
              <img src={UserIcon} alt="User Icon" />
              <input
                type="text"
                id="full-name"
                name="full-name"
                placeholder="John Doe"
                className="w-full bg-transparent bg-none border-none outline-none"
              />
            </div>
          </div>
        </div>

        <div className="flex w-full gap-5">
          <div className="w-3/6 lg:w-3/6 my-1">
            <label htmlFor="email">Email Address</label>
            <div className="w-full flex mt-2 gap-2 bg-gray-700 p-4 rounded-lg focus-within:border focus-within:border-green-400">
              <img src={EmailIcon} alt="Email Icon" />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="john.doe@example.com"
                className="w-full bg-transparent bg-none border-none outline-none"
              />
            </div>
          </div>
          <div className="w-3/6 lg:w-3/6 my-1">
            <label htmlFor="phone-number">Phone Number</label>
            <div className="w-full flex mt-2 gap-2 bg-gray-700 p-4 rounded-lg focus-within:border focus-within:border-green-400">
              <img src={PhoneIcon} alt="Phone Icon" />
              <input
                type="tel"
                id="phone-number"
                name="phone-number"
                placeholder="+91 312 3456789"
                className="w-full bg-transparent bg-none border-none outline-none"
              />
            </div>
          </div>
        </div>

        <div className="flex w-full gap-5">
          <div className="w-3/6 lg:w-3/6 my-1">
            <label htmlFor="date-of-birth">Date of birth</label>
            <div className="w-full flex mt-2 gap-2 text-white bg-gray-700 p-4 rounded-lg focus-within:border focus-within:border-green-400">
              <img src={CalendarIcon} alt="Email Icon" />
              <input
                type="date"
                id="date-of-birth"
                name="date-of-birth"
                placeholder="01-01-2001"
                className="w-full bg-transparent bg-none border-none outline-none"
              />
            </div>
          </div>
          <div className="w-3/6 lg:w-3/6 my-1">
            <label htmlFor="gender">Gender</label>
            <div className="w-full flex justify-between mt-2">
              <label className="bg-gray-700 p-4 w-1/4 rounded-lg flex gap-3 hover:border hover:border-green-500 hover:h-14">
                <input type="radio" name="gender" value="male" checked />
                <span>Male</span>
              </label>

              <label className="bg-gray-700 p-4 w-1/4 rounded-lg flex gap-3 hover:border hover:border-green-500 hover:h-14">
                <input type="radio" name="gender" value="female" />
                Female
              </label>

              <label className="bg-gray-700 p-4 w-1/4 rounded-lg flex gap-3 hover:border hover:border-green-500 hover:h-14">
                <input type="radio" name="gender" value="other" />
                Other
              </label>
            </div>
          </div>
        </div>

        <div className="flex w-full gap-5">
          <div className="w-3/6 lg:w-3/6 my-1">
            <label htmlFor="Address">Address</label>
            <div className="w-full flex mt-2 gap-2 bg-gray-700 p-4 rounded-lg focus-within:border focus-within:border-green-400">
              <img src={AddressIcon} alt="Email Icon" />
              <input
                type="text"
                id="Address"
                name="Address"
                placeholder="ex: 14 street, New York, NY -5101"
                className="w-full bg-transparent bg-none border-none outline-none"
              />
            </div>
          </div>
          <div className="w-3/6 lg:w-3/6 my-1">
            <label htmlFor="occupation">Occupation</label>
            <div className="w-full flex mt-2 gap-2 bg-gray-700 p-4 rounded-lg focus-within:border focus-within:border-green-400">
              <img src={WorkCardIcon} alt="Occupation Icon" />
              <input
                type="text"
                id="occupation"
                name="occupation"
                placeholder="Software Engineer"
                className="w-full bg-transparent bg-none border-none outline-none"
              />
            </div>
          </div>
        </div>

        <div className="flex w-full gap-5">
          <div className="w-3/6 lg:w-3/6 my-1">
            <label htmlFor="emergency-contact-name">
              Emergency Contact Name
            </label>
            <div className="w-full flex mt-2 gap-2 bg-gray-700 p-4 rounded-lg focus-within:border focus-within:border-green-400">
              <img src={UserIcon} alt="Emergency Contact Name User Icon" />
              <input
                type="text"
                id="emergency-contact-name"
                name="emergency-contact-name"
                placeholder="john.doe@example.com"
                className="w-full bg-transparent bg-none border-none outline-none"
              />
            </div>
          </div>
          <div className="w-3/6 lg:w-3/6 my-1">
            <label htmlFor="emergency-phone-number">
              Emergency Phone Number
            </label>
            <div className="w-full flex mt-2 gap-2 bg-gray-700 p-4 rounded-lg focus-within:border focus-within:border-green-400">
              <img src={PhoneIcon} alt="Emergency Phone Number Icon" />
              <input
                type="tel"
                id="emergency-phone-number"
                name="emergency-phone-number"
                placeholder="+91 312 3456789"
                className="w-full bg-transparent bg-none border-none outline-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
