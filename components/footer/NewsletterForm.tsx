"use client";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = async () => {
    // try{
    //   const res = await createNewsLetterJustEmail({email});
    //   console.log(res?.error?.data?.email[0]);
    // if(res.data){
    //   // alert("subcription added! thank you");
    //   toast.success('Your subscription confirms your seat on a journey designed for Muslim travelers.', {
    //     position: "top-center",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "dark",
    //     });
    //   setEmail("");
    // }
    // if(res?.error){
    //   // alert("subcription added! thank you");
    //   toast.error(res?.error?.data?.email[0], {
    //     position: "top-center",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "dark",
    //     });
    // }
    // }catch(err){
    //   toast.error('Something went wrong!', {
    //     position: "top-center",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "dark",
    //     });
    // }
  };
  return (
    <div className="col-xl-3 col-lg-4 col-sm-6">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      {/* <h5 className="text-16 fw-500 mb-30">Mobile</h5> */}
      <h5 className="text-16 fw-500 mb-30">Sign up to our newsletter</h5>
      {/* <AppButton /> */}
      <div className="single-field w-100 d-flex flex-column y-gap-20">
        <div>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
            name="email"
            className="border border-secondary h-50"
            type="email"
            placeholder="Your Email"
          />
        </div>
        {/* End email input */}

        <div>
          <button
            disabled={!email}
            onClick={handleSubmit}
            className="button -md h-50 bg-blue-1 w-100 text-white"
          >
            Subscribe
          </button>
        </div>
        {/* End subscribe btn */}
      </div>
    </div>
  );
};

export default NewsletterForm;
