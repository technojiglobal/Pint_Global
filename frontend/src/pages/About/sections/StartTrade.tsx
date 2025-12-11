import React, { useState } from "react";

const StartTrade: React.FC = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  // Handle changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Submit data to Google Sheets
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const scriptURL = "https://script.google.com/macros/s/AKfycbzdDhHyu9fUpVE-5MtFu9BxZtRyks4yUqkt7ZntVMVG1GeUxApLxtU6f7-lF-Y9fXB5/exec"; // <-- Replace this

    try {
      await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      alert("Your data is Submitted Successfully!");

      // Reset form
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });

    } catch (error) {
      console.error("Error!", error);
      alert("Something went wrong!");
    }
  };

  return (
    <section className="max-w-6xl mx-auto px-6 md:px-15 pb-20">
      <div className="bg-[#0F6EB3] rounded-2xl p-6 md:p-10 text-white shadow-lg">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

          {/* Left */}
          <div>
            <h2 className="text-2xl md:text-3xl text-white font-bold">
              Start Your Trade Journey<br />With Us
            </h2>
            <p className="mt-3 text-white text-sm">
              We're ready to support your sourcing and export requirements.
            </p>

            <div className="mt-6 ml-20 w-full max-w-xs overflow-hidden rounded-lg border-4 border-white/20">
              <img
                src="/images/start-trade.png"
                className="object-cover w-full h-full"
                alt="Start Trade"
              />
            </div>
          </div>

          {/* Right */}
          <div>
            <div className="bg-white text-black rounded-lg p-6 shadow-lg">
              <h3 className="text-xl md:text-3xl font-bold text-[#0F6EB3]">
                Join Hands to Grow Together
              </h3>

              <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <input
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    className="border border-[#0F6EB347] bg-[#0F6EB312] outline-none rounded-md px-3 py-2 text-sm"
                    placeholder="First Name"
                    required
                  />
                  <input
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    className="border border-[#0F6EB347] bg-[#0F6EB312] outline-none rounded-md px-3 py-2 text-sm"
                    placeholder="Last Name"
                  />
                </div>

                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="border border-[#0F6EB347] bg-[#0F6EB312] outline-none rounded-md px-3 py-2 w-full text-sm"
                  placeholder="Your Email"
                  required
                />

                <input
  name="phone"
  value={form.phone}
  onChange={(e) => {
    // Allow only numbers and restrict to 10 digits
    const value = e.target.value.replace(/\D/g, "").slice(0, 10);
    setForm({ ...form, phone: value });
  }}
  className="border border-[#0F6EB347] bg-[#0F6EB312] outline-none rounded-md px-3 py-2 w-full text-sm"
  placeholder="Phone Number"
  required
/>


                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className="border border-[#0F6EB347] bg-[#0F6EB312] outline-none rounded-md px-3 py-2 w-full text-sm h-24 resize-none"
                  placeholder="Message"
                />

                <button
                  type="submit"
                  className="w-full bg-[#0F6EB3] text-white py-2 rounded-md font-semibold hover:bg-sky-800"
                >
                  Get A Quote Now
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StartTrade;
