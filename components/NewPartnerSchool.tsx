import React from "react";

type NewPartnerSchoolProps = {
  title: string;
  schoolName: string[];
};

const NewPartnerSchool: React.FC<
  NewPartnerSchoolProps & { schoolName: string[] }
> = ({ title, schoolName }) => {
  return (
    <section className="max-w-7xl mx-auto pt-10 px-8 sm:px-0 pb-10">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
          {title}
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {schoolName.map((name, index) => (
          <div
            key={index}
            className={`flex items-center text-black border-black gap-4 p-4 border-t border-b ${
              index === schoolName.length - 1 ? "border-b-0" : ""
            }`}
          >
            {name}
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewPartnerSchool;
