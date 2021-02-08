const mongoose = require('mongoose')
const  validator = require('validator');
const bcrypt = require('bcrypt')
const userSchema = new mongoose.Schema({
    username:{type : String,trim:true,required:true,minlength:4} ,
    email : {type : String,trim:true,required:true,unique:true,validate: function (value){
            if(validator.isEmail(value)){
                return true
            }
            return false
        },
    },
    password : {type : String,trim:true,minlength:8,required:true},
    nationality:{type:String,required:true},
    gender:{type:String,enum : ['sexe.male','sexe.female'],required:true},
    age :{type : Number ,min:0,max:150,required:true},
    imageUrl:{type:String,
    //     validate:function (value){
    //     if(validator.isURL(value)){
    //         return true
    //     }
    //     return false
    // },
    required:true},
    trips:[{type:mongoose.SchemaTypes.ObjectId,ref:'trip'}]

})
userSchema.statics.FindByEmailAndPassword = async function  ({email}){
    return await user.findOne({email})
}
userSchema.pre('save',function (next){
    this.password = bcrypt.hashSync(this.password,8)
    next()
})
const user = mongoose.model('user',userSchema)
module.exports = user
