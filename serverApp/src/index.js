const start = async () => {
  try {
    await require('./db')
    await require('./server')
  } catch (error) {
    console.error(`Error: ${error}`)
  }
}

start()