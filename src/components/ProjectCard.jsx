import React from 'react';

const ProjectCard = ({ title, description, image, video, technologies, githubLink, demoLink }) => {
  return (
    <div className="bg-[#1E1E2E] rounded-xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(79,70,229,0.3)] border border-[#2D2D3A]">
      <div className="flex flex-col h-full">
        <div className="relative h-40 overflow-hidden">
          {video ? (
            <video 
              src={video} 
              className="w-full h-full object-cover" 
              autoPlay 
              muted 
              loop
            />
          ) : (
            <img 
              src={image || "https://via.placeholder.com/400x225/1a1a2e/ffffff?text=Em+Breve"} 
              alt={title} 
              className="w-full h-full object-cover"
            />
          )}
        </div>
        <div className="p-4 flex-grow">
          <div>
            <h3 className="text-xl font-bold mb-1">{title}</h3>
            <p className="text-gray-300 text-sm mb-3">{description}</p>
            
            {/* Tecnologias utilizadas */}
            <div className="flex flex-wrap gap-1 mb-3">
              {technologies.map((tech, index) => (
                <span 
                  key={index} 
                  className="px-2 py-1 bg-[#2D2D3A] text-xs rounded-full text-indigo-300 border border-indigo-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            {/* Links */}
            <div className="flex justify-start gap-4">
              {githubLink && (
                <a 
                  href={githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-1 text-sm"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                  GitHub
                </a>
              )}
              {demoLink && (
                <a 
                  href={demoLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-1 text-sm"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                    <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                  </svg>
                  Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;