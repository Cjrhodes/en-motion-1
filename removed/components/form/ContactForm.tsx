// ContactForm.tsx
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { useForm, SubmitHandler } from 'react-hook-form';
import { toast } from 'react-toastify';

interface Inputs {
  fullName: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<Inputs>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const selectedPackage = useSelector((state: any) => state.contactModal.selectedPackage);

  console.log('Selected Package in ContactForm:', selectedPackage); // Add this for debugging

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setIsSubmitting(true);

    console.log('Form Data being submitted:', data, 'Package:', selectedPackage); // Debug log

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "newclient@enmotionfit.com",
          to: ['miguelricaurte@hotmail.com', 'chrisxrhodes@gmail.com', 'enmotionfit@gmail.com'],
          subject: `New message from ${data.fullName}`,
          html: `
            <p>Email: ${data.email}</p>
            <p>Message: ${data.message}</p>
            ${selectedPackage ? `<p>Selected Package: ${selectedPackage}</p>` : ''}
          `,
          packageType: selectedPackage
        }),
      });

      if (response.ok) {
        await fetch('/api/subscribe', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: data.email,
            formType: 'contact',
            tag: selectedPackage,
            packageType: selectedPackage
          }),
        });
        toast.success("Form submitted successfully!");
        reset();
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error("Failed to submit the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group controlId="formFullName">
        <Form.Label>Full Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your full name"
          {...register('fullName', { required: true })}
        />
        {errors.fullName && <span className="text-danger">This field is required</span>}
      </Form.Group>

      <Form.Group controlId="formEmail" className="mt-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter your email"
          {...register('email', { required: true })}
        />
        {errors.email && <span className="text-danger">This field is required</span>}
      </Form.Group>

      <Form.Group controlId="formMessage" className="mt-3">
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter your message"
          {...register('message', { required: true })}
        />
        {errors.message && <span className="text-danger">This field is required</span>}
      </Form.Group>

      <Button
        variant="primary"
        type="submit"
        disabled={isSubmitting}
        className="mt-3"
      >
        {isSubmitting ? 'Sending...' : 'Submit'}
      </Button>
    </Form>
  );
};

export default ContactForm;