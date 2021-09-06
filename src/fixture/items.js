import rotatorImages from './rotator-images.json'
import photos from './photos.json'

const items = [
  {
    id: 'exterior',
    type: 'exterior',
    images: rotatorImages,
    reverseDirection: false,
    initialIndex: 40,
    thumbnail:
      'https://media.auto.works/300/150/cover/fa35d14c655a57c18c6d9cba0f1b9e96:53febc64e8096f330dded9793ada3257'
  },
  {
    id: 'interior',
    type: 'interior',
    // caption: 'Overwritten caption',
    thumbnail:
      'https://media.auto.works/300/150/cover/e5fc7be505271576da3b2a3d438ff38c:c308a0ddab99d07131175467c54106d5',
    src:
      'https://media.auto.works/6000/e5fc7be505271576da3b2a3d438ff38c:ee97105b5080a824ee220940dc6aa4bd',
    poster:
      'https://media.auto.works/400/250/cover/e5fc7be505271576da3b2a3d438ff38c:ef91fd4a92f6ae416ede02c624f75968',
    hfov: 100,
    pitch: 0,
    yaw: 0,
    hotspots: [
      {
        tooltip: 'Gearstick',
        pitch: -50.915,
        yaw: -5,
        id: 'gearstick'
      },
      {
        tooltip: 'Dashboard',
        pitch: -35,
        yaw: 26.393,
        hfov: 90,
        id: 'dashDriver',
        autoFocus: true
      }
    ]
  },
  {
    id: 'video-1',
    type: 'video',
    thumbnail:
      'https://media.auto.works/300/150/cover/133d11922895b284a7af803b6e7559fb:e33023501c1f11a0c41cf3210a6df78f',
    poster:
      'https://media.auto.works/800/500/cover/133d11922895b284a7af803b6e7559fb:837feb6ce4145520642a3549929aacce',
    src:
      'https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_1920_18MG.mp4',
    aspectRatio: 9 / 16
  },
  ...photos
]

export default items
