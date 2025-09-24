import React from 'react';
import demo_profile from '../../assets/demo_profile.avif';
import { color } from 'framer-motion';

const Template7 = ({ resumeData }) => {
  const styles = {
    container: {
      maxWidth: '850px',
      margin: '0 auto',
      background: '#fff',
      display: 'flex',
      flexDirection: 'row',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)',
      fontFamily: 'Arial, sans-serif'
    },
    leftSidebar: {
      minWidth: '230px',
      background: '#1c1c1c',
      color: '#fff',
      padding: '20px',
      boxSizing: 'border-box',
      paddingTop: '250px'
    },
    rightContent: {
      flexGrow: 1,
      padding: '20px',
      boxSizing: 'border-box'
    },
    header: {
      border: '20px solid #fff',
      background: '#6ac2c5',
      color: 'white',
      padding: '20px',
      display: 'flex',
      alignItems: 'center',
      borderRadius: '5px',
      position: 'relative',
      right: 0,
      left: '-230px',
      width: 'calc(100% + 164px)'
    },
    profileImage: {
      borderRadius: '50%',
      width: '80px',
      height: '80px',
      objectFit: 'cover',
      marginRight: '20px'
    },
    name: {
      margin: 0,
      fontSize: '22px',
      color:"#fff"
    },
    contactInfo: {
      margin: '5px 0',
      fontSize: '13px'
    },
    sectionTitle: {
      
      pageBreakInside: "avoid",
      pageBreakBefore: "auto",
      pageBreakAfter: "auto",
      color: '#6ac2c5',
      fontSize: '16px',
      borderBottom: '2px solid #6ac2c5',
      display: 'inline-block',
      marginTop: '20px'
    },
    sectionText: {
      
      pageBreakInside: "avoid",
      pageBreakBefore: "auto",
      pageBreakAfter: "auto",
      fontSize: '13px',
      lineHeight: '1.6',
      marginTop: '10px'
    },
    jobTitle: {
      
      pageBreakInside: "avoid",
      pageBreakBefore: "auto",
      pageBreakAfter: "auto",
      fontWeight: 'bold',
      marginTop: '10px'
    },
    jobDate: {
      
      pageBreakInside: "avoid",
      pageBreakBefore: "auto",
      pageBreakAfter: "auto",
      float: 'right'
    },
    company: {
      
      pageBreakInside: "avoid",
      pageBreakBefore: "auto",
      pageBreakAfter: "auto",
      fontSize: '13px',
      color: '#888'
    },
    bulletList: {
      fontSize: '13px',
      paddingLeft: '20px',
      marginTop: '5px'
    },
    sidebarTitle: {
      color:"#fff",
      marginTop: 0,
      fontSize: '16px',
      borderBottom: '1px solid #888',
      paddingBottom: '5px'
    },
    sidebarItem: {
      margin: '10px 0',
      color:"#fff"
    },
    sidebarList: {
      listStyle: 'none',
      paddingLeft: 0,
      marginTop: '10px'
    },
    sidebarListItem: {
      margin: '5px 0'
    },
    bulletPoint: {
      
          pageBreakInside: "avoid",
          pageBreakBefore: "auto",
          pageBreakAfter: "auto",
      marginRight: '5px'
    }
  };

  return (
    <div style={styles.container}>
      {/* Left Sidebar */}
      <div style={styles.leftSidebar}>
        {/* Languages */}
        {resumeData?.languages?.length > 0 && !(resumeData?.languagesDisabled) && (
          <div style={{ marginBottom: '30px' }}>
            <h3 style={styles.sidebarTitle}>{resumeData?.languagesTitle?.toUpperCase() || 'LANGUAGES'}</h3>
            {resumeData.languages.map((lang, index) => {
               return (
        lang.level == null ? null : (
              <p key={index} style={styles.sidebarItem}>{lang.name}</p>
              ));
})}
          </div>
        )}


{/* Skills Section */}
{!(resumeData?.skillsDisabled) && (
  <div style={{ marginBottom: '30px' }}>
    <h3 style={styles.sidebarTitle}>{resumeData?.skillsTitle || "SKILLS"}</h3>
    <ul style={styles.sidebarList}>
      {(resumeData?.skill || [])
        .filter(skill => skill.selected)
        .map((skill, index) => (
          <li key={index} style={styles.sidebarListItem}>
            <span style={styles.bulletPoint}>▪</span> {skill.name || skill}
          </li>
        ))}
    </ul>
  </div>
)}

        {/* Hobbies */}
        {resumeData?.hobbies?.length > 0 && !(resumeData?.hobbiesDisabled) && (
          <div>
            <h3 style={styles.sidebarTitle}>{resumeData?.hobbiesTitle?.toUpperCase() || 'HOBBIES'}</h3>
            <ul style={styles.sidebarList}>
              {resumeData.hobbies.map((hobby, index) => (
                <li key={index} style={styles.sidebarListItem}>
                  <span style={styles.bulletPoint}>▪</span> {hobby}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Right Content */}
      <div style={styles.rightContent}>
        {/* Header */}
        {!(resumeData?.personalDisabled) && (
          <div style={styles.header}>
            <img 
              src={resumeData?.profilePic || demo_profile} 
              alt="Profile" 
              style={styles.profileImage} 
            />
            <div>
              <h1 style={styles.name}>
                {resumeData?.candidateName?.[0]?.firstName} {resumeData?.candidateName?.[0]?.familyName}
              </h1>
              <p style={styles.contactInfo}>
                {resumeData?.email?.[0]} | {resumeData?.phoneNumber?.[0]?.formattedNumber}
              </p>
              <p style={styles.contactInfo}>
                {resumeData?.location?.formatted}
              </p>
            </div>
          </div>
        )}

        {/* Profile */}
        {!(resumeData?.profileDisabled) && (
          <div>
            <h2 style={styles.sectionTitle}>{resumeData?.profileTitle?.toUpperCase() || 'PROFILE'}</h2>
            <p style={styles.sectionText}>
              {resumeData?.summary || 'Professional summary goes here...'}
            </p>
          </div>
        )}

        {/* Employment */}
        {resumeData?.workExperience?.length > 0 && !(resumeData?.employmentDisabled) && (
          <div>
            <h2 style={styles.sectionTitle}>{resumeData?.employmentTitle?.toUpperCase() || 'EMPLOYMENT'}</h2>
            {resumeData.workExperience.map((job, index) => (
              <div key={index} style={{ marginTop: index === 0 ? '10px' : '20px' }}>
                <div>
                  <strong>{job.workExperienceJobTitle}</strong>
                  <span style={{ ...styles.jobDate, float: 'right' }}>
                    {job.workExperienceDates?.start?.date} - {job.workExperienceDates?.end?.date || 'Present'}
                  </span>
                </div>
                <span style={styles.company}>{job.workExperienceOrganization}</span>
                {job.workExperienceDescription && (
                  <ul style={styles.bulletList}>
                    {job.workExperienceDescription.split('\n').map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Education */}
        {!(resumeData?.educationDisabled) && (
        <div>
          <h2 style={styles.sectionTitle}>{resumeData?.educationTitle ||"EDUCATION"}</h2>
          
          {resumeData?.education?.map((edu, index) => (
            <div key={index} style={{ marginTop: index === 0 ? '10px' : '20px' }}>
              <div>
                <strong>{edu.educationAccreditation}</strong>
                <span style={{ ...styles.jobDate, float: 'right' }}>
                  {edu.educationDates?.start?.date} - {edu.educationDates?.end?.date}
                </span>
              </div>
              {edu.achievedGrade ? (
                <>
               Grade : <span style={styles.company}>{edu.achievedGrade}</span><br/>
               </>
              ):""}
              <span style={styles.company}>{edu.educationOrganization}</span>
              {edu.educationDescription && (
                <p style={styles.sectionText}>{edu.educationDescription}</p>
              )}
            </div>
          ))}
        </div>
        )}
      </div>
    </div>
  );
};

export default Template7;