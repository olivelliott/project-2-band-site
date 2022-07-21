const Post = require("./Post");
const User = require("./User");
const Comment = require("./Comment");
const Show = require("./Show");

User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

User.belongsToMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});




module.exports = { User, Post, Comment, Show };

