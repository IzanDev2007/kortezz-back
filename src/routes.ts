import { Router } from 'express';
import {login} from "./handlers/login";
import {addSong} from "./handlers/Songs/addSong";
import {editNewSongLink} from "./handlers/New Song Link/editNewSongLink";
import {getNewSongLink} from "./handlers/New Song Link/getNewSongLink";
import {getSpotifySong} from "./handlers/Spotify Song Link/getSpotifySong";
import {editSpotifySong} from "./handlers/Spotify Song Link/editSpotifySong";
import {getSongs} from "./handlers/Songs/getSongs";
import {deleteSong} from "./handlers/Songs/deleteSong";
import {getEvent,addEvent,deleteEvent} from "./handlers/events";
import {getImages,uploadImage,deleteImage} from "./handlers/images";

const router = Router();

// Rutas
router.post('/login',login);
router.post('/addSong',addSong);
router.put('/editNewSongLink',editNewSongLink);
router.get('/getNewSongLink',getNewSongLink);
router.put('/editSpotifySong',editSpotifySong);
router.get('/getSpotifySong',getSpotifySong);
router.get('/getAllSongs',getSongs);
router.delete('/deleteSong/:id',deleteSong);
router.get('/event',getEvent);
router.post('/event',addEvent);
router.delete('/event/:id',deleteEvent);
router.get('/images',getImages);
router.post('/images',uploadImage);
router.delete('/images/:id',deleteImage);
export default router;
