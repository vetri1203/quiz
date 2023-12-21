export const Sample = (req, res) => {
    try {
        console.log("message ffrom sample file");
        res.status(200).send("message from Sample");
    } catch (error) {
        console.log("message ffrom sample file");
        res.status(200).send("message from Sample");
    }
  
};
