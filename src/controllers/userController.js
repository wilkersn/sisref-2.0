const ModelUser = require('../models/user');

module.exports =
{
  async List(req, res) {
    try {

      const user = await ModelUser.findAll({
      });
      return res.json(user);

    } catch (error) {
      return console.log(error.message);
    }

  },

  async Create(req, res) {
    try {

      const user = await ModelUser.create(
        {
          senha: req.body.senha,
          nome: req.body.nome,
          dataCriacao: req.body.dataCriacao,

        }
      );
      return res.json(user);

    } catch (error) {
      return console.log(error.message);
    }

  },

  async Update(req, res) {
    try {

      const { nome, cargo } = req.body;
      const user = await ModelUser.findByPk(parseInt(req.params.matricula))
      console.log(user);
      if (!user) {
        return response.status(400).json("Product not found");
      }
      user.nome = nome;
      user.cargo = cargo;
      console.log(user);
      await user.save();

      return res.json("Usuario Atualizado");

    } catch (error) {
      return console.log(error.message);
    }

  },

  async GetOne(req, res) {
    try {

      const userFind = await ModelUser.findByPk(parseInt(req.params.matricula))

      return res.json(userFind);

    } catch (error) {
      return console.log(error.message);
    }

  },

  async Delete(req, res) {
    try {

      const user = await ModelUser.findByPk(parseInt(req.params.matricula))
      await user.destroy()

      return res.json("Usuario: " + user.nome + " foi deletado");

    } catch (error) {
      return console.log(error.message);
    }

  },


}