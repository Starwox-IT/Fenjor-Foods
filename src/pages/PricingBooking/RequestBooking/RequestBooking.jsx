import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { InputField, SelectField, TextareaField } from '../../../components/UI/FormFields';
import RequestBookingImg from '../../../assets/RequestBooking.png';
import RequestBookingMobileImg from '../../../assets/RequestBookingMobile.png';

const RequestBooking = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const packageOptions = [
        "Standard Package",
        "Professional Package",
        "Elite Package",
        "Custom Hours"
    ];

    const onSubmit = (data) => {
        setIsSubmitting(true);
        // Simulate an API call
        setTimeout(() => {
            console.log("Form submitted: ", data);
            setIsSubmitting(false);
            setIsSuccess(true);
            reset(); // Clear the form

            // Hide success message after 5 seconds
            setTimeout(() => setIsSuccess(false), 5000);
        }, 1500);
    };

    return (
        <section className="bg-[#FCF6F0] py-16 sm:py-24">
            <div className="max-w-6xl mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Left: Form */}
                    <div className="w-full order-2 lg:order-1">
                        <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-semibold font-poppins text-gray-900 mb-8 sm:mb-10 lg:mt-2">
                            Request Booking
                        </h2>

                        {isSuccess && (
                            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 font-primary text-sm flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                Your booking request has been received! We will be in touch shortly.
                            </div>
                        )}

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 sm:space-y-6">

                            {/* Name */}
                            <div>
                                <InputField
                                    label="Name*"
                                    placeholder="Your full name"
                                    {...register('name', { required: 'Name is required' })}
                                    error={errors.name}
                                />
                            </div>

                            {/* Email and Phone */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                                <InputField
                                    label="Email*"
                                    type="email"
                                    placeholder="Your@email.com"
                                    {...register('email', {
                                        required: 'Email is required',
                                        pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' }
                                    })}
                                    error={errors.email}
                                />
                                <InputField
                                    label="Phone"
                                    type="tel"
                                    placeholder="(902) 555-0100"
                                    {...register('phone')}
                                />
                            </div>

                            {/* Business Name */}
                            <div>
                                <InputField
                                    label="Business Name*"
                                    subLabel="(NGO companies gets a discount for booking)"
                                    placeholder="Your business or brand name"
                                    {...register('businessName', { required: 'Business name is required' })}
                                    error={errors.businessName}
                                />
                            </div>

                            {/* Preferred Date & Package */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                                <InputField
                                    label="Preferred Date"
                                    type="date"
                                    {...register('preferredDate')}
                                />
                                <SelectField
                                    label="Package"
                                    options={packageOptions}
                                    placeholder="Select package"
                                    {...register('package')}
                                />
                            </div>

                            {/* Needs */}
                            <div>
                                <TextareaField
                                    label="Tell us about your needs"
                                    placeholder="How can we help you?"
                                    {...register('needs')}
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="pt-2">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full bg-[#DC5E32] hover:bg-[#c24f28] text-white font-semibold font-primary text-sm py-3.5 rounded-lg transition-colors flex justify-center items-center ${isSubmitting ? 'opacity-80 cursor-not-allowed' : ''}`}
                                >
                                    {isSubmitting ? (
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                    ) : (
                                        <>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 mr-2">
                                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                                            </svg>
                                            Send Message
                                        </>
                                    )}
                                </button>
                                <p className="text-gray-500 font-primary text-[13px] mt-4">
                                    We typically respond within 24 hours during business days
                                </p>
                            </div>
                        </form>
                    </div>

                    {/* Right: Image Container */}
                    <div className="w-full order-1 lg:order-2">
                        {/* Desktop Image */}
                        <img
                            src={RequestBookingImg}
                            alt="Flenjor Foods Kitchen Layout"
                            className="hidden lg:block w-full h-auto lg:max-h-[550px] lg:h-[550px] object-cover rounded-[2.5rem] shadow-sm transform transition-transform duration-500 hover:scale-[1.01]"
                        />

                        {/* Mobile Image */}
                        <img
                            src={RequestBookingMobileImg}
                            alt="Flenjor Foods Kitchen Layout Mobile"
                            className="block lg:hidden w-full h-auto max-h-[400px] sm:max-h-[500px] object-cover rounded-3xl shadow-sm"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default RequestBooking;
