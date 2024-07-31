"use client";

export function Profile() {
  return (
    <div className="justify-center flex-col flex items-center pt-32 md:w-1/2">
      <div>
        <h4 className="text-lg text-center text-white">Hi There!</h4>
        <h1 className="text-6xl font-bold text-center text-white">
          I am Developer
        </h1>
        <h2 className="text-2xl text-center text-white">
          I make the complex simple
        </h2>
      </div>
      <button
        onClick={() => {
          window.open(
            "https://www.linkedin.com/in/ali-bana-daulay-83a142156/",
            "_blank"
          );
        }}
        className="bg-button p-2 rounded-md mt-3 text-white"
      >
        Contact Me
      </button>
      <div className="flex mt-8 items-center md:flex-row flex-col md:w-4/5 w-screen py-4 justify-between">
        <div className="text-center">
          <h3 className="font-bold text-white">Email</h3>
          <p className="text-sm text-gray-300">daulay.alibana@gmail.com</p>
        </div>
        <div className="w-4/5 h-[2px] md:w-[0.5px] md:h-12 bg-gray-300 my-4"></div>
        <div className="text-center">
          <h3 className="font-bold text-white items-center ">Phone</h3>
          <p className="text-sm text-gray-300">+62-812-1111-3475</p>
        </div>
        <div className="w-4/5 h-[2px] md:w-[0.5px] md:h-12 bg-gray-300 my-4"></div>
        <div className="text-center">
          <h3 className="font-bold text-white">Location</h3>
          <p className="text-sm text-gray-300">Jakarta, Indonesia</p>
        </div>
      </div>
    </div>
  );
}
