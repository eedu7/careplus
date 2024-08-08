import { Input } from "./ui/Input";
import OnBoardingImage, { EmailIcon, UserIcon, LogoFullIcon } from "../utils";
import { Button } from "./ui/Button";
import { useState } from "react";

export const RegisterForm = () => {
  // Initialize formData with empty fields for each input
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: ""
  });

  // Handle input change and update formData
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle input change and update formData
  const handleSubmit = e => {
    e.preventDefault();
    console.table(formData)
  }

  return (
    <main className="w-full h-screen lg:w-[80%] lg:ml-[10%] p-10 flex lg:shadow-lg lg:rounded-md items-center gap-4">
      <section className="w-[40%] h-full flex flex-col justify-between">
        <img className="w-48" src={LogoFullIcon} alt="" />
        <div>
          <div>
            <h1 className="text-4xl font-semibold">Hi, there ...</h1>
            <p className="font-serif">Get Started with Appointments.</p>
          </div>
          <form onSubmit={handleSubmit}>
            <Input
              name="fullName"
              type="text"
              label="Full Name"
              placeholder="John Doe"
              onChange={handleChange}
              srcIcon={UserIcon}
              required
            />
            <Input
              name="email"
              type="email"
              label="Email Address"
              placeholder="john.doe@example.com"
              srcIcon={ EmailIcon }
              onChange={ handleChange }
              required
            />
            <Input
              name="phoneNumber"
              type="tel"
              label="Phone Number"
              placeholder="+92 012 3456789"
              srcIcon={ EmailIcon }
              onChange={ handleChange }
              required
            />
            <Button type="submit" text="Get Started" />
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
