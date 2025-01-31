import dataTapas from '../Data/Images.json'

export const pedirDatos = () =>{
    return new Promise ((resolve, reject) =>{
        resolve (dataTapas)
    })
}