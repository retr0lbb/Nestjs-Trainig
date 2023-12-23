import * as mongoose from "mongoose";
import * as bcrypt from "bcrypt";

export const UserSchema = new mongoose.Schema({
    name: {
        type: String, required: true
    },
    email: {
        type: String, required: true
    },
    pass: {
        type: String, required: true
    }
})


UserSchema.pre("save", async function(next: any ){
    try {
        if(!this.isModified("pass")){
            return next()
        }


        this["pass"] = await bcrypt.hash(this["pass"], 10)
    } catch (error) {
        return next(error)
    }
})