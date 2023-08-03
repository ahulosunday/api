 const Logout = async (req, res) => {
   // localStorage.removeItem("user");

res.clearCookie("access_token", {
    sameSite: "none",
    secure: true
}).status(200).json({ success: true, message: 'User logged out successfully' })
 /*    
   res.cookie('access_token', 'none', {
        expires: new Date(Date.now() + 2 * 1000),
        httpOnly: true,
    })
        .status(200)
        .json({ success: true, message: 'User logged out successfully' }) */
}
module.exports = {
    Logout,
}

