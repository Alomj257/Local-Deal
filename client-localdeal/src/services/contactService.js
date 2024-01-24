// src/services/contactService.js

const apiUrl = 'http://localhost:5000/api'; // Replace with your backend URL

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
