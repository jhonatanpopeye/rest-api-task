import { Schema, model } from 'mongoose';
import mongoosePaginative from 'mongoose-paginate-v2';

const taskShema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type:String,
        trim: true
    },
    done: {
        type: Boolean,
        default: false
    },
},{
    versionKey: false,
    timestamps: true
});

taskShema.plugin(mongoosePaginative);
export default model('Tasks', taskShema)