import  model from "../Models/filmModels";

export const getAll = () =>{
   return model.findAll();
};