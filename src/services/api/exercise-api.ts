import { ExercisePropsForAPI } from "../../types/exercise-types";
import supabase from "../supabase/supabase";

const fetchExercise = async () => {
  const { data, error } = await supabase.from("exercises").select("*");
  if (error) {
    throw new Error(error.message);
  }

  return data;
};

const createWorkoutExercise = async (exercise: ExercisePropsForAPI[]) => {
  const { data, error } = await supabase
    .from("workout_exercises")
    .insert(exercise);
  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export { fetchExercise, createWorkoutExercise };
