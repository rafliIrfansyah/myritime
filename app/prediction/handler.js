const axios = require('axios')

module.exports = {
    handlerGetFishPrice: async (req,res) => {
        const daerah = req.body.daerah
        const ikan = req.body.ikan
        try {
            const result = await axios.post('https://prediksi-harga-ikan-guktqld2iq-et.a.run.app/predict', {
                daerah: daerah,
                ikan: ikan
            }
            );
            res.status(200).json({
                status: 'success',
                data: result.data.prediction,
            });
        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: error.message,
            });
        }
    }
}