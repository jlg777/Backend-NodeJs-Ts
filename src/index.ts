import app from './app'
const PORT = 3000


app.listen(PORT, () => {
    console.log(`Servidor funcionando en puerto: http://localgost:${PORT}`)
})