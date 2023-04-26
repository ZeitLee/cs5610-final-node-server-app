import clubsModel from './clubs-model.js'

export const createClub = async (club) => await clubsModel.create(club);

export const findClubById = async (cid) =>
    await clubsModel.findById(cid);

export const findClubByName = async (name) =>
    await clubsModel.findOne({ name });

export const findAllReviews = async () => {
    return await clubsModel.find();
}
