
import React from 'react';
import SelfDefense from './SelfDefense'
import PersonalTrainingProgram from './PersonalTrainingProgram';
import CorporateWellnessProgram from './CorporateWellness';
import OnlineTrainingProgram from './OnlineTrainingProgram';
import styles from './Programs.module.css';
import DecoLineSection from "@/components/decoline/DecolineSection";

const TrainingProgram: React.FC = () => {



  return (
    <section id="TrainingProgram" className={styles.trainingProgramSection}>
      <div className="container">
        {/* Heading */}
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className={styles.sectionHeading}>Our Training Programs</h2>
          </div>
        </div>

        {/* Training Programs List */}
        <div className={styles.programList}>
          <SelfDefense />
          <DecoLineSection />
          <PersonalTrainingProgram  />
          <DecoLineSection />
          <CorporateWellnessProgram  />
          <DecoLineSection />
          <OnlineTrainingProgram />
         
        </div>
      </div>
    </section>
  );
};

export default TrainingProgram;