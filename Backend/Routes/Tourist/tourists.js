const router = require("express").Router();
let Tourist = require("../../Model/Tourist/tourist");


function validateTouristData(req, res, next) {
    const { name, age, country, gender, ipackage, period, destination, tripStartDate, tripEndDate } = req.body;

    // Check if all required fields are present
    if (!name || !age || !country || !gender || !ipackage || !period || !destination || !tripStartDate || !tripEndDate) {
        return res.status(400).json({ error: "All fields are required" });
    }

   
    next();
}

// Route for adding insured tourists
router.post("/add", validateTouristData, (req, res) => {
    const { name, age, country, gender, ipackage, period, destination, tripStartDate, tripEndDate } = req.body;

    const newInTourist = new Tourist({
        name,
        age: Number(age),
        country,
        gender,
        ipackage,
        period,
        destination,
        tripStartDate: new Date(tripStartDate),
        tripEndDate: new Date(tripEndDate)
    });

    newInTourist.save()
        .then(() => {
            res.json("Insured Tourist Added");
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ error: "An error occurred while saving the tourist data" });
        });
});

//display
router.route("/dis").get((req,res)=>{

    Tourist.find().then((tourists)=>{
        res.json(tourists)
    }).catch((error)=>{
        console.log(error.message);
        res.status(500).json({ error: "An error occurred while saving the tourist data" });
    })
})
// Display user details after login

//update


router.route("/update/:id").put(async (req, res)=>{
    let userId = req.params.id;
    const {name,age,country,gender,ipackage,period,destination,tripStartDate,tripEndDate} = req.body;

    const updateTourist = {
        name,
        age,
        country,
        gender,
        ipackage,
        period,
        destination,
        tripStartDate,
        tripEndDate
    }
    const update = await Tourist.findByIdAndUpdate(userId, updateTourist)
    .then(()=>{
        res.status(200).send({status: "Insurance Details Updated"})
    }).catch((error) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data",error: error.message});
    })

    
})

//delete insurace profile

router.route("/delete/:id").delete(async (req,res) =>{
    let userId = req.params.id;

    await Tourist.findByIdAndDelete(userId)
    .then(()=>{
        res.status(200).send({status: "Insurance profile deleted"});
    }).catch((error)=>{
        console.log(error);
        res.status(500).send({status: "Error with delete user", error: error.message});
    })
})

//get tourist data
router.route("/get/:id").get(async (req,res)=>{
    let userId = req.params.id;
    const user = await Tourist.findById(userId)
    .then((tourist)=>{
        res.status(200).send({status: "User fetched",tourist})
    }).catch((error)=>{
        console.log(error.message);
        res.status(500).send({status: "Error with get user", error: error.message});
    })
})



module.exports = router;
