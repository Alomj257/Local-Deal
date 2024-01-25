// src/services/contactService.js

// const apiUrl = 'https://496b-2409-40e0-4f-f2d7-e966-74fe-7ecf-c586.ngrok-free.app/api'; // Replace with your backend URL
const apiUrl = 'http://localhost:5000/api';

const contactService = {
  submitContactForm: async (formData) => {
    try {
      const response = await fetch(`${apiUrl}/contact/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        credentials: 'include', // Include credentials if needed
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Failed to submit contact form. Server response: ${JSON.stringify(errorData)}`);
      }

      return response.json();
    } catch (error) {
      throw error;
    }
  },
};

export default contactService;
