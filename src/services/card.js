// todo de-stub to api call
// stubbed out card retrival that also allows setting of unique path

import shortid from 'shortid'
import _ from 'lodash'

const getCard = (path) => {
  return {
    path,
    storageType: 'db',
    basicCard: {
      title: 'Completing Your JWMI MBA',
      subtitle: 'Earning your JWMI MBA at YOUR pace',
      formattedText: '<p>If you begin attendance in {{termStartDesc}}, taking {{pace}} course(s) per quarter, and completing {{attendQtr}} quarters a year, you could earn your MBA as early as {{termEndDesc}}.</p>',
      image: {
        imageUri: 'https://jackwelch.strayer.edu/assets/img/JW-Logo.png'
      },
      buttons: [
        {
          title: 'Apply now!',
          openUriAction: {
            uri: 'https://jackwelch.strayer.edu/about'
          }
        }, {
          title: 'Email me more info',
          openUriAction: {
            uri: '#app/email?about=jwi_mba'
          }
        }
      ]
    }
  }
}

const toUI = dbObj => ({
  uid: shortid.generate(),
  path: dbObj.path,
  storageType: dbObj.storageType,
  title: dbObj.basicCard.title,
  subtitle: dbObj.basicCard.subtitle,
  formattedText: dbObj.basicCard.formattedText,
  imageUri: dbObj.basicCard.image.imageUri,
  buttons: dbObj.basicCard.buttons.map(b => ({
    uid: shortid.generate(),
    title: b.title,
    uri: b.openUriAction.uri
  }))
})

const fromUI = uiObj => ({
  path: uiObj.path,
  storageType: uiObj.storageType,
  basicCard: {
    title: uiObj.title,
    subtitle: uiObj.title,
    formattedText: uiObj.title,
    image: {
      imageUri: uiObj.imageUri
    },
    buttons: uiObj.buttons.map(b => ({
      title: b.title,
      openUriAction: {
        uri: b.uri
      }
    }))
  }
})

const copyUI = uiObj => _.cloneDeep(uiObj)
// Object.assign({}, {
//   uid: uiObj.uid,
//   path: uiObj.path,
//   storageType: uiObj.storageType,
//   title: uiObj.title,
//   subtitle: uiObj.subtitle,
//   formattedText: uiObj.formattedText,
//   imageUri: uiObj.imageUri,
//   buttons: uiObj.buttons.slice()
// })

// const uiSwapButtons = (ia, ib) => (uiObj) => {
//   let arr = _.slice(uiObj)

export {
  getCard,
  toUI,
  fromUI,
  copyUI
}

export default {
  getCard,
  toUI,
  fromUI,
  copyUI
}
