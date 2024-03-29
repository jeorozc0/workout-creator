import { Button } from "@mui/material";
import { ExerciseProps } from "../../types/exercise-types";
import ExerciseItem from "./exercise-creator-item";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import { useState } from "react";

interface WorkoutEditorProps {
  exercises: ExerciseProps[];
  removeExercise: (exercise_id: string) => void;
  submitWorkout: (workout: string, exerciseDetails: any) => void;
}

const WorkoutCreator = ({
  exercises,
  removeExercise,
  submitWorkout,
}: WorkoutEditorProps) => {
  const [routineName, setRoutineName] = useState("My Routine");
  const [exerciseDetails, setExerciseDetails] = useState({});

  const updateExerciseDetails = (
    exercise_id: string,
    sets: number,
    reps: number,
    rest: number
  ) => {
    setExerciseDetails((prevDetails) => ({
      ...prevDetails,
      [exercise_id]: { sets, reps, rest },
    }));
  };

  return (
    <div className="flex flex-col w-screen h-auto pl-40">
      <div className="h-auto w-full flex flex-row justify-between align-middle mb-5">
        <div className="flex flex-row justify-center align-middle items-center gap-2">
          <Link to={"/"}>
            <ArrowBackIcon />
          </Link>
          <h1 className="font-medium text-xl text-left h-auto items-center">
            Create Routine
          </h1>
        </div>

        <Button
          variant="contained"
          size="small"
          onClick={() => submitWorkout(routineName, exerciseDetails)}
        >
          Save Routine
        </Button>
      </div>
      <div className="h-auto w-full flex flex-row justify-between align-middle mb-5">
        <h1 className="font-medium text-lg text-left h-auto items-center">
          Routine Name
        </h1>
      </div>

      <input
        title="RoutineName"
        className="font-medium text-base text-left w-full flex border-[#ECEDF0] border border-solid bg-white h-auto  lg:w-full rounded-md p-3 mb-4"
        value={routineName}
        onChange={(e) => setRoutineName(e.target.value)}
      />
      {exercises.length > 0 ? (
        <>
          {exercises.map((exercise: ExerciseProps) => {
            return (
              <ExerciseItem
                key={exercise.exercise_id}
                exercise_name={exercise.exercise_name}
                exercise_id={exercise.exercise_id}
                removeExercise={removeExercise}
                updateExerciseDetails={updateExerciseDetails}
              />
            );
          })}
        </>
      ) : (
        <div className="flex justify-center items-center flex-col h-auto border-[#ECEDF0] border border-solid bg-white rounded-md p-10 gap-5 mb-6">
          <FitnessCenterIcon fontSize="large" />
          <h1 className="font-medium text-base text-center">No Exercises</h1>
          <h1 className="text-sm text-center text-[#8A909A]">
            So far, you haven't added any exercises to this routine.
          </h1>
        </div>
      )}
    </div>
  );
};

export default WorkoutCreator;
