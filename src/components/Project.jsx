const Project = () => {
  return (
    <div id="project" className="bg-[#ffffff] min-h-screen flex items-center">
      <div className="max-w-[90%] md:max-w-[75%] mx-auto font-inter space-y-10 py-10">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#fe5617]">
          My Projects
        </h1>

        {/* Project 1 and 2 in one row */}
        <div className="flex flex-col md:flex-col gap-10">
          {/* Smart Atsstendance Project */}
          <div className="w-full md:w-1/2 flex flex-col items-center bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-[#fe5617] font-extrabold text-[32px] mb-4">
            Smart Attendance System
            </h1>
            <p className="text-lg text-gray-700 mb-4">
            Developed a real-time facial recognition-based attendance system using Python, OpenCV, and the face_recognition library. Integrated a dynamic React frontend with Firebase Firestore to display attendance data in real time. Designed a secure admin login and an animated dashboard with responsive UI. Deployed the full application on Firebase Hosting for public access.
            </p>
          </div>

          {/* Fever Prediction Project */}
          <div className="w-full md:w-1/2 flex flex-col place-self-end bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-center text-[#fe5617] font-extrabold text-[32px] mb-4">
            Fever Variant Prediction
            </h1>
            <p className="text-lg text-gray-700 mb-4">
            Built a web application using Python and Flask to predict fever variants through linear regression. The system allows users to input symptoms and receive instant predictions, supporting basic health screening. The interface was designed with HTML and CSS for clarity and ease of use. This project was completed as part of an internship focused on AI in healthcare.
            </p>        
          </div>
        </div>
        <div className="flex flex-col md:flex-col gap-10">
          {/* Data visualization Project */}
          <div className="w-full md:w-1/2 flex flex-col items-center bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-[#fe5617] font-extrabold text-[32px] mb-4">
            Data Visualization with Power BI
            </h1>
            <p className="text-lg text-gray-700 mb-4">
            Used Power BI to explore and visualize an online retail dataset for business insights. Developed interactive dashboards to analyze sales trends, customer behavior, and product performance. Focused on answering specific business questions through clear visuals. The project demonstrates analytical thinking and effective use of data storytelling.
            </p>
          </div>

        </div>

        {/* Project 3 and 4 in one row */}
        <div className="flex flex-col md:flex-col gap-10 mt-10">
          {/* Dengue Prediction Project */}
          <div className="w-full md:w-1/2 flex flex-col place-self-end items-center bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-[#fe5617] font-extrabold text-[32px] mb-4">
            Dengue Prediction Model
            </h1>
            <p className="text-lg text-gray-700 mb-4">
            Implemented a machine learning model using Python to predict dengue infection based on clinical indicators like temperature, platelet count, and rash. The model was trained on structured health datasets to deliver quick diagnostic support. The application is intended to aid early detection in medical screening processes. It serves as a simplified yet impactful AI tool for healthcare.
            </p>
          </div>

          {/* Student Information System */}
          <div className="w-full md:w-1/2 flex flex-col  bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-center text-[#fe5617] font-extrabold text-[32px] mb-4">
            Student Information Management System
            </h1>
            <p className="text-lg text-gray-700 mb-4">
            Built a secure web application using HTML, CSS, JavaScript, and PHP to manage student records with full CRUD functionality. Students can log in by entering their roll number and date of birth to access and view their own details. The system ensures that only the respective student can edit their information, enhancing data privacy. Designed with a clean UI to facilitate easy navigation for both students and administrators.
            </p>
          </div>
        </div>

        {/* Project 5 and 5 in one row */}
        <div className="flex flex-col md:flex-col gap-10 mt-10">
          {/* React Mindmapper Project */}
          <div className="w-full md:w-1/2 flex flex-col place-self-end items-center bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-[#fe5617] font-extrabold text-[32px] mb-4">
            MindMapper Ai - On Going
            </h1>
            <p className="text-lg text-gray-700 mb-4">
            MindMapper AI is an AI-powered journaling web app that helps users reflect on their emotions and mental state. It uses LLMs (like GPT-4) to generate personalized reflections, affirmations, and suggested actions based on user input. Sentiment trends are tracked and visualized over time to promote mental clarity and growth. Built with React and Firebase, it's designed for a smooth and thoughtful journaling experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
