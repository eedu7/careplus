import { Input } from "./ui/Input";
import OnBoardingImage, { EmailIcon, UserIcon, LogoFullIcon } from "../utils";
import { Button } from "./ui/Button";

export const RegisterForm = () => {
  return (
    <main className="w-full h-screen lg:w-[80%] lg: lg:ml-[10%] p-10 flex lg:shadow-lg lg:rounded-md items-center gap-4">
      <section className="w-[40%] h-full flex flex-col justify-between">
        <img className="w-48" src={LogoFullIcon} alt="" />
        <div>
          <div>
            <h1 className="text-4xl font-semibold">Hi, there ...</h1>
            <p className="font-serif">Get Started with Appointments.</p>
          </div>
          <form action="">
            <Input
              name="full-name"
              type="text"
              label="Full Name"
              placeholder="John Doe"
              srcIcon={UserIcon}
              required
            />
            <Input
              name="email"
              type="email"
              label="Email Address"
              placeholder="john.doe@example.com"
              srcIcon={EmailIcon}
              required
            />
            <Input
              name="phone-number"
              type="tel"
              label="Phone Number"
              placeholder="+92 012 3456789"
              srcIcon={EmailIcon}
              required
            />
            <Button text="Get Started" />
          </form>
        </div>
        <p>@2024 CarePlus</p>
      </section>
      <img
        src={OnBoardingImage}
        alt="On Boarding Image"
        className="w-[52%] h-full object-cover rounded-md"
      />
    </main>
  );
};
