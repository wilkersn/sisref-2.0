const ModelPonto = require('../models/ponto');
const { Op } = require("sequelize");


module.exports =
{
  async ListAll(req, res) {
    try {

      const pontos = await ModelPonto.findAll({
      });
      return res.json(pontos);

    } catch (error) {
      console.log('sdg');
      return console.log(error.message);
    }

  },
  async ListForUser(req, res) {
    try {

      const pontos = await ModelPonto.findAll({
        where: {
          UserMatricula: req.params.matricula
        }
      });
      return res.json(pontos);

    } catch (error) {
      console.log('sdg');
      return console.log(error.message);
    }

  },

  async Create(req, res) {
    try {

      const ponto = await ModelPonto.create(
        {
          data_entrada: req.body.data_entrada,
          entrada: req.body.entrada,
          UserMatricula: parseInt(req.params.matricula),
        }
      );
      return res.json(ponto);

    } catch (error) {
      return console.log(error.message);
    }

  },

  async Update(req, res) {
    try {

      const {
        inicio_intervalo,
      } = req.body;

      const ponto = await ModelPonto.findByPk(parseInt(req.params.id))

      console.log(ponto);


      ponto.inicio_intervalo = inicio_intervalo


      if (!ponto) {
        return response.status(400).json("Ponto not found");
      }


      await ponto.save();

      return res.json("Ponto Atualizado");

    } catch (error) {
      return console.log(error.message);
    }

  },

  async GetOne(req, res) {
    try {

      const ponto = await ModelPonto.findByPk(parseInt(req.params.id))

      return res.json(ponto);

    } catch (error) {
      return console.log(error.message);
    }

  },


  async Delete(req, res) {
    try {

      const user = await ModelPonto.findByPk(parseInt(req.params.id))
      await user.destroy()

      return res.json("Ponto deletado");

    } catch (error) {
      return console.log(error.message);
    }

  },
  async FindForUserAndDate(req, res) {
    try {
      const data_incial = req.body.data_incial
      const data_final = req.body.data_final

      const pontos = await ModelPonto.findAll({
        where: {
          UserMatricula: req.params.matricula,
          data_entrada: {
            [Op.between]: [new Date(data_incial), new Date(data_final)]
          }
        }
      });
      return res.json(pontos);

    } catch (error) {
      console.log('sdg');
      return console.log(error.message);
    }

  },
  async HomologarMes(req, res) {
    try {
      const data_incial = req.body.data_incial
      const data_final = req.body.data_final

      const pontos = await ModelPonto.findAll({
        where: {
          UserMatricula: req.params.matricula,
          data_entrada: {
            [Op.between]: [new Date(data_incial), new Date(data_final)]
          }
        }
      });
      pontos.forEach(async element => {
        element.homologado = true;
        await element.save();
      });

      return res.json("Pontos homologados com sucesso!");

    } catch (error) {

      return console.log(error.message);
    }

  },

}