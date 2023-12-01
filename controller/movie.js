const Movies = require("../modal/Movies");

exports.getAllMovie = async(req, res) => {
    try {
        const result =  await Movies.findAll()
        if(result){
            return res.status(200).json({msg: 'Ok', success: true, result})
        }else{
            return res.status(404).json({msg: 'No movies found in favourite list?', success: false})
        }
    } catch (error) {
        console.log("error on getAllMovie: ", error);
        return res.status(500).json({err: error.message, error, success: false})
    }
}

exports.addMovie =async(req, res) => {
    const {Title, Poster, Plot, Type, Released} = req.body
    try {
        const result = await Movies.create({Title, Poster, Plot, Type, Released })
        if(result){
            return res.status(200).json({msg: 'Movie added to favourite successfully', success: true})
        }else{
            return res.status(400).json({msg: 'Failed to add movie in favourite?', success: false})
        }
    } catch (error) {
        console.log("error on addMovie: ", error);
        return res.status(500).json({err: error.message, error, success: false})
    }
}