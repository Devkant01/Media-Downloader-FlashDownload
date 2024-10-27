import { mongoose } from './connect';

const userSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true,
        default: 0
    },
    rating: {
        type: mongoose.Types.Decimal128,
        required: true,
        default: 3 //default rating is 3/5
    }
});

const User = mongoose.model("User", userSchema);

// total rating= sum of ratings of all users / total number of users

export { User };