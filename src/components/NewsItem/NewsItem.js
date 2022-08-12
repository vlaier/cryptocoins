import React from "react";

export default function NewsItem({ newsObject }) {
  const feedDate = new Date(newsObject.feedDate);

  return (
    <div className="relative flex justify-center   h-100 " key={newsObject.id}>
      <div className="rounded-3xl shadow-lg  w-full">
        <div className="h-40 relative">
          <img
            className="rounded-t-lg h-full w-full object-cover "
            src={newsObject.imgURL}
            alt="Article photo."
          />
          <div className="w-11 h-11  leading-none font-bold bg-secondary text-white absolute top-2 right-2 rounded-3xl flex flex-col items-center justify-center text-xs m-0 ">
            <div className="">{feedDate.getDate()}</div>
            <div className=" ">
              {new Intl.DateTimeFormat("en-US", { month: "short" }).format(
                feedDate
              )}
            </div>
          </div>
        </div>
        <div className="p-5 flex flex-col rounded-b-lg justify-between bg-secondary text-white">
          <div className="h-32">
            <div className="overflow-hidden overflow-ellipsis h-full">
              <h5 className="text-md font-medium mb-2 line-clamp-2">
                {newsObject.title}
              </h5>
              <p className="text-xs line-clamp-3 text-gray-400">
                {newsObject.description}
              </p>
            </div>
          </div>
          <a href={newsObject.link} target="_blank" className="self-center">
            <div className=" sw-fit text-center px-6 py-3 bg-primary text-white  text-xs leading-tight uppercase rounded-md shadow-md hover:bg-hover hover:shadow-lg transition duration-150 ease-in-out cursor-pointer">
              Read More
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
