export const morningGreet = (name: string) => {
  const monarchCats = ['Garfield', 'Felix']
  let greet = `Good morning, `

  if (monarchCats.includes(name)) {
    greet += `your highness, `
  }

  return greet + name + '!';
}
