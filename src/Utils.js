export const entrypoint = 'https://centralmedia.com.mx/facebook/cliente-nutribaby/cuidado/entrypoint.php'
export const encode = data => {
  return btoa(JSON.stringify(data))
}
export const cleanText = text => {
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}
