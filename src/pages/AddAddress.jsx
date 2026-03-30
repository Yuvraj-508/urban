import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";

const InputField = ({ type, placeholder, name, handleChange, address }) => (
  <input
    type={type}
    name={name}
    placeholder={placeholder}
    value={address[name]}
    onChange={handleChange}
    className="w-full px-4 py-3 rounded-lg border border-gray-300
    focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
    outline-none transition text-gray-700 bg-white"
    required
  />
);

function AddAddress() {
  const { navigate } = useAppContext();
  const [isSaving, setIsSaving] = useState(false);

  const [address, setAddress] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setAddress((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

const onSubmitHandler = (e) => {
  e.preventDefault();

  try {

    localStorage.setItem("shippingAddress", JSON.stringify(address));

    toast.success("Address saved");

    navigate("/cart");

  } catch (error) {

    toast.error("Failed to save address");

  }
};

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-6">

      <div className="max-w-6xl mx-auto">

        {/* TITLE */}

        <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-10">
          Add Shipping
          <span className="text-indigo-600 ml-2">Address</span>
        </h1>

        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* FORM */}

          <div className="bg-white rounded-2xl shadow-xl p-8">

            <form
              className="space-y-5"
              onSubmit={onSubmitHandler}
            >

              <div className="grid grid-cols-2 gap-4">
                <InputField
                  name="firstName"
                  placeholder="First Name"
                  type="text"
                  handleChange={handleChange}
                  address={address}

                />

                <InputField
                  name="lastName"
                  placeholder="Last Name"
                  type="text"
                  handleChange={handleChange}
                  address={address}
                />
              </div>

              <InputField
                name="email"
                placeholder="Email Address(Optional)"
                type="email"
                handleChange={handleChange}
                address={address}
              />

              <InputField
                name="street"
                placeholder="Street Address"
                type="text"
                handleChange={handleChange}
                address={address}
              />

              <div className="grid grid-cols-2 gap-4">
                <InputField
                  name="city"
                  placeholder="City"
                  type="text"
                  handleChange={handleChange}
                  address={address}
                />

                <InputField
                  name="state"
                  placeholder="State"
                  type="text"
                  handleChange={handleChange}
                  address={address}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <InputField
                  name="zipCode"
                  placeholder="Zip Code(Optional)"
                  type="text"
                  handleChange={handleChange}
                  address={address}
                />

                <InputField
                  name="country"
                  placeholder="Country"
                  type="text"
                  handleChange={handleChange}
                  address={address}
                />
              </div>

              <InputField
                name="phone"
                placeholder="Phone Number"
                type="text"
                handleChange={handleChange}
                address={address}
              />

              {/* BUTTON */}

              <button
                disabled={isSaving}
                className="w-full py-3 mt-4 text-white font-medium rounded-lg
                bg-gradient-to-r from-blue-600 to-indigo-600
                hover:scale-[1.02] transition flex items-center justify-center gap-2"
              >
                {isSaving ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  "Save Address"
                )}
              </button>

            </form>

          </div>

          {/* IMAGE */}

          <div className="hidden md:block">

            <div className="bg-white rounded-2xl shadow-xl p-8 flex items-center justify-center">

              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=900"
                alt="delivery"
                className="rounded-xl max-h-[420px] object-cover"
              />

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default AddAddress;