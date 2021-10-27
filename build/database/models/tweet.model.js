"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tweet = void 0;
const mongoose_1 = require("mongoose");
const tweetSchema = new mongoose_1.Schema({
    content: {
        type: String,
        maxLength: [140, "Tweet trop long"],
        minLength: [5, "Tweet trop court"],
        required: [true, "Veuillez saisir un texte"],
    },
    author: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
}, {
    timestamps: true,
});
exports.Tweet = (0, mongoose_1.model)("tweet", tweetSchema);
//# sourceMappingURL=tweet.model.js.map