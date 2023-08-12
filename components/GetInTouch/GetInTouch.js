"use client";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const GetInTouch = () => {
  const initialValues = {
    full_name: "",
    email: "",
    business_activities: "",
    questions: "",
  };

  const [formData, setFormData] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const form = useRef();

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormErrors(validate(formData));
    setIsSubmit(true);
  };

  const sendMail = async () => {
    const apiUrl =
      "https://metricks-backend-service.herokuapp.com/api/v2/gratis/email";

    await fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "content-type": "application/json" },
    })
      .then((result) => {
        if (result.status == 200) {
          router.push("/success?suc=1axaW68594wxfGfrP_8sudjejhb8934hsdnsm");
        } else {
          setIsSubmit(false);
          console.log(result.status);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //=======================================
  // const sendMail = () => {
  //   emailjs
  //     .sendForm(
  //       "gmail-xx",
  //       "adproof_wh7o118",
  //       form.current,
  //       "rNHglKbO-KqdKqCRXb"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //         router.push("/success?suc=1axaW68594wxfGfrP_8sudjejhb8934hsdnsm");
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // };
  //=======================================
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      sendMail();
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.full_name) errors.full_name = "Full name is required !";
    if (!values.business_activities)
      errors.business_activities = "Planned business activities is required !";
    if (!values.questions)
      errors.questions = "Additional information is required !";
    if (!values.email) errors.email = "E-mail is required !";
    else if (!regex.test(values.email))
      errors.email = "This is not a valid e-mail !";

    return errors;
  };

  return (
    <div className="pt-8 text-white-500" id="GetInTouch">
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="pl-4 text-green-400 text-sm font-semibold">
          Request Submitted Successfully !
        </div>
      ) : (
        <div className="pl-4 text-orange-500 text-sm font-semibold">
          {/* Mail service failure ! */}
        </div>
      )}
      <form className="" ref={form} onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-3">
          <label htmlFor="full_name" className="text-sm">
            Name *
          </label>
          <input
            className="rounded-full border border-gray-700 bg-black-500 text-sm px-4 py-3 "
            type="text"
            placeholder="Your name"
            name="full_name"
            value={formData.full_name}
            onChange={handleChange}
          />
          <p className="text-red-600 text-xs text-end">
            {formErrors.full_name}
          </p>
        </div>

        <div className="flex flex-col space-y-3">
          <label htmlFor="email" className="text-sm">
            Email *
          </label>
          <input
            className="rounded-full border border-gray-700 bg-black-500 text-sm px-4 py-3 "
            type="text"
            placeholder="Your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <p className="text-red-600 text-xs text-end">{formErrors.email}</p>
        </div>

        <div className="flex flex-col space-y-3">
          <label htmlFor="business_activities" className="text-sm">
            Planned Business Activities *
          </label>
          <input
            className="rounded-full border border-gray-700 bg-black-500 text-sm px-4 py-3 "
            type="text"
            placeholder="Compose your message..."
            name="business_activities"
            value={formData.business_activities}
            onChange={handleChange}
          />
          <p className="text-red-600 text-xs text-end">
            {formErrors.business_activities}
          </p>
        </div>

        <div className="flex flex-col space-y-3">
          <label htmlFor="website" className="text-sm">
            Additional Information or Questions *
          </label>
          <input
            className="rounded-full border border-gray-700 bg-black-500 text-sm px-4 py-3 "
            type="text"
            placeholder="Compose your message..."
            name="questions"
            value={formData.questions}
            onChange={handleChange}
          />
          <p className="text-red-600 text-xs text-end">
            {formErrors.questions}
          </p>
        </div>

        <div className="pt-0 p-0">
          <button
            className={`w-full text-sm flex justify-end text-white bg-[#FF991F] px-4 sm:py-2 py-3 transition ease-in duration-200 rounded-2xl focus:outline-none`}
          >
            <p className="w-full text-xs flex justify-start py-1">
              Contact Our Consultants
            </p>
            <p className="justify-end py-1">
              <FaArrowRight />
            </p>
          </button>
        </div>
      </form>
    </div>
  );
};

export default GetInTouch;
