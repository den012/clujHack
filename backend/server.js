const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());

app.use(bodyParser.json());

app.post('/saveVideo', (req, res) => {
    const videoIndex = req.body.video;
    console.log('Received video index:', videoIndex);

    const dataToWrite = videoIndex;

    fs.writeFile('videoData.json', JSON.stringify(dataToWrite, null, 2), (err) => {
        if (err) {
            console.error('Error writing file:', err);
            res.status(500).json({ message: 'Error writing file' });
            return;
        }

        console.log('Data written to file successfully');
        res.json({ message: 'Video index received and written to file' });
    });
});

app.get('/getVideo', (req, res) => {
    fs.readFile('videoData.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            res.status(500).json({ message: 'Error reading file' });
            return;
        }

        const videoIndex = JSON.parse(data);
        console.log('Data read from file:', videoIndex);

        res.json({ video: videoIndex });
    });
});


app.listen(3000, () => console.log('Server running on port 3000'));