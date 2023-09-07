const { Router } = require('express');
const user = require('../controllers/user');
const login = require('../controllers/login');
const logout = require('../controllers/logout');
const posts = require('../controllers/posts');
const role = require('../controllers/role');
const router = Router();
const multer = require('multer');
const gifship = require('../controllers/gifship')
const country = require('../controllers/country')
const region = require('../controllers/regions')
const state = require('../controllers/states')
const lga = require('../controllers/lga')
const ward = require('../controllers/ward')
const hospital = require('../controllers/hospital')
const gform = require('../controllers/gforms')
const gifshipPackage = require('../controllers/gifshipPackage')
const hmo = require('../controllers/hmo')
const lookup = require('../controllers/lookups')
const user_rrr = require('../controllers/user_rrr')
const perm = require('../controllers/permission')
const role_perm = require('../controllers/role-permission')
const enrolee_rrr_code = require('../controllers/user_rrr_code');
const { hashedPasswords } = require('../helpers/hashPassword');
const send = require('../helpers/email')

const requireJsonContent = (request, response, next) => {
  if (request.headers['content-type'] !== 'application/json') {
    response.status(400).send('Server requires application/json')
  } else {
    next()
  }
}
//READ EXCEL FILE===========

//Create user and login routes=============================
router.post('/login', requireJsonContent, login.Login)
router.post('/logout', logout.Logout);
router.post('/users', requireJsonContent, user.createUser);
router.post('/users/bulk', requireJsonContent, user.BulkcreateUser);
router.put('/changepassword/:id', requireJsonContent, user.changePassword);
router.get('/users', user.findAllUser);
router.get('/users/:page/:per_page', user.getUsersPaging);
router.put('/activate/:id/', requireJsonContent, user.ActivateUser)
router.put('/upload/:id/change', requireJsonContent, user.changePassport)
router.post('/sendmail/user/auth/email/send', send.send)

