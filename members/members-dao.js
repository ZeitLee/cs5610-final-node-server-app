import membersModel from './members-model.js'

export const joinClub = async (member) => await membersModel.create(member);

export const findMembers = async (clubId) =>
    await membersModel.find({ clubId: clubId })
        .populate("userId", "username firstname lastname")
        .exec();

export const findClubs = async (userId) =>
    await membersModel.find({ userId: userId })
        .populate("clubId", "name intro")
        .exec();

export const deleteMember = async (userId) => {
    return await membersModel.deleteOne({ userId: userId });
}


export const findConnection = async (userId, clubId) => await membersModel.findOne({ userId, clubId });
