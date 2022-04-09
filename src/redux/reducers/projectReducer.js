const initialState = [
  { id: 0, info: "Landing Page", manager: "Walt Cosani", assigned: "Ignacio Truffa", status: "Enabled"},
  { id: 1, info: "E-Commerce Shop", manager: "Walt Cosani", assigned: "Ignacio Truffa", status: "Enabled" },
];

export const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PROJECT":
      state = [...state, action.payload];
      return state;
    case "UPDATE_PROJECT":
      const updateState = state.map((project) =>
        project.id === action.payload.id ? action.payload : project
      );
      state = updateState;
      return state;
    case "DELETE_PROJECT":
      const filterProjects = state.filter((project) => 
      project.id !== action.payload ? project : null
      );
      state = filterProjects;
      return state;
    default:
      return state;
  }
};
