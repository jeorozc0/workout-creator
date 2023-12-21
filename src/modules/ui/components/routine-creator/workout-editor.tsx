import React from "react";
import ExerciseItem from "./exercise-item";

const WorkoutEditor = () => {
  return (
    <div className="flex gap-5 flex-col border-[#ECEDF0] border-2 border-solid bg-white h-screen w-11/12 lg:w-2/5 rounded-md p-10">
      <div>
        <h1 className="font-medium text-base text-left">My Routines</h1>
        <ExerciseItem/>
      </div>
    </div>
  );
};

export default WorkoutEditor;
