import { Link } from "react-router-dom";

const RoutineCreate = () => {
  return (
    <div className="flex gap-5 flex-col border-[#ECEDF0] dark:border-black border border-solid bg-white dark:bg-[#2B2C32] h-max w-11/12 lg:w-72 rounded-md p-6">
      <Link
        to={"/create-routine"}
        className=" flex align-middle justify-center border-[#ECEDF0] dark:border-black border border-solid bg-white hover:bg-[#F9FAFB] dark:bg-[#2B2C32] dark:hover:bg-[#353740] rounded-md cursor-pointer lg:p-3 p-5"
      >
        <p className="font-medium text-sm text-center">New Routine</p>
      </Link>
    </div>
  );
};

export default RoutineCreate;
