import { RegisterForm } from "../components/RegisterForm";
import { LogoFull, OnBoardImg } from "../utils";

export const Register = () => {
  return (
    <main className="h-screen w-screen flex justify-center items-center bg-black text-white">
      <div className="flex w-10/12 h-[95%]">
        {/* Page First Half */}
        <div className="w-3/6 flex flex-col justify-between m-4">
          <div>
            <img src={LogoFull} alt="Logo" />
          </div>
          <RegisterForm />

          <div>
            <p>©️2024 CarePlus</p>
          </div>
        </div>

        {/* Page Second Half */}
        <img
          src={OnBoardImg}
          alt="Logo"
          className="w-3/6 sm:w-4/6 md:w-4/6 lg:w-3/6 object-cover rounded-lg"
        />
      </div>
    </main>
  );
};
