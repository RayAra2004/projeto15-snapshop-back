import Joi from "joi";

export const newBuySchema = Joi.object({
   amount: Joi.array().required(),
   idProducts: Joi.array().required(),
   cep: Joi.number().required(), 
   city: Joi.string().required(), 
   neighborhood: Joi.string().required(), 
   state: Joi.string().required(), 
   street: Joi.string().required(), 
   number: Joi.number().required(), 
   paymentMethod: Joi.string().required(), 
   cardNumber: Joi.number(), 
   expiration: Joi.string(), 
   cvv: Joi.number(), 
   nameHolder: Joi.string(),
   price:Joi.number().positive()
});
