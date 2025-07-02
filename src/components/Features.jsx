import React from "react";
import { DiBingSmall } from "react-icons/di";
import { FaTh } from "react-icons/fa";
import { HiFolderPlus } from "react-icons/hi2";
import { ImAndroid, ImAppleinc } from "react-icons/im";
import { TbSettingsQuestion } from "react-icons/tb";

const Features = () => {
  const FeaturesData = [
    {
      id: 1,
      title: "Crafted for Startups",
      desc: "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
      icon: <ImAndroid />,
    },
    {
      id: 2,
      title: "High-quality Design",
      desc: "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
      icon: <ImAppleinc />,
    },
    {
      id: 3,
      title: "All Essential Components",
      desc: "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
      icon: <FaTh />,
    },
    {
      id: 4,
      title: "Speed Optimized",
      desc: "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
      icon: <TbSettingsQuestion />,
    },
    {
      id: 5,
      title: "Fully Customizable",
      desc: "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
      icon: <DiBingSmall />,
    },
    {
      id: 6,
      title: "Regular Updates",
      desc: "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
      icon: <HiFolderPlus />,
    },
  ];

  return (
    <div>

   
      <div className="container mx-auto ">
        <div className="text-center py-10">
          <h1 className="text-4xl font-bold">Main Features</h1>
          <p className="my-3">
            There are many variations of passages of Lorem Ipsum available but{" "}
            <br />
            the majority have suffered alteration in some form.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  gap-3 mx-7 '>
            {FeaturesData.map((item)=>(
                <div key={item.id}>
                    <div className="my-6">
                        <p className="bg-[#121A4D] text-3xl rounded py-3 w-[50px] flex justify-center items-center text-blue-900">{item.icon}</p>

                    </div>
                    <h1 className="text-2xl font-bold">{item.title}</h1>
                    <h1 className="text-gray-400 text-sm ">{item.desc}</h1>

                </div>

            ))}

</div>
      </div>
    </div>
  );
};

export default Features;
