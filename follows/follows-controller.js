import * as followsDao from "./follows-dao.js";

const FollowController = (app) => {

    const followUser = async (req, res) => {
        const currentUser = req.session["currentUser"];
        if (!currentUser) {
            res.sendStatus(403);
            return;
        }
        const followedId = req.params.followedId;
        console.log(followedId);
        const follow = { followerId: currentUser._id, followedId: followedId };
        const follows = await followsDao.followUser(follow);
        res.json(follows);
    }

    const followers = async (req, res) => {
        const followedId = req.params.followedId;
        const followers = await followsDao.followers(followedId);
        res.json(followers);
    }

    const following = async (req, res) => {
        const followerId = req.params.followerId;
        const following = await followsDao.following(followerId);
        res.json(following);
    }

    app.post("/api/follows/:followedId", followUser);
    app.get("/api/follows/followers/:followedId", followers);
    app.get("/api/follows/following/:followerId", following);

};


export default FollowController;