import { UserIcon, EmailIcon, PhoneIcon } from "../utils";

export const RegisterForm = () => {
  return (
    <>
      <form className="h-full w-full flex flex-col justify-center items-center">
        <div className="mb-3 relative right-[5rem]">
            <h1 className="text-3xl font-bold">Hi there, 👋</h1>
            <p className="my-2 text-gray-300 font-semibold">Get Started with Appointments.</p>
        </div>
        <div className="w-3/6 my-1">
          <label htmlFor="full-name">Full Name</label>
          <div className="w-full flex mt-2 gap-2 bg-gray-700 p-4 rounded-lg">
            <img src={UserIcon} alt="User Icon" />
            <input
              type="text"
              id="full-name"
              name="full-name"
              required
              placeholder="John Doe"
              className="w-full bg-transparent border-none outline-none"
            />
          </div>
        </div>

        <div className="w-3/6 my-1">
          <label htmlFor="email">Email</label>
          <div className="w-full flex mt-2 gap-2 bg-gray-700 p-4 rounded-lg">
            <img src={EmailIcon} alt="Email Icon" />
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="john.doe@example.com"
              className="w-full bg-transparent border-none outline-none"
            />
          </div>
        </div>

        <div className="w-3/6 my-1">
          <label htmlFor="phone-number">Phone Number</label>
          <div className="w-full flex mt-2 gap-2 bg-gray-700 p-4 rounded-lg group ">
            <img src={PhoneIcon} alt="User Icon" />
            <input
              type="tel"
              id="phone-number"
              name="phone-number"
              required
              placeholder="+92 312 3456789"
              className="group-hover:bg-red-500 w-full bg-transparent border-none outline-none"
            />
          </div>
        </div>
        <button type="submit" className="w-3/6 mt-4 bg-green-500 h-12 rounded-lg font-bold tracking-wider hover:bg-green-700">Get Started</button>
      </form>
    </>
  );
};
