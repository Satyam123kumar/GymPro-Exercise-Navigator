import React, { useEffect, useState } from 'react'
import { exerciseOptions, fetchData } from '../utils/fetchData';
import { Box, Stack, Typography } from '@mui/material';
import ExerciseCard from './ExerciseCard';
import {Pagination} from '@mui/material';

const Exercises = ({exercises, setExercises, bodyPart}) => {
  // console.log(exercises);

  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  const paginate = (e, value) =>{
    setCurrentPage(value);
    window.scrollTo({top: 1800, behavior: 'smooth'})
  }

  useEffect(()=>{
    const fetchExercisesData = async () =>{
      let exercisesData = [];

      if (bodyPart === 'all'){
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=2000', exerciseOptions);
      }

      else{
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=2000`, exerciseOptions);
      }

      setExercises(exercisesData);
    }

    fetchExercisesData();
  }, [bodyPart])

  
  return (
    <Box id='exercises' sx={{ mt: { lg: '109px' } }} mt="50px" p="20px">
      <Typography variant="h3" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">
        Showing results
      </Typography>
      <Stack direction="row" 
      sx={{ gap: { lg: '107px', xs: '50px' } }} 
      flexWrap="wrap" 
      justifyContent="center">
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            // count={Math.ceil(exercises.length / exercisesPerPage)}
            count={Math.ceil(exercises.length/ exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  )
}

export default Exercises
