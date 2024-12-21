const Resume = () => {

  const timeCal = (givenYear) => {
    const present = new Date();
    const presentYear = present.getFullYear();
    const presentMonth = present.getMonth() + 1; // Months are 0-indexed
  
    const yearDiff = presentYear - givenYear;
  
    if (yearDiff > 0) {
      return `${yearDiff}yr`;
    } else {
      // Calculate months difference
      const monthDiff = (presentYear - givenYear) * 12 + (presentMonth - 1);
      return `${monthDiff}months`;
    }
  };

  return (
    <div className="p-4 text-white">

      <h2 className="text-3xl font-bold mb-8">Education</h2>
      <div className="mb-8">
        <div className="flex items-center jc mb-2">
          <div className="w-2 h-2 bg-gray-200 rounded-full mr-2"></div>
          <div>
            <h3 className="text-xl font-semibold">Tula's Institute dehradun</h3>
            <h2 className="text-l">Bachelor's degree, Civil Engineering</h2>
          </div>
        </div>
        <p className=" mb-2">2016 - 2020</p>
        <p className="text-gray-400">
          Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit
          atque corrupti, quos dolores et quas molestas exceptur.
        </p>
      </div>
      <div className="mb-8">
        <div className="flex items-center mb-2">
          <div className="w-2 h-2 bg-gray-200 rounded-full mr-2"></div>
          <div>
            <h3 className="text-xl font-semibold">Govt. high school, Aurangabad</h3>
            <h2 className="text-l">Intermediate (PCM) </h2>
          </div>
        </div>
        <p className=" mb-2">2014 - 2016</p>
        <p className="text-gray-400">
          Nemo enim ipsam voluptatem, blanditiis praesentium voluptum delenit
          atque corrupti, quos dolores et quas molestas exceptur.
        </p>
      </div>
      <div className="mb-12">
        <div className="flex items-center mb-2">
          <div className="w-2 h-2 bg-gray-200 rounded-full mr-2"></div>
          <div>
            <h3 className="text-xl font-semibold">DAV Public School Nabinagar</h3>
            <h2 className="text-l">Matriculation </h2>
          </div>
        </div>
        <p className=" mb-2">2013 — 2014</p>
        <p className="text-gray-400">
          Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit
          atque corrupti, quos dolores et quas molestas exceptur.
        </p>
      </div>


      <h2 className="text-3xl font-bold mb-8">Experience</h2>
      <div className="mb-8">
        <div className="flex items-center mb-2">
          <div className="w-2 h-2 bg-gray-200 rounded-full mr-2"></div>
          <div>
            <h3 className="text-xl font-semibold">Electrowaves electronics</h3>
            <h2 className="text-l">Senior software developer</h2>
          </div>
        </div>
        <p className=" mb-2">2024 — Present</p>
        <p className="text-gray-400">
          Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit
          atque corrupti, quos dolores et quas molestas exceptur.
        </p>
      </div>

      <div className="mb-8">
        <div className="flex items-center mb-2">
          <div className="w-2 h-2 bg-gray-200 rounded-full mr-2"></div>
          <div>
            <h3 className="text-xl font-semibold">Electrowaves electronics</h3>
            <h2 className="text-l">Junior software developer</h2>
          </div>
        </div>
        <p className=" mb-2">2022 — 2024</p>
        <p className="text-gray-400">
          Nemo enim ipsam voluptatem, blanditiis praesentium voluptum delenit
          atque corrupti, quos dolores et quas molestas exceptur.
        </p>
      </div>

      <div className="mb-12">
        <div className="flex items-center mb-2">
          <div className="w-2 h-2 bg-gray-200 rounded-full mr-2"></div>
          <div>
            <h3 className="text-xl font-semibold">TCA tranining & development</h3>
            <h2 className="text-l">Trainee</h2>
          </div>
        </div>
        <p className=" mb-2">2021 — 2022</p>
        <p className="text-gray-400">
          Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit
          atque corrupti, quos dolores et quas molestas exceptur.
        </p>
      </div>

      <h2 className="text-3xl font-bold mb-6">My Skills</h2>

      <div className="mb-4">
        <div className="flex justify-between mb-1">
          <span>Frontend</span>
          <span>72%</span>
        </div>
        <div className="w-full bg-gray-700  rounded-full h-2.5">
          <div
            className="bg-gray-900 h-2.5 rounded-full"
            style={{ width: "72%" }}
          ></div>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex justify-between mb-1">
          <span>Backend</span>
          <span>60%</span>
        </div>
        <div className="w-full bg-gray-700  rounded-full h-2.5">
          <div
            className="bg-gray-900 h-2.5 rounded-full"
            style={{ width: "60%" }}
          ></div>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex justify-between mb-1">
          <span>Version Control</span>
          <span>68%</span>
        </div>
        <div className="w-full bg-gray-700  rounded-full h-2.5">
          <div
            className="bg-gray-900 h-2.5 rounded-full"
            style={{ width: "68%" }}
          ></div>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex justify-between mb-1">
          <span>Problem-Solving and Debugging</span>
          <span>55%</span>
        </div>
        <div className="w-full bg-gray-700  rounded-full h-2.5">
          <div
            className="bg-gray-900 h-2.5 rounded-full"
            style={{ width: "55%" }}
          ></div>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex justify-between mb-1">
          <span>Communication and Teamwork</span>
          <span>75%</span>
        </div>
        <div className="w-full bg-gray-700  rounded-full h-2.5">
          <div
           className="bg-gray-900 h-2.5 rounded-full"
            style={{ width: "75%" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
