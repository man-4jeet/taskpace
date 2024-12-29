"use client"; // Marks the component as a Client Component

import React, { useState } from 'react';

interface SkillBarProps {
  skill: string;
  level: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, level }) => {
  return (
    <div className="skill-bar">
      <div className="skill-header">
        <span>{skill}</span>
        <span>{level}%</span>
      </div>
      <div className="bar-background">
        <div className="bar" style={{ width: `${level}%` }}></div>
      </div>
      <style jsx>{`
        .skill-bar {
          margin-bottom: 16px;
          background: #fff;
          padding: 8px 12px;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .skill-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 4px;
          font-weight: bold;
          color: #333;
          font-size: 14px;
        }
        .bar-background {
          height: 8px; /* Shortened height for the bars */
          background: #e0e0e0;
          border-radius: 8px;
          overflow: hidden;
        }
        .bar {
          background: linear-gradient(90deg, #4caf50, #2196f3);
          height: 100%;
          transition: width 1s ease-in-out;
        }
      `}</style>
    </div>
  );
};

interface Skill {
  skill: string;
  level: number;
}

const Skills: React.FC = () => {
  const [showTechnical, setShowTechnical] = useState(true); // State to toggle between technical and soft skills

  const technicalSkills: Skill[] = [
    { skill: 'React', level: 80 },
    { skill: 'JavaScript', level: 75 },
    { skill: 'Data Structures', level: 80 },
    { skill: 'Node.js', level: 60 },
    { skill: 'Express.js', level: 65 },
    { skill: 'TypeScript', level: 70 },
    { skill: 'SQL', level: 65 }
  ];

  const softSkills: Skill[] = [
    { skill: 'Goal-Oriented', level: 85 },
    { skill: 'Collaboration', level: 70 },
    { skill: 'Positivity', level: 60 },
    { skill: 'Adaptability', level: 70 },
    { skill: 'Problem Solving', level: 70 },
    { skill: 'Organization', level: 65 },
    { skill: 'Creativity', level: 70 }
  ];

  return (
    <div style={{ padding: '40px', background: '#f8f9fa', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
      <h2 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 'bold', marginBottom: '30px', color: '#333' }}>Skills</h2>
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <button 
          onClick={() => setShowTechnical(true)} 
          style={{ marginRight: '15px', padding: '10px 20px', fontSize: '1rem', borderRadius: '8px', cursor: 'pointer', backgroundColor: showTechnical ? '#2196f3' : '#f0f0f0', color: showTechnical ? '#fff' : '#333', transition: 'background-color 0.3s' }}>
          Technical Skills
        </button>
        <button 
          onClick={() => setShowTechnical(false)} 
          style={{ padding: '10px 20px', fontSize: '1rem', borderRadius: '8px', cursor: 'pointer', backgroundColor: !showTechnical ? '#2196f3' : '#f0f0f0', color: !showTechnical ? '#fff' : '#333', transition: 'background-color 0.3s' }}>
          Soft Skills
        </button>
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '40px', flexWrap: 'wrap' }}>
        {showTechnical ? (
          <div style={{ flex: '1 1 45%', minWidth: '250px' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '15px', color: '#333' }}>Technical Skills</h3>
            {technicalSkills.map((item, index) => (
              <SkillBar key={index} skill={item.skill} level={item.level} />
            ))}
          </div>
        ) : (
          <div style={{ flex: '1 1 45%', minWidth: '250px' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '15px', color: '#333' }}>Soft Skills</h3>
            {softSkills.map((item, index) => (
              <SkillBar key={index} skill={item.skill} level={item.level} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Skills;
