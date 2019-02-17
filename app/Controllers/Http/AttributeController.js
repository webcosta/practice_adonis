const Attribute = use('App/Models/Attribute');

class AttributeController {
  async index({ response }) {
    const attributes = await Attribute.all();

    response.json(attributes);
  }

  async create({ request, response }) {
    response.status(501);
    return response.json({
      message: 'Not implemented',
      data: request.all()
    });
  }

  async show({ request, response, params: { id } }) {
    response.status(501);
    return response.json({
      message: 'Not implemented',
      data: id,
      request: request.all()
    });
  }

  async update({ request, response, params: { id } }) {
    response.status(501);
    return response.json({
      message: 'Not implemented',
      data: request.all(),
      id
    });
  }

  async delete({ response, params: { id } }) {
    response.status(501);
    return response.json({ message: 'Not implemented', id });
  }
}

module.exports = AttributeController;
