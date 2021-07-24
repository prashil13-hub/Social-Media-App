const multer = require('multer')


// specify storage engine of multer
const storage = multer.diskStorage({

    destination: function(req,file,cb){
        cb(null,'./uploads')
    },
    filename: function(req,file,cb){
        cb(null,Date.now() + '-' + file.originalname)
    }

})


// file validation
const fileFilter = (req,file,cb)=>{
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg'){
        cb(null,true)
    }else{
        // prevent the upload
        cb({message:'Unsupported File Formate'},false)
    }

}

const upload = multer({
    storage:storage,
    limits:{fileSize:1024*1024},
    fileFilter:fileFilter
})

module.exports=upload;