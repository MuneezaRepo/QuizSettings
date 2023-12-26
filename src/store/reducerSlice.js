import { createSlice ,createAsyncThunk} from '@reduxjs/toolkit';

export const createQuiz=createAsyncThunk('createQuiz',async(payload,thunkApi)=>{
  console.log('i am in slice',payload)
  localStorage.setItem('quizz',JSON.stringify(payload))
  return payload
})


export const getQuiz=createAsyncThunk('getQuiz',async(thunkApi)=>{
  
  const respone=JSON.parse(localStorage.getItem('quizz'))
  console.log('i am in get slice',respone)
  return respone
})
const initialState = {
  tabIndex: 0,
  quiz:{},
  checkboxes: {
    shuffleValue: false,
    attemptValue: false
  }, 
};

const reducerSlice = createSlice({
  name: 'myReducer',
  initialState,
  reducers: {
    setQUizstate(state=initialState,action){
      state.quiz = action.payload;
    },

    setTabIndex(state, action) {
      state.tabIndex = action.payload;
    },
    updateCheckbox(state=initialState, action) {
      state.checkboxes = action.payload;
  

    },
    
    saveUserData(state, action) {
      console.log('User Data:', action.payload);
      console.log('state.log',state);
      return { ...state, userData: action.payload };
    },
   
  },
  extraReducers(builder){
    builder.addCase(createQuiz.fulfilled,(state,action)=>{
      state.quiz=action.payload
    }).addCase(getQuiz.fulfilled,(state,action)=>{
      state.quiz=action.payload
    })
  }
});
export const {setTabIndex,saveUserData,setQUizstate,updateCheckbox} = reducerSlice.actions;
export default reducerSlice.reducer;

