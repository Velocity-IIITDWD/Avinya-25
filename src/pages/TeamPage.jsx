import React from 'react';
import { teamData } from '../data/team_data';
import { motion } from 'framer-motion';
import ShinyText from '../components/AboutFest/About';

const MemberCard = ({ name, role, image }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.05 }}
    className="relative overflow-hidden rounded-xl bg-[#0A0A0A] border border-gray-800 p-4 transition-all duration-300 flex flex-col items-center text-center"
  >
    <div className="aspect-square w-48 h-48 overflow-hidden rounded-lg mb-4 border border-gray-800">
      <img
        src={image}
        alt={name}
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
    </div>
    <ShinyText text={name} className="text-lg font-semibold mb-1" />
    {role && <p className="text-sm text-gray-500">{role}</p>}
  </motion.div>
);

const SectionTitle = ({ children }) => (
  <div className="mb-12 text-center">
    <ShinyText
      text={children}
      className="text-3xl font-bold"
    />
  </div>
);

const SubSectionTitle = ({ children }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-center mb-8"
  >
    <ShinyText
      text={children}
      className="text-2xl font-semibold"
    />
  </motion.div>
);



function TeamPage() {
  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="container mx-auto px-4">
        {/* Main Title */}
        <div className="text-center mb-20">
          <ShinyText 
            text="Our Team" 
            className="text-5xl md:text-6xl font-bold"
          />
        </div>

        {/* Secretaries Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <SectionTitle>Secretaries</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {teamData.secretaries.map((secretary) => (
              <MemberCard key={secretary.name} {...secretary} />
            ))}
          </div>
        </motion.div>

        {/* Departments Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <SectionTitle>Departments</SectionTitle>
          {teamData.departments.map((dept) => (
            <div key={dept.name} className="mb-16">
              <SubSectionTitle>{dept.name}</SubSectionTitle>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {dept.members.map((member) => (
                  <MemberCard
                    key={member.name}
                    name={member.name}
                    image={member.image}
                  />
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Club Leads Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <SectionTitle>Club Leads & Co-Leads</SectionTitle>

          {/* Technical Club Leads */}
          <div className="mb-20">
            <SubSectionTitle>Technical</SubSectionTitle>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {teamData.clubLeads.technical.map((member) => (
                <MemberCard key={member.name} {...member} />
              ))}
            </div>
          </div>

          {/* Cultural Club Leads */}
          <div className="mb-16">
            <SubSectionTitle>Cultural</SubSectionTitle>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {teamData.clubLeads.cultural.map((member) => (
                <MemberCard key={member.name} {...member} />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Developers Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-20 border-t border-gray-800"
        >
          <div className="text-center mb-12">
            <ShinyText
              text="Website Developers"
              className="text-3xl md:text-4xl font-bold"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto justify-items-center">
            {teamData.developers && teamData.developers.map((dev) => (
              <MemberCard key={dev.name} {...dev} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default TeamPage;