//========================================================
router.get('/post', requireJsonContent, posts.getPosts);
router.get('/post/:id', requireJsonContent, posts.getPost);
router.post('/post', requireJsonContent, posts.addPost);
router.delete('/post/:id', requireJsonContent, posts.deletePost);
router.put('/post/:id', requireJsonContent, posts.updatePost);
//===============================
router.get('/role', role.getRoles);
router.get('/role/:page/:per_page', role.getRolesPaing);
router.get('/role/:id', role.getRole)
router.post('/role', requireJsonContent, role.addRole)
router.delete('/role/:id', role.deleteRole)
router.put('/role/:id', requireJsonContent, role.updateRole)
//========================================
router.get('/permissions', perm.getPermissions);
router.get('/permissions/:page/:per_page', perm.getPermissionsPaging);
router.get('/role-permissions/', role_perm.getRolesPermissionAll);
router.get('/:roleId/role-permissions', role_perm.getRolesPermissions);
router.delete('/:id/role-permissions/', role_perm.deleteRolePemissions);
router.delete('/:id/role-permissions/', role_perm.deleteRolePemissionRoleId);
router.delete('/:permissionId/:roleId/role-permissions/', role_perm.deleteRolePemissionRoleIdPermissionId);
router.post('/role-permissions/', requireJsonContent, role_perm.addRolesPermissions);
//===================================
router.get('/user-rrr/', user_rrr.getUser_rrrs);
router.get('/user-rrr/:page/:per_page/0', user_rrr.getUser_rrrsPaging);
router.get('/user-rrr/:id/', user_rrr.getUser_rrr)//
router.get('/user-rrr/:userId/0/', user_rrr.getUser_rrrByUserId)
router.post('/user-rrr/', requireJsonContent, user_rrr.addUser_rrr)
router.delete('/user-rrr/:id/', user_rrr.deleteUser_rrr)
router.put('/user-rrr/:id/', requireJsonContent, user_rrr.updateUser_rrr)
router.get('/user-rrr/rrr/:id/', user_rrr.getUser_rrrByRRR)
router.get('/:userId/user-rrr/getuserid/rrr/rrr/', user_rrr.getAllByUserId )
//====================================
router.get('/codes/', requireJsonContent, enrolee_rrr_code.getEnrolee_rrr_codes);
router.get('/codes/:user_rrrId/code/rrr/', enrolee_rrr_code.getEnrolee_rrr_codeCount);
router.get('/xyx/:id/', requireJsonContent, enrolee_rrr_code.getEnrolee_rrr_code)
router.get('/code/:userId/0/', enrolee_rrr_code.getEnrolee_rrr_codeByUserId)
router.get('/code/:code/', enrolee_rrr_code.getEnrolee_rrr_codeByCode);
router.get('/code/:userId/:code/', requireJsonContent, enrolee_rrr_code.getEnrolee_rrr_codeByUserIdCode)
router.post('/code/', requireJsonContent, enrolee_rrr_code.addEnrolee_rrr_code)
router.post('/codes/', requireJsonContent, enrolee_rrr_code.addEnrolee_rrr_codes)
//=======================================================
router.get('/country', country.getCountrys);
router.get('/country/:page/:per_page', country.getAllCountry)
router.get('/country/:id', country.getCountry)
router.post('/country', requireJsonContent, country.addCountry)
router.delete('/country/:id', country.deleteCountry)
router.put('/country/:id', requireJsonContent, country.updateCountry)
//========================================
router.get('/hmos', hmo.getHmos);
router.get('/hmos/:page/:per_page', hmo.getHmoAll);
router.get('/hmo/:id', hmo.getHmo)
router.post('/hmo', requireJsonContent, hmo.addHmo)
router.delete('/hmo/:id', hmo.deleteHmo)
router.put('/hmo/:id', requireJsonContent, hmo.updateHmo)
//=========================================
router.get('/region', region.getRegions);
router.get('/region/:page/:per_page/0', region.getRegionsPaging);
router.get('/region/:id', region.getRegion)
router.post('/region', requireJsonContent, region.addRegion)
router.delete('/region/:id', region.deleteRegion)
router.put('/region/:id', requireJsonContent, region.updateRegion)
router.get('/region/country/:countryId', region.loadRegions)
//========================================
router.get('/state', state.getStates);
router.get('/state/:page/:per_page/0', state.getStatesPaging);
router.get('/state/:id', state.getState)
router.post('/state', requireJsonContent, state.addState)
router.delete('/state/:id', state.deleteState)
router.put('/state/:id', requireJsonContent, state.updateState)
router.get('/state/region/:regionId', state.loadStateswithRegion)
//========================================
router.get('/lga', lga.getLgas);
router.get('/lga/:page/:per_page/0', lga.getLgasPaging);
router.get('/lga/:id', lga.getLga)
router.post('/lga', requireJsonContent, lga.addLga)
router.delete('/lga/:id', lga.deleteLga)
router.put('/lga/:id', requireJsonContent, lga.updateLga)
router.get('/lga/state/:stateId', lga.loadLgaswithState)
//==================================
router.get('/ward', ward.getWards);
router.get('/ward/:page/:per_page/0', ward.getWardsPaging);
router.get('/ward/:id', ward.getWard)
router.post('/ward', requireJsonContent, ward.addWard)
router.delete('/ward/:id', ward.deleteWard)
router.put('/ward/:id', requireJsonContent, ward.updateWard)
router.get('/ward/lga/:lgaId', ward.loadWardswithLga)
////===========================
router.get('/hospital', hospital.getHospitals);
router.get('/hospital/:page/:per_page/0', hospital.getHospitalsPaging);
router.get('/hospital/:id', hospital.getHospital)
router.get('/hospital/:id/hospital', hospital.getHospitalWithInclude)
router.post('/hospital', requireJsonContent, hospital.addHospital)
router.delete('/hospital/:id', hospital.deleteHospital)
router.get('/hospital/:countryId/:regionId/:stateId/:lgaId/lga', hospital.getHospitalWithLga)
router.put('/hospital/:id', requireJsonContent, hospital.updateHospital)
//===============================
router.get('/forms/register', gform.getGforms);
router.get('/forms/register/:page/:per_page', gform.getGformsPaging);
router.get('/register/:id', gform.getGform)
//router.get('/register/:id/hospital',hospital.getHospitalWithInclude)
router.post('/register/add/', requireJsonContent, gform.addGform)
router.delete('/register/:id', gform.deleteGform)
router.put('/register/:id', requireJsonContent, gform.updateGform)
router.get('/register/:userId/userId', gform.getGformuserId)
//=====================================================
router.get('/gifship', gifship.getGifship);
router.post('/gifship-type', gifship.createGifshipType)
router.get('/gifshipList/:page/:per_page', gifship.getGifshipList);
router.delete('/gifshipList/:id', gifship.getGifshipDelete);
router.get('/gifshipedit/:id', gifship.Gifshipone);
router.put('/gifshipList/:id', gifship.GifshipUpdate);
router.get('/gifshipLists/:id', gifship.GifshipbyId);
//============GifshipPackage================
router.get('/gifshipPackage/:page/:per_page', gifshipPackage.getGifshipPackages);
router.post('/gifshipPackage', gifshipPackage.addGifshipPackage)
router.delete('/gifshipPackage/:id', gifshipPackage.deleteGifshipPackage);
router.get('/gifshipPackage/:id', gifshipPackage.getGifshipPackage);
router.get('/gifshipPackageList/:id', gifshipPackage.getGifshipPackageWithGigshipTypeId);
router.put('/gifshipPackage/:id', gifshipPackage.updateGifshipPackage);
//==============LOOKUPS TABLES==========
router.get('/lookups/:id/lga', lookup.lookUpLga)
router.get('/lookups/:id/state', lookup.lookUpState)
router.get('/lookups/:id/region', lookup.lookUpRegion)
router.get('/lookups/:id/country', lookup.lookUpCountry)
//===============image function=========

const storage = multer.diskStorage({
  destination: function (req, file, cb){
    cb(null, './public/upload/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname)
  },
});
const upload = multer({
  storage,
  //limits:{fieldSize:1000000},

})
router.post('/uploadfile', upload.single('file'), function (req, res) {
  const file = req.file
  return res.status(200).json({ filename: file.filename })


})
 
router.get('/hashed/change/pass/:token/ok/ww', hashedPasswords)
//============END OF IMAGE

module.exports = router
