const mongoose= require("mongoose")

const motosschema = new mongoose.Schema({

    placa:{
        type:String,
        required:[true,"placa is required"],

    },

    marca:{
        type:String,
        required:[true,"marca is required"],

    },
    color:{
        type:String,
        required:[true,"color is required"],

    },
    modelo:{
        type:Number,
        required:[true,"modelo is required"],

    },
    cilindraje:{
        type:String,
        required:[true,"cilindraje is required"],

    },


})

const motosModel =mongoose.model("motos",motosschema)

module.exports=motosModel