const router = require('express').Router()
const upload = require('../../upload')

const Song = require('../../../db/models/song')

router.get('/', async (req, res) => {
    const song = await Song
        .find()
        .select('author name tags')
    res.send(song)
})

router.get('/:id', (req, res) => {
    Song.findById(req.params.id)
        .then(data => res.send(data))
})

router.post('/add', (req, res) => {
    const {
        songName,
        authorName,
        urlName,
        tags,
    } = req.body
    const newSong = new Song({
        name: songName,
        author: authorName,
        url: urlName,
        tags,
    })
    newSong.save()
    res.send(newSong)
})

router.post('/edit/:id', async (req, res) => {
    const {
        songName,
        authorName,
        urlName,
        tags,
    } = req.body
    await Song.findByIdAndUpdate(req.params.id, {
        name: songName,
        author: authorName,
        url: urlName,
        tags,
    })
    res.send()
})

router.post('/upload', upload.single('image'), async (req, res) => {
    let filedata = req.file
    console.log(filedata)
    console.log(req.body)
    if(!filedata)
        res.send("Ошибка при загрузке файла")
    else
        res.send("Файл загружен")
})


module.exports = router