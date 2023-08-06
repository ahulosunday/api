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

const requireJsonContent = (request, response, next) => {
  if (request.headers['content-type'] !== 'application/json') {
      response.status(400).send('Server requires application/json')
  } else {
    next()
  }
}

//Create user and login routes=============================
router.post('/login',requireJsonContent, login.Login);
router.post('/logout', logout.Logout);
router.post('/users', requireJsonContent, user.createUser);
router.put('/changepassword/:id',requireJsonContent, user.changePassword);
router.get('/users', user.findAllUser);

//========================================================

router.get('/post',requireJsonContent, posts.getPosts);
router.get('/post/:id',requireJsonContent, posts.getPost );
router.post('/post', requireJsonContent, posts.addPost);
router.delete('/post/:id', requireJsonContent, posts.deletePost );
router.put('/post/:id',requireJsonContent,  posts.updatePost);

//===============================
router.get('/role', role.getRoles);
router.get('/role/:id',role.getRole)
router.post('/role',requireJsonContent, role.addRole)
router.delete('/role/:id', role.deleteRole )
router.put('/role/:id',requireJsonContent, role.updateRole)
//========================================
router.get('/permissions', perm.getPermissions);
router.get('/role-permissions/', role_perm.getRolesPermissionAll);
router.get('/:id/role-permissions', role_perm.getRolePemissionId);
router.delete('/:id/role-permissions/', role_perm.deleteRolePemissions);
router.delete('/:id/role-permissions/', role_perm.deleteRolePemissionRoleId);
router.delete('/:permissionId/:roleId/role-permissions/', role_perm.deleteRolePemissionRoleIdPermissionId);///role/${permissionId}/${id}
router.post('/role-permissions/',requireJsonContent, role_perm.addRolesPermissions);
//===================================
router.get('/user-rrr/', user_rrr.getUser_rrrs);
router.get('/user-rrr/:id/',user_rrr.getUser_rrr)//
router.get('/user-rrr/:userId/0/',user_rrr.getUser_rrrByUserId)
router.post('/user-rrr/',requireJsonContent, user_rrr.addUser_rrr)
router.delete('/user-rrr/:id/', user_rrr.deleteUser_rrr )
router.put('/user-rrr/:id/',requireJsonContent, user_rrr.updateUser_rrr)
router.get('/user-rrr/rrr/:id/', user_rrr.getUser_rrrByRRR)
//====================================
router.get('/country', country.getCountrys);
router.get('/country/:id',country.getCountry)
router.post('/country',requireJsonContent, country.addCountry)
router.delete('/country/:id', country.deleteCountry )
router.put('/country/:id',requireJsonContent, country.updateCountry)
//========================================
router.get('/hmos', hmo.getHmos);
router.get('/hmo/:id',hmo.getHmo)
router.post('/hmo',requireJsonContent, hmo.addHmo)
router.delete('/hmo/:id', hmo.deleteHmo )
router.put('/hmo/:id',requireJsonContent, hmo.updateHmo)
//=========================================
router.get('/region', region.getRegions);
router.get('/region/:id',region.getRegion)
router.post('/region',requireJsonContent, region.addRegion)
router.delete('/region/:id', region.deleteRegion )
router.put('/region/:id',requireJsonContent, region.updateRegion)
router.get('/region/country/:countryId', region.loadRegions)
//========================================
router.get('/state', state.getStates);
router.get('/state/:id',state.getState)
router.post('/state',requireJsonContent, state.addState)
router.delete('/state/:id', state.deleteState )
router.put('/state/:id',requireJsonContent, state.updateState)
router.get('/state/region/:regionId', state.loadStateswithRegion)
//========================================
router.get('/lga', lga.getLgas);
router.get('/lga/:id',lga.getLga)
router.post('/lga',requireJsonContent, lga.addLga)
router.delete('/lga/:id', lga.deleteLga )
router.put('/lga/:id',requireJsonContent, lga.updateLga)
router.get('/lga/state/:stateId', lga.loadLgaswithState)
//==================================
router.get('/ward', ward.getWards);
router.get('/ward/:id',ward.getWard)
router.post('/ward',requireJsonContent, ward.addWard)
router.delete('/ward/:id', ward.deleteWard )
router.put('/ward/:id',requireJsonContent, ward.updateWard)
router.get('/ward/lga/:lgaId', ward.loadWardswithLga)
////===========================
router.get('/hospital', hospital.getHospitals);
router.get('/hospital/:id',hospital.getHospital)
router.get('/hospital/:id/hospital',hospital.getHospitalWithInclude)
router.post('/hospital',requireJsonContent, hospital.addHospital)
router.delete('/hospital/:id', hospital.deleteHospital )
router.get('/hospital/:countryId/:regionId/:stateId/:lgaId/lga',hospital.getHospitalWithLga)
router.put('/hospital/:id',requireJsonContent, hospital.updateHospital)
//===============================
router.get('/forms/register', gform.getGforms);
router.get('/register/:id',gform.getGform)
//router.get('/register/:id/hospital',hospital.getHospitalWithInclude)
router.post('/register/add/',requireJsonContent, gform.addGform)
router.delete('/register/:id', gform.deleteGform )
router.put('/register/:id',requireJsonContent, gform.updateGform)
router.get('/register/:userId/userId', gform.getGformuserId)
//=====================================================
router.get('/gifship', gifship.getGifship);
router.post('/gifship-type', gifship.createGifshipType)
router.get('/gifshipList', gifship.getGifshipList);
router.delete('/gifshipList/:id', gifship.getGifshipDelete);
router.get('/gifshipedit/:id', gifship.Gifshipone);
router.put('/gifshipList/:id', gifship.GifshipUpdate);
router.get('/gifshipLists/:id', gifship.GifshipbyId);
//============GifshipPackage================
router.get('/gifshipPackage', gifshipPackage.getGifshipPackages);
router.post('/gifshipPackage', gifshipPackage.addGifshipPackage)
router.delete('/gifshipPackage/:id', gifshipPackage.deleteGifshipPackage);
router.get('/gifshipPackage/:id', gifshipPackage.getGifshipPackage);
router.get('/gifshipPackageList/:id', gifshipPackage.getGifshipPackageWithGigshipTypeId);
router.put('/gifshipPackage/:id', gifshipPackage.updateGifshipPackage);
//getGifshipPackageWithGigshipTypeId
//==============LOOKUPS TABLES==========
router.get('/lookups/:id/lga',lookup.lookUpLga)
router.get('/lookups/:id/state',lookup.lookUpState)
router.get('/lookups/:id/region',lookup.lookUpRegion)
router.get('/lookups/:id/country',lookup.lookUpCountry)
/**/
//===============image function=========

const storage = multer.diskStorage({
  destination: function (req, file, cb){
    cb(null, '../clients/public/upload')
  },
  filename: function (req, file, cb){
    cb(null, Date.now() + file.originalname)
  },
});
const upload = multer({
    storage,
    limits:{fieldSize:1000000},
    
    })
router.post('/uploadfile', upload.single('file'), function(req, res){
  const file = req.file
  return res.status(200).json(file.filename)

  
})
//============END OF IMAGE

module.exports = router
