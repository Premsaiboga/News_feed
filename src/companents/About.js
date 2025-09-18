import React from 'react'

function About() {
  return (
    <div className='container my-3'>
        <p>A News App is a web application that allows users to read the latest news articles from different sources. It fetches real-time data from APIs like NewsAPI and displays it in a clean interface. The app usually includes categories such as business, sports, technology, health, and entertainment. Users can browse news headlines, view article descriptions, and click links to read full articles on the publisher’s site. It is built using React for the frontend because of its component-based structure. The app uses useState to manage data and useEffect to fetch news when the component loads. API keys are integrated securely to pull live content. A search bar can help users find news by keyword. Pagination or infinite scroll improves navigation for multiple articles. News cards are styled using CSS or frameworks like Bootstrap or Tailwind. Responsive design ensures it works on both desktop and mobile. The project teaches concepts like API integration, hooks, props, and state management. It is beginner-friendly yet practical for learning. The app demonstrates conditional rendering when articles are loading. Error handling is added for failed API calls. Developers can filter articles by source or domain. The UI can include images, headlines, and short summaries. This project can also integrate with backend storage for saved articles. It improves skills in React and API handling. Deploying it on platforms like Vercel or Netlify makes it publicly available. Overall, a News App is a great project to practice real-world frontend development.</p>
        
    </div>
  )
}

export default About
