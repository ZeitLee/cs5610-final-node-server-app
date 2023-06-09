import * as usersDao from "./users-dao.js";


const AuthController = (app) => {
    const register = async (req, res) => {
        const username = req.body.username;
        const user = await usersDao.findUserByUsername(username);
        if (user) {
            res.sendStatus(409);
            return;
        }
        const newUser = await usersDao.createUser(req.body);
        req.session["currentUser"] = newUser;
        res.json(newUser);
    };

    const login = async (req, res) => {
        const username = req.body.username;
        const password = req.body.password;
        const user = await usersDao
            .findUserByCredentials(username, password);
        if (user) {
            req.session["currentUser"] = user;
            res.json(user);
        } else {
            res.sendStatus(404);
        }
    };

    const profile = async (req, res) => {
        const currentUser = req.session["currentUser"];
        if (!currentUser) {
            res.sendStatus(404);
            return;
        }
        res.json(currentUser);
    };

    const logout = async (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    };

    const findAllUsers = async (req, res) => {
        const users = await usersDao.findAllUsers();
        res.json(users);
    };

    const findUserById = async (req, res) => {
        const user = await usersDao.findUserById(req.params.userId);
        if (user) {
            res.json(user);
            return;
        }
        res.sendStatus(404);
    };

    const update = async (req, res) => {
        const currentUser = await usersDao.findUserById(req.params.userId);
        const updatedUser = req.body;
        console.log(updatedUser);
        if (!currentUser) {
            res.sendStatus(404);
            return;
        }
        req.session["currentUser"] = updatedUser;
        const status = await usersDao.updateUser(currentUser, updatedUser);
        res.json(status);
    };


    app.post("/api/users/register", register);
    app.post("/api/users/login", login);
    app.post("/api/users/profile", profile);
    app.post("/api/users/logout", logout);
    app.put("/api/users/:userId", update);
    app.get("/api/users", findAllUsers);
    app.get("/api/users/:userId", findUserById);
};
export default AuthController;