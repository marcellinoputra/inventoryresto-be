const roleModel = require('../model/role.model');

async function getRole(req, res) {
  const role = await roleModel.Role.findAll();
  res.status(200).send({
    data: role,
    message: 'Berhasil Mendapatkan List Role',
  });
  console.log(role.every((role) => role instanceof roleModel.Role));
  console.log('Role : ', JSON.stringify(role));
}

module.exports = {
  getRole,
};
