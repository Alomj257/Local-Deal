// src/services/newsletterService.js

const apiUrl = 'http://localhost:5000/api';

const newsletterService = {
  subscribeToNewsletter: async (email) => {
    try {
      const response = await fetch(`${apiUrl}/newsletter/subscribe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
        credentials: 'include',
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Failed to subscribe to newsletter. Server response: ${JSON.stringify(errorData)}`);
      }

      return response.json();
    } catch (error) {
      throw error;
    }
  },
};

export default newsletterService;
