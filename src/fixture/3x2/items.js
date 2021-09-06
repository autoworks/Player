import rotatorImages from './rotator-images.json'
import photos from './photos.json'

const items = [
  {
    type: 'exterior',
    images: rotatorImages,
    thumbnail:
      'https://res.cloudinary.com/citygate/image/upload/w_300,h_200,c_fill,g_north/autoloadit/Img/pic/10/34794/360/72.jpg'
  },
  {
    type: 'interior',
    thumbnail:
      'https://res.cloudinary.com/citygate/image/upload/w_300,h_200,c_fill/autoloadit/Img/pic/10/34794/S-12122637-637.jpg',
    // caption: 'Overwritten caption',
    src:
      'https://res.cloudinary.com/citygate/image/upload/f_auto,q_auto/autoloadit/Img/pic/10/34794/360Int/01.jpg',
    poster:
      'https://res.cloudinary.com/citygate/image/upload/w_800,h_450,c_fill/autoloadit/Img/pic/10/34794/S-12122637-637.jpg',
    hotspots: [
      {
        tooltip: 'Gearstick',
        pitch: -29.915,
        yaw: 4.959,
        id: 'gearstick'
      },
      {
        tooltip: 'Dashboard',
        pitch: -11.666,
        yaw: 26.393,
        hfov: 90,
        id: 'dashDriver',
        autoFocus: true
      }
    ]
  },
  {
    type: 'video',
    thumbnail:
      'https://res.cloudinary.com/citygate/image/upload/w_300,h_200,c_fill/autoloadit/Img/pic/10/34794/S-12122638-419.jpg',
    poster:
      'https://res.cloudinary.com/citygate/image/upload/w_800,h_450,c_fill/autoloadit/Img/pic/10/34794/S-12122638-419.jpg',
    src:
      'https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_1920_18MG.mp4'
    // aspectRatio: 9 / 16
  },
  ...photos
]

export default items
