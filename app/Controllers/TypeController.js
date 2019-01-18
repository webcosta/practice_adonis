const Type = use('App/Models/Type');

class TypeController {
  
    async index({ response }) {
      return Type.all();
    }
  
    async create({ request, response }) {
      //Sketched out for further implementation
      // const data = request.only(['name']);
  
      // response.status(201);
      // return Product.save(data);    
      response.status(501)
      return response.json({message:'Not implemented'});
    }
  
    async show({ request, response, params: {id}}) {
      response.status(501)
      return response.json({message:'Not implemented'});
    }
  
    async update({ request, response, params: {id} }) {
      response.status(501)
      return response.json({message:'Not implemented'});
    };
  
    async delete({ request, response, params: { id } }) {
      response.status(501)
      return response.json({message:'Not implemented'});
    }
  }
  
module.exports = TypeController;
