import followsModel from './follows-model.js'

export const followUser = async (follow) => await followsModel.create(follow);

export const followers = async (followedId) =>
    await followsModel.find({ followedId: followedId })
        .populate("followerId", "username firstname lastname medal")
        .exec();

export const following = async (followerId) =>
    await followsModel.find({ followerId: followerId })
        .populate("followedId", "username firstname lastname medal")
        .exec();;

export const UnFollowing = async (following) => await followsModel.deleteOne(following);