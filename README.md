# SoftSell - One Page Responsive Website

## Overview
SoftSell is a responsive one-page website for a fictional company that provides a platform to sell software licenses. The website includes various sections, such as:
- Hero Section
- How It Works
- Why Choose Us
- Customer Testimonials
- Contact / Lead Form

Additionally, it includes a light/dark mode toggle and a basic AI-powered customer chat widget.

## Features Implemented
- **Hero Section**: Headline, subheading, and a call-to-action (CTA) button ("Get a Quote").
- **How It Works**: Three-step process (Upload License -> Get Valuation -> Get Paid) with icons.
- **Why Choose Us**: 3 bullet points with icons and small descriptions.
- **Customer Testimonials**: Two dummy reviews (name, role, company).
- **Contact / Lead Form**: Name, Email, Company, License Type (dropdown), and Message. The form includes frontend validation.
- **Light/Dark Mode Toggle**: A smooth slider for toggling between light and dark modes.
- **AI-Powered Customer Chat Widget**: A simple mock-up of a customer support chat feature, using an open-source wrapper or the OpenAI API.
- **Acertnity And Shadcn/ui**: We use these tools to make the website more modern by adding features like counters and contemporary text effects.

## Design Choices
- **Color Palette**: A modern and professional color palette was chosen to enhance readability and user experience.
  - Light mode: A clean, bright background with green accents.
  - Dark mode: A dark background with green accents for contrast.
- **Typography**: The website uses **Geist**, a clean and modern font optimized by Next.js.
- **Mobile Responsiveness**: The layout is fully responsive, ensuring that the website works well on devices of all sizes.

## Tech Stack
- **Frontend**: Next.js, Tailwind CSS
- **AI Chat**: Gemini API 
- **Hosting**: Vercel (for deployment)
- **Icons**: React Icons for visual elements like steps and reasons to choose SoftSell.

## Bonus Features
- **Logo Placeholder**: The website includes a placeholder for the logo in the navbar.
- **SEO Meta Tags**: Basic SEO meta tags have been added to improve visibility in search engines.
- **Animations**: Smooth animations have been added to certain elements for a more engaging user experience.
- **Favicon**: A placeholder favicon has been added.

## Time Spent
- **Design and Planning**: 2 hours
- **Development**: 5 hours
- **Testing and Bug Fixes**: 1 hour

## Chalanges
- **Theme Implementation**: Initially, we faced difficulties in implementing a smooth theme toggle between light and dark modes. After some trial and error, we utilized Tailwind CSS's built-in dark mode functionality to implement this feature successfully.
- **Chatbot Integration**: Implementing the AI-powered customer chat widget was another challenge. We faced several errors during integration, particularly in handling the API requests. After reading through the Gemini API documentation, we were able to resolve these issues and integrate the chatbot seamlessly.

## How to Run Locally
To run the project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/softsell.git
    ```

2. Install the dependencies:
    ```bash
    cd softsell
    npm install
    ```

3. Run the development server:
    ```bash
    npm run dev
    ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment
This project is deployed using **Vercel**. You can view the live website at the following link:
[SoftSell Live](https://intern3-seven.vercel.app/)

## Contributing
Feel free to fork the repository, open an issue, or submit a pull request. All contributions are welcome!

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

### Acknowledgements
- [React](https://reactjs.org/) - JavaScript library for building user interfaces.
- [Next.js](https://nextjs.org/) - The React framework used for this project.
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework used for styling.
- [React Icons](https://react-icons.github.io/react-icons/) - Used for visual icons.
- [OpenAI](https://openai.com/) - Used for the AI-powered chat widget.

