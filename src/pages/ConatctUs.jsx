import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { toast } from "react-hot-toast";

export default function ContactUs() {
  const [loading, setLoading] = useState(false);

 const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  const formData = new FormData(e.target);
  formData.append("access_key", "9b609585-2571-4097-9603-87e7295cc943");
   formData.append("subject", "New Contact Message - UrbanKicks");
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: json,
  });

  const result = await res.json();

  if (result.success) {
    toast.success("Message sent successfully!");
    e.target.reset();
  } else {
    toast.error("Something went wrong!");
  }

  setLoading(false);
};

  return (
    <div className="min-h-[85vh] bg-gradient-to-b from-gray-50 to-white py-20 px-4">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <div>

          <span className="bg-indigo-100 text-indigo-600 px-4 py-1 rounded-full text-sm font-medium">
            Contact Us
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mt-4 text-gray-800 leading-tight">
            Let's talk about <br /> your sneakers
          </h1>

          <p className="text-gray-500 mt-4 max-w-md">
            Have questions about our UA+ sneakers, delivery or orders?
            Our team is always ready to help you.
          </p>

          {/* Contact Cards */}
          <div className="mt-10 space-y-6">

            <div className="flex items-center gap-4 p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition">
              <Phone className="text-indigo-600" />
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-gray-500 text-sm">+91 98765 43210</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition">
              <Mail className="text-indigo-600" />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-gray-500 text-sm">support@urbankicks.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition">
              <MapPin className="text-indigo-600" />
              <div>
                <p className="font-medium">Location</p>
                <p className="text-gray-500 text-sm">Punjab, India</p>
              </div>
            </div>

          </div>
        </div>


        {/* RIGHT SIDE FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-10 rounded-2xl shadow-xl border"
        >

          <h2 className="text-2xl font-semibold text-gray-800">
            Send us a message
          </h2>

          <p className="text-gray-500 text-sm mt-1">
            We'll respond within 24 hours
          </p>

        

          {/* Name */}
          <div className="mt-6">
            <input
              type="text"
              name="name"
              required
              placeholder="Full Name"
              className="w-full h-12 px-4 border rounded-full outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>

          {/* Phone */}
          <div className="mt-4">
            <input
              type="tel"
              name="phone"
              required
              placeholder="Phone Number"
              className="w-full h-12 px-4 border rounded-full outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>

          {/* Message */}
          <div className="mt-4">
            <textarea
              rows="4"
              name="message"
              required
              placeholder="Write your message..."
              className="w-full p-4 border rounded-xl outline-none resize-none focus:ring-2 focus:ring-indigo-500 transition"
            ></textarea>
          </div>

          {/* Submit Button */}
         <button
  type="submit"
  disabled={loading}
  className="mt-6 w-full h-12 rounded-full text-white font-medium
  bg-gradient-to-r from-blue-600 to-indigo-600
  hover:from-blue-700 hover:to-indigo-700 transition shadow-md
  flex items-center justify-center gap-2 disabled:opacity-70"
>
  {loading ? (
    <>
      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
      Sending...
    </>
  ) : (
    "Send Message →"
  )}
</button>

        </form>

      </div>

    </div>
  );
}