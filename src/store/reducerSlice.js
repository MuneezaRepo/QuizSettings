import { createSlice ,createAsyncThunk} from '@reduxjs/toolkit';

export const createQuiz=createAsyncThunk('createQuiz',async(payload,thunkApi)=>{
  console.log('i am in slice',payload)
  localStorage.setItem('quizz',JSON.stringify(payload))
  return payload
})

export const createMCQ=createAsyncThunk('createMCQ',async(payload,thunkApi)=>{
  console.log('i am in createMCQ',payload)
  localStorage.setItem('addMCQ',JSON.stringify(payload))
  return payload
})

export const createAllMCQ=createAsyncThunk('createAllMCQ',async(payload,thunkApi)=>{
  console.log('i am in createMCQ',payload)
  localStorage.setItem('addAllMCQ',JSON.stringify(payload))
  return payload
})


export const getQuiz=createAsyncThunk('getQuiz',async(thunkApi)=>{
  
  const respone=JSON.parse(localStorage.getItem('quizz'))
  console.log('i am in get slice',respone)
  return respone
})
const initialState = {
  quiz:{},
  addMCQ:{},
  allMCQs:[],
 
};

const reducerSlice = createSlice({
  name: 'myReducer',
  initialState,
  reducers: {
    setQUizstate(state=initialState,action){
      state.quiz = action.payload;
    },
  },
  extraReducers(builder){
    builder.addCase(createQuiz.fulfilled,(state,action)=>{
      state.quiz=action.payload
    }).addCase(getQuiz.fulfilled,(state,action)=>{
      state.quiz=action.payload
    }).addCase(createMCQ.fulfilled,(state,action)=>{
      state.addMCQ=action.payload
    }).addCase(createAllMCQ.fulfilled,(state,action)=>{
      state.allMCQs=action.payload
    })
  }
});
export const {setQUizstate} = reducerSlice.actions;
export default reducerSlice.reducer;

