const Itineraries = require('../models/itineraries')

const commentsControllers = {

  addComment: async (req, res) => {
    const { itinerary, comment } = req.body.comment
    const user = req.user._id
    try {
      const nuevoComment = await Itineraries.findOneAndUpdate({ _id: itinerary }, { $push: { comments: { comment: comment, userID: user } } }, { new: true }).populate("comments.userID", { firstName: 1, photoURL:1 })
      res.json({ success: true, response: { nuevoComment }, message: "Thanks you for let us your comment" })

    }
    catch (error) {
      console.log(error)
      res.json({ success: false, message: "Something went wrong try again in a few minutes" })
    }

  },

  modifiComment: async (req, res) => {
    const { commentID, comment } = req.body.comment
    const user = req.user._id
    try {
      const newComment = await Itineraries.findOneAndUpdate({ "comments._id": commentID }, { $set: { "comments.$.comment": comment } }, { new: true })
      console.log(newComment)
      res.json({ success: true, response: { newComment }, message: "Your comment has been modified" })

    }
    catch (error) {
      console.log(error)
      res.json({ success: true, message: "Something went wrong try again in a few minutes" })
    }

  },
  
  deleteComment: async (req, res) => {
    const id = req.params.id
    const user = req.user._id
    try {
      const deleteComment = await Itineraries.findOneAndUpdate({ "comments._id": id }, { $pull: { comments: { _id: id } } }, { new: true })
      console.log(deleteComment)
      res.json({ success: true, response: { deleteComment }, message: "You deleted the comment" })

    }
    catch (error) {
      console.log(error)
      res.json({ success: false, message: "Something went wrong try again in a few minutes" })
    }

  },

}
module.exports = commentsControllers