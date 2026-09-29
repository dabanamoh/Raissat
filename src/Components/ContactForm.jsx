import { useState } from "react";
import { useForm } from "react-hook-form";

import Dialog from "./Dialog";
import Spinner from "./Spinner";
import { useContent } from "../content/live";
import { fill } from "../utils";

const accessKey = import.meta.env.VITE_HOOKFORM_ACCESS_KEY;

const Field = ({ id, label, required, error, className = "", children }) => (
  <div className={className}>
    <label htmlFor={id} className="font-inter font-semibold">
      {label}
      {required && (
        <span className="text-red-600" aria-hidden="true">
          {" "}
          *
        </span>
      )}
    </label>
    {children}
    {error && (
      <p id={`${id}-error`} className="text-red-600 text-sm font-inter mt-1">
        {error.message}
      </p>
    )}
  </div>
);

const inputClass = (error) =>
  `input ${error ? "focus:ring-red-500 border-red-500" : ""}`;

const Form = ({ inquiry, onClose, onSuccess }) => {
  const { site, contact } = useContent();
  const copy = contact.form || {};
  const [submitError, setSubmitError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const handleFormSubmit = async (data) => {
    setSubmitError("");
    const formData = new FormData();
    formData.append("access_key", accessKey ?? "");
    formData.append("subject", fill(copy.subject, { type: inquiry.type, site: site.siteName }));
    formData.append("inquiry_type", inquiry.type);
    if (inquiry.email) formData.append("route_to", inquiry.email);
    formData.append("from_name", `${data.firstName} ${data.lastName}`);
    Object.keys(data).forEach((key) => formData.append(key, data[key]));

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await res.json();
      if (!result.success) throw new Error(result.message || "Submission failed");
      reset();
      onSuccess();
    } catch (err) {
      console.error("Contact form:", err);
      setSubmitError(fill(copy.sendFailed, { email: site.contactEmail }));
    }
  };

  return (
    <Dialog
      onClose={onClose}
      label={copy.heading}
      className="max-w-2xl"
      panelClassName="p-5 sm:p-8"
    >
      <form onSubmit={handleSubmit(handleFormSubmit)} noValidate>
        <h2 className="mb-2 text-midnight-green text-center h1">{copy.heading}</h2>
        {inquiry?.type && (
          <p className="text-center font-inter text-slate-600 mb-6">{inquiry.type}</p>
        )}

        <div className="grid sm:grid-cols-2 gap-4">
          <Field id="firstName" label={copy.firstNameLabel} required error={errors.firstName}>
            <input
              id="firstName"
              className={inputClass(errors.firstName)}
              type="text"
              autoComplete="given-name"
              aria-invalid={!!errors.firstName}
              aria-describedby={errors.firstName ? "firstName-error" : undefined}
              {...register("firstName", { required: copy.firstNameError })}
            />
          </Field>

          <Field id="lastName" label={copy.lastNameLabel} required error={errors.lastName}>
            <input
              id="lastName"
              className={inputClass(errors.lastName)}
              type="text"
              autoComplete="family-name"
              aria-invalid={!!errors.lastName}
              aria-describedby={errors.lastName ? "lastName-error" : undefined}
              {...register("lastName", { required: copy.lastNameError })}
            />
          </Field>

          <Field id="email" label={copy.emailLabel} required error={errors.email}>
            <input
              id="email"
              className={inputClass(errors.email)}
              type="email"
              inputMode="email"
              autoComplete="email"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
              {...register("email", {
                required: copy.emailError,
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: copy.emailInvalidError,
                },
              })}
            />
          </Field>

          <Field id="phoneNumber" label={copy.phoneLabel} error={errors.phoneNumber}>
            <input
              id="phoneNumber"
              className={inputClass(errors.phoneNumber)}
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              aria-invalid={!!errors.phoneNumber}
              aria-describedby={errors.phoneNumber ? "phoneNumber-error" : undefined}
              {...register("phoneNumber", {
                minLength: { value: 7, message: copy.phoneError },
                pattern: {
                  value: /^[0-9()+\-\s]*$/,
                  message: copy.phoneInvalidError,
                },
              })}
            />
          </Field>

          <Field
            id="message"
            label={copy.messageLabel}
            required
            error={errors.message}
            className="sm:col-span-2"
          >
            <textarea
              id="message"
              className={inputClass(errors.message)}
              rows="4"
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
              {...register("message", { required: copy.messageError })}
            />
          </Field>
        </div>

        {submitError && (
          <p role="alert" className="text-red-600 font-inter mt-4">
            {submitError}
          </p>
        )}

        <button
          type="submit"
          className="btn w-full mt-6 bg-midnight-green text-white transition-transform duration-200 hover:scale-[1.01] active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
          disabled={isSubmitting}
        >
          {isSubmitting ? <Spinner /> : copy.submitLabel}
        </button>
      </form>
    </Dialog>
  );
};

export default Form;
