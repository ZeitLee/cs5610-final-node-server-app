import * as membersDao from "./members-dao.js";

const MembersController = (app) => {

    const joinClub = async (req, res) => {
        const currentUser = req.session["currentUser"];
        if (!currentUser) {
            res.sendStatus(403);
            return;
        }
        const clubId = req.params.clubId;
        const member = { userId: currentUser._id, clubId: clubId };
        const members = await membersDao.joinClub(member);
        res.json(members);
    }

    const findAllMembers = async (req, res) => {
        const clubId = req.params.clubId;
        const members = await membersDao.findMembers(clubId);
        res.json(members);
    }

    const findAllClubs = async (req, res) => {
        const userId = req.params.userId;
        const clubs = await membersDao.findClubs(userId);
        res.json(clubs);
    }

    const checkConnection = async (req, res) => {
        console.log(req.body);
        const userId = req.params.userId;
        const clubId = req.params.clubId;
        const target = await membersDao.findConnection(userId, clubId);

        if (target) {
            res.json(target);
        } else {
            res.sendStatus(404);
        }
    }


    const deleteMember = async (req, res) => {
        const userId = req.params.userId;
        const status = await membersDao.deleteMember(userId, req.body);
        res.send(status);
    }

    app.post("/api/members/:clubId", joinClub);
    app.get("/api/members/clubs/:clubId", findAllMembers);
    // app.get("/api/members/:clubId/:userId", checkConnection);
    app.get("/api/members/users/:userId", findAllClubs);
    app.delete("/api/members/users/:userId", deleteMember);
};

export default MembersController;