import { Input } from "./ui/Input";
import OnBoardingImage, {EmailIcon, UserIcon } from "../utils";

export const RegisterForm = () => {
  return (
    <main className="w-full h-auto mt-10 p-10 flex items-center gap-4 border border-red-500">
      <section className="w-[50%] flex flex-col border">
        <div>
          <h1>Hi, there ...</h1>
          <p>Get Started with Appointments.</p>
        </div>
        <form action="">
            <Input name="full-name" type="text" label="Full Name" placeholder="John Doe" srcIcon={ UserIcon } />
            <Input name="email" type="email" label="Email Address" placeholder="john.doe@example.com" srcIcon={ EmailIcon } />
            <Input name="phone-number" type="tel" label="Phone Number" placeholder="+92 012 3456789" srcIcon={ EmailIcon } />
        </form>
        <p>@2024 CarePlus</p>
      </section>
      <img src={OnBoardingImage} alt="On Boarding Image" className="w-[50%]"/>
    </main>
  );
};
