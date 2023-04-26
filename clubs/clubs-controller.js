import * as clubsDao from "./clubs-dao.js";

const ClubController = (app) => {
    const createClub = async (req, res) => {
        const clubname = req.body.name;
        const club = await clubsDao.findClubByName(clubname);
        if (club) {
            res.sendStatus(409);
            return;
        }
        const newClub = await clubsDao.createClub(req.body);
        res.json(newClub);
    };

    const findAllClubs = async (req, res) => {
        const clubs = await clubsDao.findAllReviews();
        res.json(clubs);
    }

    const findClubById = async (req, res) => {
        const clubId = req.params.id;
        const club = await clubsDao.findClubById(clubId);
        res.json(club);
    }


    app.post("/api/clubs", createClub);
    app.get("/api/clubs", findAllClubs);
    app.get("/api/clubs/:id", findClubById);
};


export default ClubController;