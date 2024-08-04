import { IdentificationForm } from "../components/IdentificationForm";
import { MedicalInformationForm } from "../components/MedicalInformation";
import { PersonalInformationForm } from "../components/PersonalInformationForm";
import { LogoFull, PatientInformationForm } from "../utils";

export const ProfileInformation = () => {
  return (
    <main className="h-full w-screen flex justify-center items-center bg-black text-white">
      <div className="flex justify-between w-10/12 h-[95%] mt-4">
        <div className="w-8/12 justify-between m-4">
          <div>
            <img src={LogoFull} alt="Logo" />
          </div>
          <div className="mt-10 mb-8">
            <h1 className="text-4xl font-bold">Welcome 👋</h1>
            <p className="text-gray-400 text-lg">
              Let us know more, about yourself
            </p>
          </div>
          <form className="flex flex-col justify-between w-full">
            <PersonalInformationForm />

            <MedicalInformationForm />

            <IdentificationForm />
            <div className="flex justify-center">
                <button className="bg-green-500 p-2 rounded-lg w-2/4">Submit</button>
            </div>
          </form>
        </div>

        <img
          src={PatientInformationForm}
          alt="Patient Inforamtnio Form Page"
          className="object-cover rounded-lg h-[40%] w-3/12"
        />
      </div>
    </main>
  );
};
